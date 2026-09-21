#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

VIS = [
 # 1
 ["đi (to-V, ít dùng sau love)", "đi (nguyên mẫu, thiếu to/-ing)", "đi (V-ing, đúng: love + V-ing)", "đã đi (quá khứ, sai thì)"],
 # 2
 ["reading - swim (không song song)", "to read - swimming (không song song)", "read - swim (sai cấu trúc)", "reading - swimming (đúng: hai V-ing song song sau likes)"],
 # 3
 ["spending (V-ing, đúng: prefer + V-ing)", "spend (nguyên mẫu, thiếu to/-ing)", "spent (quá khứ, sai)", "to spend (to-V, không phải đáp án chính)"],
 # 4
 ["getting (V-ing, đúng: hate + V-ing)", "get (nguyên mẫu, thiếu to/-ing)", "gets (chia sai)", "to get (to-V, không phải đáp án chính)"],
 # 5
 ["chơi (chia đúng ngôi thứ 3 số ít 'plays')", "chơi (V-ing, sai vì cần động từ chính)", "chơi (nguyên mẫu, thiếu -s)", "chơi (to-V, sai cấu trúc)"],
 # 6
 ["Nhắn tin", "Chơi trò chơi điện tử", "Lướt mạng", "Chơi thể thao (đúng — cải thiện sức khỏe & kết bạn)"],
 # 7
 ["làm (chung chung, sai)", "lấy, mang (sai nghĩa)", "lướt (đúng: surf the internet)", "đan len (sai nghĩa)"],
 # 8
 ["reading / draw (không song song)", "reading / drawing (đúng: hai V-ing song song sau detest)", "to read / to draw (sai cấu trúc)", "read/ draw (nguyên mẫu, sai)"],
 # 9
 ["on (đúng: spend time on your own = dành thời gian một mình)", "in (sai giới từ)", "about (sai giới từ)", "for (sai giới từ)"],
 # 10
 ["Mẫu, khuôn thiết kế (đúng)", "Thú vui, việc làm lúc rảnh", "Kim đan len", "Cả A và B đều đúng"],
 # 11
 ["Cái gì (đúng — hỏi về hoạt động)", "Như thế nào", "Ai", "Khi nào"],
 # 12
 ["Các mũi đan (đúng)", "Kỳ diệu, huyền bí", "Thú vui", "Mẫu, khuôn thiết kế"],
 # 13
 ["gấp (nguyên mẫu, sai — cần danh từ ghép)", "gấp (danh động từ, đúng: paper folding = gấp giấy)", "gấp (to-V, sai)", "gấp (chia số ít, sai)"],
 # 14
 ["sự giống nhau (danh từ, sai cụm)", "chung chung", "chung, giống nhau (đúng: have things in common)", "giống hệt"],
 # 15
 ["Vì vậy", "Tuy nhiên (đúng — ý tương phản)", "Bởi vì", "Cả A và B đều đúng"],
 # 16
 ["vì vậy", "vì vậy", "nhưng (đúng — ý tương phản)", "bởi vì"],
 # 17
 ["Thú vui (đúng)", "Mẫu, khuôn thiết kế", "Kỳ diệu", "Các mũi đan"],
 # 18
 ["bảo tàng (đúng)", "rạp chiếu phim", "quê hương", "thành phố"],
 # 19
 ["Các mũi đan", "Sự giống nhau", "Kỳ diệu, đặc biệt (đúng)", "sáng tạo"],
 # 20
 ["nấu ăn", "gấp giấy nghệ thuật", "làm đồ tự chế (đúng — tự trang trí, sửa lớp học)", "chơi thể thao"],
 # 21
 ["Nhắn tin (đúng)", "Làm tình nguyện", "Trượt ván tuyết", "Đan len"],
 # 22
 ["thích (đúng, đi được với to-V)", "thích thú (chỉ đi với V-ing, sai)", "thích, muốn (chỉ đi với V-ing, sai)", "ghét (sai nghĩa & thiếu -s)"],
 # 23
 ["cho", "với, cùng (đúng: go out with sb)", "giữa", "trong, vào"],
 # 24
 ["làm vườn (V-ing, đúng)", "làm vườn (sai — 'to doing' không tồn tại)", "làm vườn (to + V nguyên mẫu, sai sau loves)", "làm vườn (nguyên mẫu, thiếu -ing)"],
 # 25
 ["uống (nguyên mẫu, sai)", "uống (to-V, đúng: would like to V)", "đã uống (quá khứ, sai)", "uống (V-ing, sai cấu trúc)"],
 # 26
 ["làm vườn (sai — thiếu -ing ở 'garden')", "làm vườn (V-ing, đúng)", "làm vườn (nguyên mẫu, sai)", "làm vườn (to + V nguyên mẫu, sai cấu trúc)"],
 # 27
 ["nhìn thấy (sai — không đi với TV theo cách này)", "nhìn (sai — không phải collocation đúng)", "xem (đúng: watch TV)", "liếc nhìn (sai nghĩa)"],
 # 28
 ["nhắn tin bạn bè", "gấp giấy", "thời gian rảnh rỗi (đúng)", "sức mạnh cơ bắp"],
 # 29
 ["Vâng, tôi rất muốn. (sai — không hợp câu hỏi về cảm xúc)", "Tôi cảm thấy rất vui. (đúng — trả lời cảm xúc)", "Tôi cũng thích điều đó. (sai — lạc đề)", "Tôi thích nấu ăn cùng mẹ. (sai — lạc đề)"],
 # 30
 ["Vâng, tôi xem phim mỗi ngày. (sai — không đáp lời mời)", "Vâng, tôi không thích nó. (mâu thuẫn logic — sai)", "Tôi rất muốn. (đúng — nhận lời mời)", "Chúng ta có thể đi cùng nhau. (không tự nhiên bằng đáp án đúng)"],
]

path = "data/unit1.json"
with open(path, encoding="utf-8") as f:
    data = json.load(f)

assert len(data["mcq"]) == len(VIS) == 30, (len(data["mcq"]), len(VIS))
for q, vis in zip(data["mcq"], VIS):
    assert len(vis) == len(q["options"]), (q["q"], vis, q["options"])
    q["vis"] = vis

with open(path, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)

print(f"Patched {len(VIS)} mcq items with per-option 'vis' translations.")
