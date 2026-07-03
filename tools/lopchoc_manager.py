"""
Lop Hoc Co Chi - Manager
Quan ly manifest.json (danh sach bai hoc) va deploy len GitHub trong 1 tool.
"""
import json
import os
import subprocess
import sys
import threading
import tkinter as tk
from tkinter import ttk, messagebox, simpledialog

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
    if not os.path.isdir(COMPONENT_DIR):
        return []
    return sorted(f for f in os.listdir(COMPONENT_DIR) if f.lower().endswith('.html'))


class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Lớp học cô Chi - Manager")
        self.geometry("880x560")
        self.minsize(760, 480)

        self.manifest = load_manifest()

        self._build_ui()
        self._refresh_table()

    # ── UI ──────────────────────────────────────────────────────────
    def _build_ui(self):
        toolbar = ttk.Frame(self, padding=8)
        toolbar.pack(fill='x')

        ttk.Button(toolbar, text="➕ Thêm bài học", command=self.add_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="✏️ Sửa", command=self.edit_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="🗑 Xóa", command=self.delete_entry).pack(side='left', padx=4)
        ttk.Button(toolbar, text="⬆ Lên", command=lambda: self.move_entry(-1)).pack(side='left', padx=4)
        ttk.Button(toolbar, text="⬇ Xuống", command=lambda: self.move_entry(1)).pack(side='left', padx=4)
        ttk.Button(toolbar, text="🔍 Kiểm tra trùng tên", command=self.check_duplicates).pack(side='left', padx=4)
        ttk.Button(toolbar, text="💾 Lưu manifest.json", command=self.save).pack(side='left', padx=12)

        deploy_btn = ttk.Button(toolbar, text="🚀 Deploy lên GitHub", command=self.deploy)
        deploy_btn.pack(side='right', padx=4)

        # Table
        columns = ('name', 'file', 'desc')
        self.tree = ttk.Treeview(self, columns=columns, show='headings', selectmode='browse')
        self.tree.heading('name', text='Tên (name)')
        self.tree.heading('file', text='File')
        self.tree.heading('desc', text='Mô tả')
        self.tree.column('name', width=140)
        self.tree.column('file', width=320)
        self.tree.column('desc', width=320)
        self.tree.pack(fill='both', expand=True, padx=8, pady=(0, 8))
        self.tree.bind('<Double-1>', lambda e: self.edit_entry())

        # Log console
        log_frame = ttk.LabelFrame(self, text="Nhật ký", padding=6)
        log_frame.pack(fill='both', expand=False, padx=8, pady=(0, 8))
        self.log_text = tk.Text(log_frame, height=10, state='disabled', wrap='word', bg='#111', fg='#0f0',
                                 font=('Consolas', 9))
        self.log_text.pack(fill='both', expand=True)

        self.status = tk.StringVar(value=f"Đang mở: {MANIFEST_PATH}")
        ttk.Label(self, textvariable=self.status, anchor='w', relief='sunken').pack(fill='x', side='bottom')

    def log(self, msg):
        self.log_text.configure(state='normal')
        self.log_text.insert('end', msg + '\n')
        self.log_text.see('end')
        self.log_text.configure(state='disabled')

    def _refresh_table(self):
        self.tree.delete(*self.tree.get_children())
        for i, item in enumerate(self.manifest):
            self.tree.insert('', 'end', iid=str(i), values=(item.get('name', ''), item.get('file', ''), item.get('desc', '')))

    def _selected_index(self):
        sel = self.tree.selection()
        if not sel:
            return None
        return int(sel[0])

    # ── CRUD ────────────────────────────────────────────────────────
    def add_entry(self):
        candidates = list_html_files()

        dialog = EntryDialog(self, "Thêm bài học", candidates=candidates)
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

        self.manifest.append({"name": name, "file": file_, "desc": desc})
        self._refresh_table()
        self.log(f"[+] Đã thêm: {name} -> {file_}")

    def edit_entry(self):
        idx = self._selected_index()
        if idx is None:
            messagebox.showinfo("Chưa chọn", "Chọn 1 dòng để sửa trước.")
            return
        item = self.manifest[idx]
        candidates = list_html_files()
        if item.get('file') not in candidates:
            candidates = [item.get('file')] + candidates

        dialog = EntryDialog(self, "Sửa bài học", candidates=candidates,
                              init_name=item.get('name', ''), init_file=item.get('file', ''),
                              init_desc=item.get('desc', ''))
        self.wait_window(dialog)
        if dialog.result is None:
            return
        name, file_, desc = dialog.result
        self.manifest[idx] = {"name": name, "file": file_, "desc": desc}
        self._refresh_table()
        self.log(f"[~] Đã sửa dòng {idx}: {name} -> {file_}")

    def delete_entry(self):
        idx = self._selected_index()
        if idx is None:
            messagebox.showinfo("Chưa chọn", "Chọn 1 dòng để xóa trước.")
            return
        item = self.manifest[idx]
        if not messagebox.askyesno("Xác nhận xóa", f'Xóa mục "{item.get("name")}" ({item.get("file")})?'):
            return
        del self.manifest[idx]
        self._refresh_table()
        self.log(f"[-] Đã xóa: {item.get('name')} ({item.get('file')})")

    def move_entry(self, delta):
        idx = self._selected_index()
        if idx is None:
            return
        new_idx = idx + delta
        if new_idx < 0 or new_idx >= len(self.manifest):
            return
        self.manifest[idx], self.manifest[new_idx] = self.manifest[new_idx], self.manifest[idx]
        self._refresh_table()
        self.tree.selection_set(str(new_idx))

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
            self.status.set(f"Đã lưu: {MANIFEST_PATH}")
            self.log(f"[✓] Đã lưu manifest.json ({len(self.manifest)} mục)")
        except Exception as e:
            messagebox.showerror("Lỗi lưu file", str(e))

    # ── DEPLOY ──────────────────────────────────────────────────────
    def deploy(self):
        self.save()
        msg = simpledialog.askstring("Commit message", "Nhập nội dung commit:", initialvalue="update")
        if msg is None:
            return
        threading.Thread(target=self._run_deploy, args=(msg or "update",), daemon=True).start()

    def _run(self, args):
        self.log("$ " + " ".join(args))
        proc = subprocess.run(args, cwd=ROOT_DIR, capture_output=True, text=True, encoding='utf-8', errors='replace')
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
            rc = self._run(["git", "pull", "--rebase"])
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


class EntryDialog(tk.Toplevel):
    def __init__(self, parent, title, candidates, init_name='', init_file='', init_desc=''):
        super().__init__(parent)
        self.title(title)
        self.resizable(False, False)
        self.result = None
        self.transient(parent)
        self.grab_set()

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


if __name__ == '__main__':
    app = App()
    app.mainloop()
