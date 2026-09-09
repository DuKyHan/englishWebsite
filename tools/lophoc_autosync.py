"""
Lop Hoc Co Chi - AutoSync
Tu dong quet thu muc component/ de tao/cap nhat manifest.json, roi push len GitHub, chia theo 3 buoc.

Quy tac dong bo (xem sync_with_disk):
- Cac muc da co trong manifest.json duoc GIU NGUYEN ten/mo ta da tuy chinh.
- File .html moi xuat hien trong component/ (o goc hoac trong 1 thu muc con) ma chua co
  trong manifest se duoc TU DONG THEM vao (ten mac dinh lay tu ten file).
- Thu muc con moi trong component/ ma chua co trong manifest se duoc tao thanh 1 muc
  "folder" moi, voi cac file .html ben trong lam children.
- Muc trong manifest.json ma file/thu muc tuong ung khong con ton tai tren dia se
  TU DONG BI XOA khoi manifest khi luu.
"""
import json
import os
import shutil
import subprocess
import sys
import threading
import tkinter as tk
from tkinter import ttk, messagebox

NO_WINDOW = getattr(subprocess, 'CREATE_NO_WINDOW', 0)


def _find_root_dir():
    start = os.path.dirname(sys.executable) if getattr(sys, 'frozen', False) else os.path.dirname(os.path.abspath(__file__))
    cur = start
    while True:
        if os.path.isdir(os.path.join(cur, 'component')):
            return cur
        parent = os.path.dirname(cur)
        if parent == cur:
            return start
        cur = parent


ROOT_DIR = _find_root_dir()
COMPONENT_DIR = os.path.join(ROOT_DIR, 'component')
MANIFEST_PATH = os.path.join(COMPONENT_DIR, 'manifest.json')
LOGO_PATH = os.path.join(ROOT_DIR, 'static', 'logo.png')

STEPS = [
    (1, "Quét & Xem trước"),
    (2, "Lưu file manifest"),
    (3, "Push lên GitHub"),
]


def load_manifest():
    if not os.path.exists(MANIFEST_PATH):
        return []
    with open(MANIFEST_PATH, 'r', encoding='utf-8') as f:
        return json.load(f)


def save_manifest(data):
    with open(MANIFEST_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write('\n')


def _list_html_in_dir(dir_path):
    """File .html nam TRUC TIEP trong dir_path (khong de quy vao thu muc con)."""
    if not os.path.isdir(dir_path):
        return []
    out = []
    for f in os.listdir(dir_path):
        full = os.path.join(dir_path, f)
        if os.path.isfile(full) and f.lower().endswith('.html'):
            out.append(f)
    return sorted(out, key=str.lower)


def sync_with_disk(manifest):
    """
    Doi chieu manifest hien tai voi thu muc component/ tren dia.
    Tra ve (new_manifest, added, removed) trong do added/removed la list mo ta (str) de hien thi log.
    Khong ghi file - chi tra ve du lieu da duoc dong bo trong bo nho.
    """
    added = []
    removed = []
    new_manifest = []

    for item in manifest:
        if item.get('type') == 'folder':
            fname = item.get('name', '')
            folder_dir = os.path.join(COMPONENT_DIR, fname)
            if not os.path.isdir(folder_dir):
                for ch in item.get('children', []):
                    removed.append(f"{fname}/{ch.get('name', ch.get('file', ''))}")
                removed.append(f"[Thư mục] {fname} (không còn tồn tại)")
                continue

            existing_children_files = set()
            kept_children = []
            for ch in item.get('children', []):
                file_ = ch.get('file', '')
                full = os.path.join(COMPONENT_DIR, file_.replace('/', os.sep))
                if os.path.isfile(full):
                    kept_children.append(ch)
                    existing_children_files.add(file_.replace('\\', '/'))
                else:
                    removed.append(f"{fname}/{ch.get('name', file_)}")

            had_children_before = bool(item.get('children'))
            for f in _list_html_in_dir(folder_dir):
                rel = f"{fname}/{f}"
                if rel not in existing_children_files:
                    base = os.path.splitext(f)[0]
                    kept_children.append({"name": base, "file": rel, "desc": ""})
                    added.append(f"{fname}/{base}")

            if had_children_before and not kept_children:
                removed.append(f"[Thư mục trống] {fname} (đã xóa hết bài bên trong)")
                continue

            new_item = dict(item)
            new_item['children'] = kept_children
            new_manifest.append(new_item)
        else:
            file_ = item.get('file', '')
            full = os.path.join(COMPONENT_DIR, file_.replace('/', os.sep))
            if os.path.isfile(full):
                new_manifest.append(item)
            else:
                removed.append(f"{item.get('name', file_)}")

    known_folder_names = {i.get('name', '') for i in new_manifest if i.get('type') == 'folder'}
    known_root_files = {i.get('file', '').replace('\\', '/') for i in new_manifest if i.get('type') != 'folder'}

    if os.path.isdir(COMPONENT_DIR):
        for entry in sorted(os.listdir(COMPONENT_DIR), key=str.lower):
            full = os.path.join(COMPONENT_DIR, entry)
            if os.path.isdir(full):
                if entry in known_folder_names:
                    continue
                children = []
                for f in _list_html_in_dir(full):
                    base = os.path.splitext(f)[0]
                    rel = f"{entry}/{f}"
                    children.append({"name": base, "file": rel, "desc": ""})
                    added.append(rel)
                if children:
                    new_manifest.append({"name": entry, "type": "folder", "desc": "", "children": children})
                    added.append(f"[Thư mục mới] {entry}")
            elif entry.lower().endswith('.html'):
                if entry in known_root_files:
                    continue
                base = os.path.splitext(entry)[0]
                new_manifest.append({"name": base, "file": entry, "desc": ""})
                added.append(base)

    # Thu muc (folder) luon xep truoc file roi, giu nguyen thu tu da co trong tung nhom
    # (sort la stable nen khong xao tron thu tu ben trong moi nhom).
    new_manifest.sort(key=lambda it: 0 if it.get('type') == 'folder' else 1)

    return new_manifest, added, removed


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Lớp học cô Chi - AutoSync")
        self.geometry("880x640")
        self.minsize(780, 560)
        self._set_app_icon()

        self.manifest = load_manifest()
        self.dirty = False
        self.step = 1

        self._build_style()
        self._build_stepper()
        self._build_statusbar()
        self._build_log()
        self._build_step1()
        self._build_step2()
        self._build_step3()

        self._refresh_table()
        self._show_step(1)

        self.git_available = self._check_git_setup()
        if self.git_available:
            threading.Thread(target=self._sync_on_startup, daemon=True).start()
        else:
            self.log("[!] Bỏ qua đồng bộ vì chưa cài Git.")
            self.push_btn.state(['disabled'])

    def _set_app_icon(self):
        if not os.path.isfile(LOGO_PATH):
            return
        try:
            self._icon_img = tk.PhotoImage(file=LOGO_PATH)
            self.iconphoto(True, self._icon_img)
        except tk.TclError:
            pass

    # ── GIT SETUP CHECK ─────────────────────────────────────────────
    def _check_git_setup(self):
        try:
            subprocess.run(["git", "--version"], cwd=ROOT_DIR, capture_output=True, text=True, creationflags=NO_WINDOW)
        except FileNotFoundError:
            messagebox.showwarning(
                "Chưa cài Git",
                "Không tìm thấy Git trên máy này.\n\n"
                "Cài Git for Windows (git-scm.com/downloads) rồi mở lại app "
                "để dùng được tính năng Đồng bộ / Push lên GitHub."
            )
            return False

        name = self._git_config_get("user.name")
        email = self._git_config_get("user.email")
        if not name or not email:
            messagebox.showwarning(
                "Thiếu thông tin Git",
                "Máy này chưa thiết lập user.name / user.email cho Git.\n"
                "Cần nhập để commit/push hoạt động đúng."
            )
            dialog = GitConfigDialog(self, init_name=name, init_email=email)
            self.wait_window(dialog)
            new_name, new_email = dialog.result
            subprocess.run(["git", "config", "--global", "user.name", new_name], cwd=ROOT_DIR, creationflags=NO_WINDOW)
            subprocess.run(["git", "config", "--global", "user.email", new_email], cwd=ROOT_DIR, creationflags=NO_WINDOW)
            self.log(f"[✓] Đã thiết lập git user.name='{new_name}', user.email='{new_email}'")
        return True

    def _git_config_get(self, key):
        try:
            proc = subprocess.run(["git", "config", "--global", "--get", key], cwd=ROOT_DIR,
                                   capture_output=True, text=True, creationflags=NO_WINDOW)
            return proc.stdout.strip()
        except FileNotFoundError:
            return ''

    # ── STYLE ───────────────────────────────────────────────────────
    def _build_style(self):
        style = ttk.Style(self)
        style.configure('StepActive.TLabel', background='#2f6fed', foreground='white',
                         padding=(12, 6), font=('Segoe UI', 10, 'bold'))
        style.configure('StepDone.TLabel', background='#d7ead7', foreground='#1a7a1a',
                         padding=(12, 6), font=('Segoe UI', 10, 'bold'))
        style.configure('StepTodo.TLabel', background='#eee', foreground='#888',
                         padding=(12, 6), font=('Segoe UI', 10, 'bold'))

    # ── STEPPER BAR ─────────────────────────────────────────────────
    def _build_stepper(self):
        bar = ttk.Frame(self, padding=(10, 10))
        bar.pack(fill='x')
        self.step_labels = {}
        for i, (num, name) in enumerate(STEPS):
            lbl = ttk.Label(bar, text=f"{num}. {name}")
            lbl.pack(side='left')
            lbl.bind('<Button-1>', lambda e, n=num: self._on_step_click(n))
            self.step_labels[num] = lbl
            if i < len(STEPS) - 1:
                ttk.Label(bar, text="  →  ", foreground='#999').pack(side='left')

    def _on_step_click(self, n):
        if n <= self.step:
            self._show_step(n)

    def _set_step_visual(self):
        for num, lbl in self.step_labels.items():
            if num == self.step:
                lbl.configure(style='StepActive.TLabel')
            elif num < self.step:
                lbl.configure(style='StepDone.TLabel')
            else:
                lbl.configure(style='StepTodo.TLabel')

    def _show_step(self, n):
        self.step = n
        for frame in (self.step1_frame, self.step2_frame, self.step3_frame):
            frame.pack_forget()
        if n == 1:
            self.step1_frame.pack(fill='both', expand=True, padx=10, pady=(0, 6))
        elif n == 2:
            self._update_step2_summary()
            self.step2_frame.pack(fill='both', expand=True, padx=10, pady=(0, 6))
        elif n == 3:
            self.step3_frame.pack(fill='both', expand=True, padx=10, pady=(0, 6))
        self._set_step_visual()

    # ── BUOC 1: QUET & XEM TRUOC ────────────────────────────────────
    def _build_step1(self):
        self.step1_frame = ttk.Frame(self)

        toolbar = ttk.Frame(self.step1_frame, padding=(0, 0, 0, 8))
        toolbar.pack(fill='x')
        ttk.Button(toolbar, text="🔍 Quét thư mục component/", command=self.scan_and_sync).pack(side='left', padx=(0, 4))
        ttk.Button(toolbar, text="✏️ Sửa", command=self.edit_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="🗑 Xóa", command=self.delete_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="⬆ Lên", command=lambda: self.move_entry(-1)).pack(side='left', padx=4)
        ttk.Button(toolbar, text="⬇ Xuống", command=lambda: self.move_entry(1)).pack(side='left', padx=4)
        ttk.Button(toolbar, text="🔍 Kiểm tra trùng tên", command=self.check_duplicates).pack(side='left', padx=4)

        hint = ttk.Label(
            self.step1_frame,
            text="Bấm \"Quét thư mục component/\" để tự động thêm bài mới / xóa bài không còn tồn tại. "
                 "Mục mới thêm được đánh dấu 🆕. Sửa tên/mô tả nếu cần rồi sang bước Lưu.",
            foreground='#555', wraplength=840, justify='left'
        )
        hint.pack(fill='x', pady=(0, 6))

        columns = ('name', 'file', 'desc')
        self.tree = ttk.Treeview(self.step1_frame, columns=columns, show='tree headings', selectmode='browse')
        self.tree.heading('#0', text='📂')
        self.tree.column('#0', width=40, minwidth=40, stretch=False)
        self.tree.heading('name', text='Tên (name)')
        self.tree.heading('file', text='File')
        self.tree.heading('desc', text='Mô tả')
        self.tree.column('name', width=140)
        self.tree.column('file', width=320)
        self.tree.column('desc', width=320)
        self.tree.tag_configure('new', background='#eaf7ea')
        self.tree.pack(fill='both', expand=True)
        self.tree.bind('<Double-1>', self._on_double_click)

        nav = ttk.Frame(self.step1_frame, padding=(0, 8, 0, 0))
        nav.pack(fill='x')
        ttk.Button(nav, text="Tiếp theo: Lưu file →", command=lambda: self._show_step(2)).pack(side='right')

    # ── BUOC 2: LUU FILE MANIFEST ──────────────────────────────────
    def _build_step2(self):
        self.step2_frame = ttk.Frame(self)

        box = ttk.Frame(self.step2_frame, padding=20)
        box.pack(fill='both', expand=True)

        self.step2_summary = tk.StringVar()
        ttk.Label(box, textvariable=self.step2_summary, font=('Segoe UI', 11), justify='left').pack(anchor='w', pady=(0, 16))

        self.save_btn = ttk.Button(box, text="💾 Lưu manifest.json", command=self._save_and_advance)
        self.save_btn.pack(anchor='w')

        nav = ttk.Frame(self.step2_frame, padding=(0, 8, 0, 0))
        nav.pack(fill='x', side='bottom')
        ttk.Button(nav, text="← Quay lại", command=lambda: self._show_step(1)).pack(side='left')
        self.step2_next_btn = ttk.Button(nav, text="Tiếp theo: Push →", command=lambda: self._show_step(3))
        self.step2_next_btn.pack(side='right')

    def _update_step2_summary(self):
        if self.dirty:
            self.step2_summary.set(
                f"Bạn đang có {self._count_entries()} bài học trong danh sách.\n"
                f"Có thay đổi CHƯA được lưu vào manifest.json — bấm nút bên dưới để lưu."
            )
            self.step2_next_btn.state(['disabled'])
        else:
            self.step2_summary.set(
                f"Bạn đang có {self._count_entries()} bài học trong danh sách.\n"
                f"Đã lưu vào manifest.json. Có thể sang bước Push."
            )
            self.step2_next_btn.state(['!disabled'])

    def _count_entries(self):
        n = 0
        for item in self.manifest:
            if item.get('type') == 'folder':
                n += len(item.get('children', []))
            else:
                n += 1
        return n

    def _save_and_advance(self):
        self.save()
        self._update_step2_summary()

    # ── BUOC 3: PUSH LEN GITHUB ─────────────────────────────────────
    def _build_step3(self):
        self.step3_frame = ttk.Frame(self)

        box = ttk.Frame(self.step3_frame, padding=20)
        box.pack(fill='x')

        ttk.Label(box, text="Nội dung commit:", font=('Segoe UI', 10)).pack(anchor='w')
        self.commit_msg_var = tk.StringVar(value="update")
        ttk.Entry(box, textvariable=self.commit_msg_var, width=60).pack(anchor='w', pady=(4, 14))

        self.push_btn = ttk.Button(box, text="🚀 Push lên GitHub", command=self.deploy)
        self.push_btn.pack(anchor='w')

        nav = ttk.Frame(self.step3_frame, padding=(0, 8, 0, 0))
        nav.pack(fill='x', side='bottom')
        ttk.Button(nav, text="← Quay lại", command=lambda: self._show_step(2)).pack(side='left')

    # ── LOG / STATUS ────────────────────────────────────────────────
    def _build_log(self):
        log_frame = ttk.LabelFrame(self, text="Nhật ký", padding=6)
        log_frame.pack(fill='x', expand=False, side='bottom', padx=10, pady=(0, 6))
        self.log_text = tk.Text(log_frame, height=8, state='disabled', wrap='word', bg='#111', fg='#0f0',
                                 font=('Consolas', 9))
        self.log_text.pack(fill='both', expand=True)

    def _build_statusbar(self):
        self.status = tk.StringVar(value=f"Đang mở: {MANIFEST_PATH}")
        ttk.Label(self, textvariable=self.status, anchor='w', relief='sunken').pack(fill='x', side='bottom')

    def log(self, msg):
        self.after(0, self._log_ui, msg)

    def _log_ui(self, msg):
        self.log_text.configure(state='normal')
        self.log_text.insert('end', msg + '\n')
        self.log_text.see('end')
        self.log_text.configure(state='disabled')

    # ── SYNC (git pull khi mo app) ────────────────────────────────────
    def _sync_on_startup(self):
        self.log("Đang đồng bộ dữ liệu mới nhất từ GitHub (có nhiều người dùng)...")
        try:
            rc = self._run(["git", "pull", "--rebase", "--autostash"])
            if rc != 0:
                self.log("[!] Không đồng bộ được (mất mạng hoặc đang có thay đổi chưa lưu). Đang dùng dữ liệu local.")
                return
        except FileNotFoundError:
            self.log("[!] Không tìm thấy lệnh 'git'. Cài Git for Windows để dùng tính năng đồng bộ.")
            return
        except Exception as e:
            self.log(f"[!] Lỗi khi đồng bộ: {e}")
            return
        self.after(0, self._reload_after_sync)

    def _reload_after_sync(self):
        if self.dirty:
            self.log("[i] Đã đồng bộ xong nhưng bạn đang có thay đổi chưa lưu (đã quét/sửa) — "
                      "giữ nguyên dữ liệu hiện tại, không nạp lại để tránh mất thay đổi. "
                      "Bấm \"Quét thư mục component/\" lại nếu muốn lấy thêm dữ liệu mới từ GitHub.")
            return
        self.manifest = load_manifest()
        self._new_keys = set()
        self._refresh_table(save_state=False)
        self.status.set(f"Đã đồng bộ mới nhất — Đang mở: {MANIFEST_PATH}")
        self.log("[✓] Đã đồng bộ xong, đang xem dữ liệu mới nhất.")

    # ── QUET & DONG BO VOI THU MUC component/ ─────────────────────────
    def scan_and_sync(self):
        new_manifest, added, removed = sync_with_disk(self.manifest)
        self.manifest = new_manifest
        self._new_keys = set(added)
        if added or removed:
            self._mark_dirty()
        self._refresh_table()

        if not added and not removed:
            self.log("[i] Đã quét component/ — không có thay đổi nào (manifest đã khớp với thư mục).")
        else:
            self.log(f"=== QUÉT component/ XONG: +{len(added)} mục mới, -{len(removed)} mục mồ côi ===")
            for a in added:
                self.log(f"  [+] {a}")
            for r in removed:
                self.log(f"  [-] {r}")
        messagebox.showinfo(
            "Quét xong",
            f"Đã thêm {len(added)} mục mới.\nĐã xóa {len(removed)} mục không còn tồn tại trên đĩa.\n\n"
            f"Xem chi tiết trong Nhật ký. Nhớ bấm \"Lưu manifest.json\" ở bước 2 để lưu lại."
        )

    # ── TABLE HELPERS ───────────────────────────────────────────────
    def _save_tree_state(self):
        state = {}
        try:
            state['scroll'] = self.tree.yview()
        except Exception:
            state['scroll'] = None
        state['open'] = set()
        for idx, item in enumerate(self.manifest):
            if item.get('type') == 'folder':
                iid = f"f{idx}"
                try:
                    val = self.tree.item(iid, 'open')
                    if str(val).lower() not in ('0', 'false', ''):
                        state['open'].add(item.get('name', ''))
                except Exception:
                    pass
        sel = self.tree.selection()
        if sel:
            iid = sel[0]
            try:
                vals = self.tree.item(iid, 'values')
                state['sel_name'] = vals[0] if vals else None
            except Exception:
                state['sel_name'] = None
        else:
            state['sel_name'] = None
        return state

    def _restore_tree_state(self, state):
        if not state:
            return
        if state.get('open'):
            for idx, item in enumerate(self.manifest):
                if item.get('type') == 'folder' and item.get('name', '') in state['open']:
                    iid = f"f{idx}"
                    try:
                        self.tree.item(iid, open=True)
                    except Exception:
                        pass
        if state.get('scroll'):
            try:
                self.tree.yview_moveto(state['scroll'][0])
            except Exception:
                pass
        if state.get('sel_name'):
            for idx, item in enumerate(self.manifest):
                if item.get('type') == 'folder':
                    if item.get('name', '') == state['sel_name']:
                        self.tree.selection_set(f"f{idx}")
                        self.tree.focus(f"f{idx}")
                        return
                    for ci, ch in enumerate(item.get('children', [])):
                        if ch.get('name', '') == state['sel_name']:
                            self.tree.selection_set(f"f{idx}-{ci}")
                            self.tree.focus(f"f{idx}-{ci}")
                            return
                else:
                    if item.get('name', '') == state['sel_name']:
                        self.tree.selection_set(f"r{idx}")
                        self.tree.focus(f"r{idx}")
                        return

    def _is_new(self, folder_name, entry_name, is_folder=False):
        keys = getattr(self, '_new_keys', set())
        if is_folder:
            return f"[Thư mục mới] {folder_name}" in keys
        if folder_name:
            return f"{folder_name}/{entry_name}" in keys
        return entry_name in keys

    def _refresh_table(self, save_state=True):
        state = self._save_tree_state() if save_state else None
        self.tree.delete(*self.tree.get_children())
        for idx, item in enumerate(self.manifest):
            if item.get('type') == 'folder':
                folder_iid = f"f{idx}"
                fname = item.get('name', '')
                tags = ('new',) if self._is_new(fname, fname, is_folder=True) else ()
                self.tree.insert('', 'end', iid=folder_iid, text='📁',
                                  values=(fname, '', item.get('desc', '')), tags=tags)
                for ci, ch in enumerate(item.get('children', [])):
                    ctags = ('new',) if self._is_new(fname, ch.get('name', '')) else ()
                    self.tree.insert(folder_iid, 'end', iid=f"f{idx}-{ci}", text='',
                                      values=(ch.get('name', ''), ch.get('file', ''), ch.get('desc', '')), tags=ctags)
            else:
                tags = ('new',) if self._is_new(None, item.get('name', '')) else ()
                self.tree.insert('', 'end', iid=f"r{idx}", text='',
                                  values=(item.get('name', ''), item.get('file', ''), item.get('desc', '')), tags=tags)
        if state:
            self._restore_tree_state(state)

    def _on_double_click(self, event):
        sel = self.tree.selection()
        if not sel:
            return
        iid = sel[0]
        if iid.startswith('f') and '-' not in iid:
            if self.tree.item(iid, 'open'):
                self.tree.item(iid, open=False)
            else:
                self.tree.item(iid, open=True)
        else:
            self.edit_entry()

    def _selected_index(self):
        sel = self.tree.selection()
        if not sel:
            return None, None
        iid = sel[0]
        if iid.startswith('r'):
            return int(iid[1:]), None
        elif '-' in iid and iid.startswith('f'):
            parts = iid.split('-')
            return int(parts[0][1:]), int(parts[1])
        elif iid.startswith('f'):
            return int(iid[1:]), None
        return None, None

    def _mark_dirty(self):
        self.dirty = True

    # ── SUA / XOA / DI CHUYEN ──────────────────────────────────────
    def edit_entry(self):
        idx, child_idx = self._selected_index()
        if idx is None:
            messagebox.showinfo("Chưa chọn", "Chọn 1 dòng để sửa trước.")
            return
        if child_idx is not None:
            item = self.manifest[idx]['children'][child_idx]
        else:
            item = self.manifest[idx]

        is_folder = item.get('type') == 'folder'
        dialog = EditDialog(self, "Sửa thư mục" if is_folder else "Sửa bài học",
                             init_name=item.get('name', ''), init_desc=item.get('desc', ''),
                             file_readonly=item.get('file') if not is_folder else None)
        self.wait_window(dialog)
        if dialog.result is None:
            return
        name, desc = dialog.result
        item['name'] = name
        item['desc'] = desc
        self._mark_dirty()
        iid = f"f{idx}-{child_idx}" if child_idx is not None else f"f{idx}" if is_folder else f"r{idx}"
        vals = list(self.tree.item(iid, 'values'))
        vals[0] = name
        vals[2] = desc
        self.tree.item(iid, values=vals)
        self.log(f"[~] Đã sửa: {name}")

    def delete_entry(self):
        idx, child_idx = self._selected_index()
        if idx is None:
            messagebox.showinfo("Chưa chọn", "Chọn 1 dòng để xóa trước.")
            return
        if child_idx is not None:
            item = self.manifest[idx]['children'][child_idx]
            if not messagebox.askyesno("Xác nhận xóa", f'Xóa mục "{item.get("name")}" ({item.get("file")}) khỏi manifest?'):
                return
            del self.manifest[idx]['children'][child_idx]
            if not self.manifest[idx].get('children'):
                del self.manifest[idx]
        else:
            item = self.manifest[idx]
            label = f'thư mục "{item.get("name")}"' if item.get('type') == 'folder' else f'"{item.get("name")}" ({item.get("file")})'
            if not messagebox.askyesno("Xác nhận xóa", f'Xóa {label} khỏi manifest?'):
                return
            del self.manifest[idx]
        self._mark_dirty()
        self._refresh_table()
        self.log(f"[-] Đã xóa: {item.get('name')}")

    def move_entry(self, delta):
        idx, child_idx = self._selected_index()
        if idx is None:
            return
        if child_idx is not None:
            children = self.manifest[idx].get('children', [])
            new_ci = child_idx + delta
            if new_ci < 0 or new_ci >= len(children):
                return
            children[child_idx], children[new_ci] = children[new_ci], children[child_idx]
            self._mark_dirty()
            self._refresh_table()
            self.tree.selection_set(f"f{idx}-{new_ci}")
        else:
            new_idx = idx + delta
            if new_idx < 0 or new_idx >= len(self.manifest):
                return
            self.manifest[idx], self.manifest[new_idx] = self.manifest[new_idx], self.manifest[idx]
            self._mark_dirty()
            self._refresh_table()
            self.tree.selection_set(f"r{new_idx}")

    def check_duplicates(self):
        names = {}
        for i, item in enumerate(self.manifest):
            names.setdefault(item.get('name', ''), []).append(i)
        dups = {n: idxs for n, idxs in names.items() if len(idxs) > 1}
        if not dups:
            messagebox.showinfo("Kiểm tra trùng tên", "Không có tên nào bị trùng. ✅")
            return
        lines = [f'"{n}" xuất hiện ở dòng {", ".join(str(i) for i in idxs)}' for n, idxs in dups.items()]
        messagebox.showwarning("Phát hiện trùng tên",
                                "Các tên sau đang bị trùng (dễ gây bấm nhầm bài):\n\n" + "\n".join(lines))

    def save(self):
        try:
            save_manifest(self.manifest)
            self.dirty = False
            self._new_keys = set()
            self._refresh_table()
            self.status.set(f"Đã lưu: {MANIFEST_PATH}")
            self.log(f"[✓] Đã lưu manifest.json ({self._count_entries()} bài học)")
        except Exception as e:
            messagebox.showerror("Lỗi lưu file", str(e))

    # ── DEPLOY ──────────────────────────────────────────────────────
    def deploy(self):
        if self.dirty:
            self.save()
        msg = self.commit_msg_var.get().strip() or "update"
        self.push_btn.state(['disabled'])
        threading.Thread(target=self._run_deploy, args=(msg,), daemon=True).start()

    def _run(self, args):
        self.log("$ " + " ".join(args))
        proc = subprocess.run(args, cwd=ROOT_DIR, capture_output=True, text=True, encoding='utf-8', errors='replace',
                               creationflags=NO_WINDOW)
        if proc.stdout:
            self.log(proc.stdout.strip())
        if proc.stderr:
            self.log(proc.stderr.strip())
        return proc.returncode

    def _run_deploy(self, msg):
        self.log("=== BẮT ĐẦU DEPLOY ===")
        try:
            self._run(["git", "add", "."])
            rc = self._run(["git", "commit", "-m", msg])
            if rc != 0:
                self.log("(Không có gì để commit hoặc commit lỗi — vẫn thử pull/push)")
            rc = self._run(["git", "pull", "--rebase", "--autostash"])
            if rc != 0:
                self.log("[X] git pull --rebase lỗi. Dừng lại, kiểm tra conflict trước khi push.")
                return
            rc = self._run(["git", "push"])
            if rc != 0:
                self.log("[X] git push lỗi.")
                return
            self.log("=== DEPLOY XONG ✅ ===")
        except FileNotFoundError:
            self.log("[X] Không tìm thấy lệnh 'git'. Cài Git for Windows và thêm vào PATH.")
        except Exception as e:
            self.log(f"[X] Lỗi: {e}")
        finally:
            self.after(0, lambda: self.push_btn.state(['!disabled']))


class EditDialog(tk.Toplevel):
    """Sua ten/mo ta. File (neu co) chi hien thi de tham khao, khong cho sua (vi phai khop file tren dia)."""

    def __init__(self, parent, title, init_name='', init_desc='', file_readonly=None):
        super().__init__(parent)
        self.title(title)
        self.resizable(False, False)
        self.result = None
        self.transient(parent)
        self.grab_set()

        pad = {'padx': 8, 'pady': 6}
        row = 0

        if file_readonly is not None:
            ttk.Label(self, text="File:").grid(row=row, column=0, sticky='w', **pad)
            ttk.Label(self, text=file_readonly, foreground='#666').grid(row=row, column=1, sticky='w', **pad)
            row += 1

        ttk.Label(self, text="Tên hiển thị (name):").grid(row=row, column=0, sticky='w', **pad)
        self.name_var = tk.StringVar(value=init_name)
        ttk.Entry(self, textvariable=self.name_var, width=47).grid(row=row, column=1, **pad)
        row += 1

        ttk.Label(self, text="Mô tả (desc):").grid(row=row, column=0, sticky='w', **pad)
        self.desc_var = tk.StringVar(value=init_desc)
        ttk.Entry(self, textvariable=self.desc_var, width=47).grid(row=row, column=1, **pad)
        row += 1

        btns = ttk.Frame(self)
        btns.grid(row=row, column=0, columnspan=2, pady=10)
        ttk.Button(btns, text="Lưu", command=self._on_ok).pack(side='left', padx=6)
        ttk.Button(btns, text="Hủy", command=self.destroy).pack(side='left', padx=6)

        self.bind('<Return>', lambda e: self._on_ok())
        self.bind('<Escape>', lambda e: self.destroy())

    def _on_ok(self):
        name = self.name_var.get().strip()
        desc = self.desc_var.get().strip()
        if not name:
            messagebox.showwarning("Thiếu thông tin", "Cần nhập Tên hiển thị.", parent=self)
            return
        self.result = (name, desc)
        self.destroy()


class GitConfigDialog(tk.Toplevel):
    def __init__(self, parent, init_name='', init_email=''):
        super().__init__(parent)
        self.title("Thiết lập Git")
        self.resizable(False, False)
        self.result = None
        self.transient(parent)
        self.grab_set()
        self.protocol("WM_DELETE_WINDOW", self._on_close_attempt)

        pad = {'padx': 10, 'pady': 8}

        ttk.Label(
            self,
            text="Chưa thiết lập user.name / user.email cho Git trên máy này.\n"
                 "Vui lòng nhập để commit/push hoạt động đúng:",
            justify='left'
        ).grid(row=0, column=0, columnspan=2, sticky='w', **pad)

        ttk.Label(self, text="Tên (user.name):").grid(row=1, column=0, sticky='w', **pad)
        self.name_var = tk.StringVar(value=init_name)
        ttk.Entry(self, textvariable=self.name_var, width=40).grid(row=1, column=1, **pad)

        ttk.Label(self, text="Email (user.email):").grid(row=2, column=0, sticky='w', **pad)
        self.email_var = tk.StringVar(value=init_email)
        ttk.Entry(self, textvariable=self.email_var, width=40).grid(row=2, column=1, **pad)

        ttk.Button(self, text="Lưu", command=self._on_ok).grid(row=3, column=0, columnspan=2, pady=12)

        self.bind('<Return>', lambda e: self._on_ok())

    def _on_close_attempt(self):
        messagebox.showwarning("Bắt buộc nhập", "Cần nhập user.name và user.email trước khi tiếp tục.", parent=self)

    def _on_ok(self):
        name = self.name_var.get().strip()
        email = self.email_var.get().strip()
        if not name or not email:
            messagebox.showwarning("Thiếu thông tin", "Cần nhập đủ Tên và Email.", parent=self)
            return
        self.result = (name, email)
        self.destroy()


if __name__ == '__main__':
    app = App()
    app.mainloop()
