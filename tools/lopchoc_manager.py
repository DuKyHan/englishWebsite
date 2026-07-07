"""
Lop Hoc Co Chi - Manager
Quan ly manifest.json (danh sach bai hoc) va deploy len GitHub, chia theo 3 buoc.
"""
import json
import os
import shutil
import subprocess
import sys
import threading
import tkinter as tk
from tkinter import ttk, messagebox, filedialog

# Ngan cua so console den loe len moi lan goi git.exe tu app khong-console (--windowed)
NO_WINDOW = getattr(subprocess, 'CREATE_NO_WINDOW', 0)


def _find_root_dir():
    """Do nguoc len tu vi tri file .py/.exe de tim thu muc chua component/manifest.json"""
    start = os.path.dirname(sys.executable) if getattr(sys, 'frozen', False) else os.path.dirname(os.path.abspath(__file__))
    cur = start
    while True:
        if os.path.isfile(os.path.join(cur, 'component', 'manifest.json')):
            return cur
        parent = os.path.dirname(cur)
        if parent == cur:
            return start  # khong tim thay, fallback ve thu muc chua exe
        cur = parent


ROOT_DIR = _find_root_dir()
COMPONENT_DIR = os.path.join(ROOT_DIR, 'component')
MANIFEST_PATH = os.path.join(COMPONENT_DIR, 'manifest.json')
LOGO_PATH = os.path.join(ROOT_DIR, 'static', 'logo.png')

STEPS = [
    (1, "Thêm / Sửa / Xóa"),
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


def list_html_files():
    """Doc de quy tat ca file HTML trong component/, tra ve duong dan tuong doi."""
    if not os.path.isdir(COMPONENT_DIR):
        return []
    results = []
    for dirpath, _, filenames in os.walk(COMPONENT_DIR):
        for f in filenames:
            if f.lower().endswith('.html'):
                full = os.path.join(dirpath, f)
                rel = os.path.relpath(full, COMPONENT_DIR).replace('\\', '/')
                results.append(rel)
    return sorted(results)


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Lớp học cô Chi - Manager")
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
            new_name, new_email = dialog.result  # dialog bat buoc nhap, khong the dong ma khong co ket qua
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
        # Cho phep nhay lui ve buoc truoc do de xem/sua, nhung khong cho nhay vuot qua khi chua xong buoc hien tai
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

    # ── BUOC 1: THEM / SUA / XOA ───────────────────────────────────
    def _build_step1(self):
        self.step1_frame = ttk.Frame(self)

        toolbar = ttk.Frame(self.step1_frame, padding=(0, 0, 0, 8))
        toolbar.pack(fill='x')
        ttk.Button(toolbar, text="📥 Import file HTML", command=self.import_html_file).pack(side='left', padx=(0, 4))
        ttk.Button(toolbar, text="➕ Thêm bài học", command=self.add_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="📁 Tạo thư mục", command=self.add_folder).pack(side='left', padx=4)
        ttk.Button(toolbar, text="✏️ Sửa", command=self.edit_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="🗑 Xóa", command=self.delete_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="⬆ Lên", command=lambda: self.move_entry(-1)).pack(side='left', padx=4)
        ttk.Button(toolbar, text="⬇ Xuống", command=lambda: self.move_entry(1)).pack(side='left', padx=4)
        ttk.Button(toolbar, text="🔍 Kiểm tra trùng tên", command=self.check_duplicates).pack(side='left', padx=4)

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
                f"Bạn đang có {len(self.manifest)} bài học trong danh sách.\n"
                f"Có thay đổi CHƯA được lưu vào manifest.json — bấm nút bên dưới để lưu."
            )
            self.step2_next_btn.state(['disabled'])
        else:
            self.step2_summary.set(
                f"Bạn đang có {len(self.manifest)} bài học trong danh sách.\n"
                f"Đã lưu vào manifest.json. Có thể sang bước Push."
            )
            self.step2_next_btn.state(['!disabled'])

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
        # co the goi tu thread nen (sync/deploy) -> luon cap nhat UI qua main thread
        self.after(0, self._log_ui, msg)

    def _log_ui(self, msg):
        self.log_text.configure(state='normal')
        self.log_text.insert('end', msg + '\n')
        self.log_text.see('end')
        self.log_text.configure(state='disabled')

    # ── SYNC ────────────────────────────────────────────────────────
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
        self.manifest = load_manifest()
        self.dirty = False
        self._refresh_table(save_state=False)
        self.status.set(f"Đã đồng bộ mới nhất — Đang mở: {MANIFEST_PATH}")
        self.log("[✓] Đã đồng bộ xong, đang xem dữ liệu mới nhất.")

    # ── TABLE HELPERS ───────────────────────────────────────────────
    def _save_tree_state(self):
        """Lưu scroll position, folder mở, và selection trước khi rebuild."""
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
                    # tkinter co the tra '1', 'True', 1, True tuy platform
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
        """Khôi phục scroll, folder mở, selection sau khi rebuild."""
        if not state:
            return
        # Mở lại các folder
        if state.get('open'):
            for idx, item in enumerate(self.manifest):
                if item.get('type') == 'folder' and item.get('name', '') in state['open']:
                    iid = f"f{idx}"
                    try:
                        self.tree.item(iid, open=True)
                    except Exception:
                        pass
        # Khôi phục scroll
        if state.get('scroll'):
            try:
                self.tree.yview_moveto(state['scroll'][0])
            except Exception:
                pass
        # Khôi phục selection
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

    def _refresh_table(self, save_state=True):
        state = self._save_tree_state() if save_state else None
        self.tree.delete(*self.tree.get_children())
        for idx, item in enumerate(self.manifest):
            if item.get('type') == 'folder':
                folder_iid = f"f{idx}"
                self.tree.insert('', 'end', iid=folder_iid, text='📁',
                                  values=(item.get('name', ''), '', item.get('desc', '')))
                for ci, ch in enumerate(item.get('children', [])):
                    self.tree.insert(folder_iid, 'end', iid=f"f{idx}-{ci}", text='',
                                      values=(ch.get('name', ''), ch.get('file', ''), ch.get('desc', '')))
            else:
                self.tree.insert('', 'end', iid=f"r{idx}", text='',
                                  values=(item.get('name', ''), item.get('file', ''), item.get('desc', '')))
        if state:
            self._restore_tree_state(state)

    def _on_double_click(self, event):
        """Double-click: neu la folder thi expand/collapse, neu la bai hoc thi sua."""
        sel = self.tree.selection()
        if not sel:
            return
        iid = sel[0]
        if iid.startswith('f') and '-' not in iid:
            # La folder -> toggle mo/thu
            if self.tree.item(iid, 'open'):
                self.tree.item(iid, open=False)
            else:
                self.tree.item(iid, open=True)
        else:
            self.edit_entry()

    def _selected_index(self):
        """Tra ve (idx, child_idx) hoac (idx, None). None neu chua chon."""
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

    # ── CRUD ────────────────────────────────────────────────────────
    def import_html_file(self):
        src = filedialog.askopenfilename(
            title="Chọn file HTML để import vào component/",
            filetypes=[("HTML files", "*.html *.htm"), ("Tất cả file", "*.*")]
        )
        if not src:
            return

        filename = os.path.basename(src)
        dest = os.path.join(COMPONENT_DIR, filename)

        if os.path.abspath(src) != os.path.abspath(dest):
            if os.path.exists(dest):
                if not messagebox.askyesno(
                    "File đã tồn tại",
                    f'File "{filename}" đã có trong component/. Ghi đè bằng file vừa chọn?'):
                    return
            try:
                os.makedirs(COMPONENT_DIR, exist_ok=True)
                shutil.copy2(src, dest)
                self.log(f"[+] Đã import file vào component/: {filename}")
            except Exception as e:
                messagebox.showerror("Lỗi import", str(e))
                return

        self.add_entry(preset_file=filename)

    def add_entry(self, preset_file=None):
        # Lay tat ca file da co trong manifest (ca trong folder children)
        existing_files = set()
        for item in self.manifest:
            if item.get('file'):
                existing_files.add(item['file'].replace('\\', '/'))
            for ch in item.get('children', []):
                if ch.get('file'):
                    existing_files.add(ch['file'].replace('\\', '/'))
        candidates = [f for f in list_html_files() if f not in existing_files]
        if preset_file and preset_file not in candidates:
            candidates = [preset_file] + candidates

        # Kiem tra neu dang chon folder -> them vao folder do
        idx, _ = self._selected_index()
        target_folder = None
        if idx is not None and self.manifest[idx].get('type') == 'folder':
            target_folder = self.manifest[idx]

        title = f"Thêm bài học vào '{target_folder['name']}'" if target_folder else "Thêm bài học"
        dialog = EntryDialog(self, title, candidates=candidates, init_file=preset_file or '')
        self.wait_window(dialog)
        if dialog.result is None:
            return

        name, file_, desc = dialog.result
        if any(item.get('name') == name for item in self.manifest):
            if not messagebox.askyesno(
                "Trùng tên",
                f'Đã có (các) mục khác cũng tên "{name}".\n'
                f'Trang web chọn bài theo TÊN nên trùng tên có thể khiến bấm nhầm bài.\n'
                f'Vẫn muốn thêm?'):
                return

        # Tu dong phan loai: neu file nam trong thu muc con (vd: abc/file.html)
        # -> tim folder ma trong children da co file cung thu muc prefix
        if not target_folder and '/' in file_:
            file_prefix = file_.split('/')[0] + '/'
            for item in self.manifest:
                if item.get('type') == 'folder' and item.get('children'):
                    for ch in item['children']:
                        if ch.get('file', '').startswith(file_prefix):
                            target_folder = item
                            self.log(f"[i] Tu dong phan loai vao folder '{item['name']}' vi file nam trong thu muc '{file_prefix.rstrip('/')}'")
                            break
                    if target_folder:
                        break

        if target_folder:
            target_folder.setdefault('children', []).append({"name": name, "file": file_, "desc": desc})
            self.log(f"[+] Đã thêm vào '{target_folder['name']}': {name} -> {file_}")
        else:
            self.manifest.append({"name": name, "file": file_, "desc": desc})
            self.log(f"[+] Đã thêm: {name} -> {file_}")
        self._mark_dirty()
        self._refresh_table()

    def add_folder(self):
        dialog = FolderDialog(self, "Tạo thư mục mới")
        self.wait_window(dialog)
        if dialog.result is None:
            return
        name, desc = dialog.result
        self.manifest.append({"name": name, "type": "folder", "desc": desc, "children": []})
        self._mark_dirty()
        self._refresh_table()
        self.log(f"[+] Đã tạo thư mục: {name}")

    def edit_entry(self):
        idx, child_idx = self._selected_index()
        if idx is None:
            messagebox.showinfo("Chưa chọn", "Chọn 1 dòng để sửa trước.")
            return
        if child_idx is not None:
            item = self.manifest[idx]['children'][child_idx]
        else:
            item = self.manifest[idx]
        candidates = list_html_files()
        if item.get('file') not in candidates:
            candidates = [item.get('file', '')] + candidates

        dialog = EntryDialog(self, "Sửa bài học", candidates=candidates,
                              init_name=item.get('name', ''), init_file=item.get('file', ''),
                              init_desc=item.get('desc', ''))
        self.wait_window(dialog)
        if dialog.result is None:
            return
        name, file_, desc = dialog.result
        if child_idx is not None:
            self.manifest[idx]['children'][child_idx] = {"name": name, "file": file_, "desc": desc}
            iid = f"f{idx}-{child_idx}"
        else:
            self.manifest[idx] = {"name": name, "file": file_, "desc": desc}
            iid = f"r{idx}"
        self._mark_dirty()
        # Cập nhật in-place: chỉ thay đổi giá trị, không rebuild tree
        self.tree.item(iid, values=(name, file_, desc))
        self.log(f"[~] Đã sửa: {name} -> {file_}")

    def delete_entry(self):
        idx, child_idx = self._selected_index()
        if idx is None:
            messagebox.showinfo("Chưa chọn", "Chọn 1 dòng để xóa trước.")
            return
        if child_idx is not None:
            item = self.manifest[idx]['children'][child_idx]
            if not messagebox.askyesno("Xác nhận xóa", f'Xóa mục "{item.get("name")}" ({item.get("file")})?'):
                return
            del self.manifest[idx]['children'][child_idx]
            # Xóa folder neu con rong
            if not self.manifest[idx].get('children'):
                del self.manifest[idx]
        else:
            item = self.manifest[idx]
            label = f'thư mục "{item.get("name")}"' if item.get('type') == 'folder' else f'"{item.get("name")}" ({item.get("file")})'
            if not messagebox.askyesno("Xác nhận xóa", f'Xóa {label}?'):
                return
            del self.manifest[idx]
        self._mark_dirty()
        self._refresh_table()
        self.log(f"[-] Đã xóa: {item.get('name')}")

    def _get_folder_open_states(self):
        """Luu trang thai open cua tat ca folder theo ten."""
        open_names = set()
        for idx, item in enumerate(self.manifest):
            if item.get('type') == 'folder':
                iid = f"f{idx}"
                try:
                    val = self.tree.item(iid, 'open')
                    if str(val).lower() not in ('0', 'false', ''):
                        open_names.add(item.get('name', ''))
                except Exception:
                    pass
        return open_names

    def _set_folder_open_states(self, open_names):
        """Khoi phuc trang thai open cua folder theo ten."""
        for idx, item in enumerate(self.manifest):
            if item.get('type') == 'folder':
                iid = f"f{idx}"
                try:
                    self.tree.item(iid, open=item.get('name', '') in open_names)
                except Exception:
                    pass

    def move_entry(self, delta):
        idx, child_idx = self._selected_index()
        if idx is None:
            return
        if child_idx is not None:
            # Di chuyen trong folder
            children = self.manifest[idx].get('children', [])
            new_ci = child_idx + delta
            if new_ci < 0 or new_ci >= len(children):
                return
            children[child_idx], children[new_ci] = children[new_ci], children[child_idx]
            self._mark_dirty()
            self._refresh_table()
            self.tree.selection_set(f"f{idx}-{new_ci}")
        else:
            # Di chuyen muc top-level
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
            self.status.set(f"Đã lưu: {MANIFEST_PATH}")
            self.log(f"[✓] Đã lưu manifest.json ({len(self.manifest)} mục)")
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


class EntryDialog(tk.Toplevel):
    def __init__(self, parent, title, candidates, init_name='', init_file='', init_desc=''):
        super().__init__(parent)
        self.title(title)
        self.resizable(False, False)
        self.result = None
        self.transient(parent)
        self.grab_set()

        if not init_name and init_file:
            init_name = os.path.splitext(init_file)[0]

        pad = {'padx': 8, 'pady': 6}

        ttk.Label(self, text="File HTML (trong /component):").grid(row=0, column=0, sticky='w', **pad)
        self.file_var = tk.StringVar(value=init_file)
        self.file_combo = ttk.Combobox(self, textvariable=self.file_var, values=candidates, width=45)
        self.file_combo.grid(row=0, column=1, **pad)
        self.file_combo.bind('<<ComboboxSelected>>', self._on_file_pick)

        ttk.Label(self, text="Tên hiển thị (name):").grid(row=1, column=0, sticky='w', **pad)
        self.name_var = tk.StringVar(value=init_name)
        ttk.Entry(self, textvariable=self.name_var, width=47).grid(row=1, column=1, **pad)

        ttk.Label(self, text="Mô tả (desc):").grid(row=2, column=0, sticky='w', **pad)
        self.desc_var = tk.StringVar(value=init_desc)
        ttk.Entry(self, textvariable=self.desc_var, width=47).grid(row=2, column=1, **pad)

        btns = ttk.Frame(self)
        btns.grid(row=3, column=0, columnspan=2, pady=10)
        ttk.Button(btns, text="Lưu", command=self._on_ok).pack(side='left', padx=6)
        ttk.Button(btns, text="Hủy", command=self.destroy).pack(side='left', padx=6)

        self.bind('<Return>', lambda e: self._on_ok())
        self.bind('<Escape>', lambda e: self.destroy())

    def _on_file_pick(self, _event=None):
        if not self.name_var.get().strip():
            base = os.path.splitext(self.file_var.get())[0]
            self.name_var.set(base)

    def _on_ok(self):
        file_ = self.file_var.get().strip()
        name = self.name_var.get().strip()
        desc = self.desc_var.get().strip()
        if not file_ or not name:
            messagebox.showwarning("Thiếu thông tin", "Cần nhập File và Tên hiển thị.", parent=self)
            return
        self.result = (name, file_, desc)
        self.destroy()


class FolderDialog(tk.Toplevel):
    def __init__(self, parent, title, init_name='', init_desc=''):
        super().__init__(parent)
        self.title(title)
        self.resizable(False, False)
        self.result = None
        self.transient(parent)
        self.grab_set()

        pad = {'padx': 8, 'pady': 6}

        ttk.Label(self, text="Tên thư mục:").grid(row=0, column=0, sticky='w', **pad)
        self.name_var = tk.StringVar(value=init_name)
        ttk.Entry(self, textvariable=self.name_var, width=40).grid(row=0, column=1, **pad)

        ttk.Label(self, text="Mô tả:").grid(row=1, column=0, sticky='w', **pad)
        self.desc_var = tk.StringVar(value=init_desc)
        ttk.Entry(self, textvariable=self.desc_var, width=40).grid(row=1, column=1, **pad)

        btns = ttk.Frame(self)
        btns.grid(row=2, column=0, columnspan=2, pady=10)
        ttk.Button(btns, text="Tạo", command=self._on_ok).pack(side='left', padx=6)
        ttk.Button(btns, text="Hủy", command=self.destroy).pack(side='left', padx=6)

        self.bind('<Return>', lambda e: self._on_ok())
        self.bind('<Escape>', lambda e: self.destroy())

    def _on_ok(self):
        name = self.name_var.get().strip()
        desc = self.desc_var.get().strip()
        if not name:
            messagebox.showwarning("Thiếu thông tin", "Cần nhập tên thư mục.", parent=self)
            return
        self.result = (name, desc)
        self.destroy()


class GitConfigDialog(tk.Toplevel):
    """Bat buoc nguoi dung nhap user.name / user.email cho Git. Khong the dong ma bo trong."""

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
