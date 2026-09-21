#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Content that is TRUE FOR ENGLISH IN GENERAL, not specific to any one
unit's vocabulary or grammar point. These render identically for every
unit — only the per-unit worked example (passed in) changes.
"""

def word_formation_guide_html():
    return r"""
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-spell-check mr-1"></i>Hướng dẫn làm dạng bài WORD FORM (Word Formation)</p>
  <ol class="list-decimal ml-5 space-y-1.5 text-sm text-slate-700">
    <li><b>Bước 1 - Xác định gốc từ (root word)</b> trong ngoặc và nghĩa của nó.</li>
    <li><b>Bước 2 - Nhìn vào "họ từ" (word family)</b> của gốc từ đó — nó có những dạng danh từ, động từ, tính từ, trạng từ nào.</li>
    <li><b>Bước 3 - Xác định từ loại cần điền</b> dựa vào vị trí trong câu (đây là "manh mối ngữ pháp" — grammatical clue):
      <ul class="list-disc ml-5 mt-1 text-slate-600">
        <li>Sau <b>a/an/the/tính từ sở hữu (my, his...)</b>, trước động từ, làm chủ ngữ → cần <b>DANH TỪ (N)</b></li>
        <li>Sau <b>to be (am/is/are/was/were)</b>, <b>look/feel/seem/become</b>, sau <b>very/so/too</b> → cần <b>TÍNH TỪ (adj)</b></li>
        <li>Bổ nghĩa cho động từ → cần <b>TRẠNG TỪ (adv)</b>, thường có đuôi <b>-ly</b></li>
        <li>Làm vị ngữ chính của câu, sau chủ ngữ, sau modal verb (can/should...), sau "to" → cần <b>ĐỘNG TỪ (V)</b>, chia đúng thì/ngôi</li>
      </ul>
    </li>
    <li><b>Bước 4 - Nhận diện đuôi (hậu tố) thường gặp:</b>
      <div class="overflow-x-auto mt-1">
      <table class="w-full text-xs border-collapse">
        <tr class="bg-slate-100"><th class="border px-2 py-1">Từ loại</th><th class="border px-2 py-1">Hậu tố phổ biến</th><th class="border px-2 py-1">Ví dụ</th></tr>
        <tr><td class="border px-2 py-1 font-bold">Danh từ (N)</td><td class="border px-2 py-1">-tion/-sion, -ment, -ity/-ty, -ness, -er/-or, -ance/-ence, -ing</td><td class="border px-2 py-1 italic">connection, entertainment, popularity, comedian, snowboarding</td></tr>
        <tr><td class="border px-2 py-1 font-bold">Tính từ (adj)</td><td class="border px-2 py-1">-ful, -less, -able/-ible, -ive, -ing/-ed, -al, -ous</td><td class="border px-2 py-1 italic">comfortable, entertaining, surprised/surprising</td></tr>
        <tr><td class="border px-2 py-1 font-bold">Trạng từ (adv)</td><td class="border px-2 py-1">adj + -ly</td><td class="border px-2 py-1 italic">actively, comfortably, surprisingly</td></tr>
        <tr><td class="border px-2 py-1 font-bold">Động từ (V)</td><td class="border px-2 py-1">-ize/-ise, -en, -ify, -ate</td><td class="border px-2 py-1 italic">popularize, strengthen, activate</td></tr>
      </table>
      </div>
    </li>
    <li><b>Bước 5 - Chú ý tính từ đuôi -ing / -ed:</b> chủ ngữ là NGƯỜI mang cảm xúc → dùng <b>-ed</b> (surprised); chủ ngữ là VẬT/SỰ VIỆC gây ra cảm xúc → dùng <b>-ing</b> (surprising, entertaining).</li>
    <li><b>Bước 6 - Đọc kỹ nghĩa câu</b> để chọn đúng từ trong "họ từ" — nhiều từ cùng gốc nhưng nghĩa khác nhau (VD: comedy ≠ comedian ≠ comical).</li>
    <li><b>Bước 7 - Đọc lại cả câu</b> sau khi điền để kiểm tra hợp nghĩa và đúng ngữ pháp.</li>
  </ol>
</div>
"""

def tip_box(text):
    return f"""<div class="bg-amber-50 border-2 border-amber-300 rounded-xl px-4 py-3 my-2"><p class="text-sm text-amber-900"><b>🧠 Mẹo ghi nhớ:</b> {text}</p></div>"""

def pronunciation_endings_guide_html():
    """Generic -s/-es and -ed pronunciation rules — true for English in
    general, not tied to any unit's vocabulary."""
    return r"""
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-ear-listen mr-1"></i>Quy tắc phát âm đuôi <b>-s / -es</b></p>
  """ + tip_box("Nghe thấy âm \"rít/xì\" cuối từ (s, z, sh, ch, ge/dge) → đọc <b>/ɪz/</b> (thêm hẳn 1 âm tiết). Còn lại: âm \"nhẹ không rung dây thanh\" (p, t, k, f, th) → đọc <b>/s/</b>; mọi trường hợp khác (rung dây thanh + nguyên âm) → đọc <b>/z/</b>.") + r"""
  <div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <tr class="bg-slate-100"><th class="border px-2 py-1">Âm cuối động từ/danh từ</th><th class="border px-2 py-1">Phát âm đuôi -s/-es</th><th class="border px-2 py-1">Ví dụ</th></tr>
    <tr><td class="border px-2 py-1">/s/, /z/, /ʃ/, /ʒ/, /tʃ/, /dʒ/ (âm rít/xát)</td><td class="border px-2 py-1 font-bold">/ɪz/</td><td class="border px-2 py-1 italic">watches, buses, brushes</td></tr>
    <tr><td class="border px-2 py-1">Phụ âm vô thanh: /p/, /t/, /k/, /f/, /θ/</td><td class="border px-2 py-1 font-bold">/s/</td><td class="border px-2 py-1 italic">pictures (tʃ→ khác nhóm), laughs, walks</td></tr>
    <tr><td class="border px-2 py-1">Nguyên âm và phụ âm hữu thanh còn lại</td><td class="border px-2 py-1 font-bold">/z/</td><td class="border px-2 py-1 italic">plays, loves, goes</td></tr>
  </table>
  </div>
</div>
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-ear-listen mr-1"></i>Quy tắc phát âm đuôi <b>-ed</b></p>
  """ + tip_box("Động từ đã tận cùng bằng chính \"t\" hoặc \"d\" thì mới đọc <b>/ɪd/</b> (không thể ghép liền phụ âm giống nhau). Còn lại: âm \"nhẹ không rung\" (k, p, s, sh, ch, f) → đọc <b>/t/</b>; mọi trường hợp khác (rung dây thanh + nguyên âm) → đọc <b>/d/</b>.") + r"""
  <div class="overflow-x-auto">
  <table class="w-full text-sm border-collapse">
    <tr class="bg-slate-100"><th class="border px-2 py-1">Âm cuối động từ nguyên mẫu</th><th class="border px-2 py-1">Phát âm đuôi -ed</th><th class="border px-2 py-1">Ví dụ</th></tr>
    <tr><td class="border px-2 py-1">/t/ hoặc /d/</td><td class="border px-2 py-1 font-bold">/ɪd/</td><td class="border px-2 py-1 italic">needed, wanted, decided</td></tr>
    <tr><td class="border px-2 py-1">Phụ âm vô thanh khác: /k/, /p/, /s/, /ʃ/, /tʃ/, /f/</td><td class="border px-2 py-1 font-bold">/t/</td><td class="border px-2 py-1 italic">worked, watched, walked</td></tr>
    <tr><td class="border px-2 py-1">Nguyên âm và phụ âm hữu thanh còn lại</td><td class="border px-2 py-1 font-bold">/d/</td><td class="border px-2 py-1 italic">played, loved, cleaned</td></tr>
  </table>
  </div>
</div>
"""

def stress_tip_html():
    return f"""
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-bullseye mr-1"></i>Mẹo nhận biết trọng âm từ 2 âm tiết</p>
  {tip_box("Với từ có 2 âm tiết: DANH TỪ và TÍNH TỪ thường nhấn âm tiết ĐẦU (VD: PICture, HAPpy); ĐỘNG TỪ thường nhấn âm tiết THỨ HAI (VD: enJOY, reLAX). Đây là xu hướng phổ biến, vẫn có một số từ ngoại lệ (VD: open, answer).")}
</div>
"""

def s_es_pronunciation_quiz():
    """Generic -s/-es practice items (not unit-specific)."""
    return [
      dict(q="Từ nào có đuôi \"-s\" phát âm khác với 3 từ còn lại?", options=["books","cats","buses","maps"], answer=2,
           explanation="\"buses\" tận cùng bằng /s/ → thêm \"-es\" đọc /ɪz/. Ba từ còn lại tận cùng phụ âm vô thanh (k, t, p) → đọc /s/."),
      dict(q="Từ nào có đuôi \"-s\" phát âm là /z/?", options=["plays","helps","asks","laughs"], answer=0,
           explanation="\"plays\" tận cùng nguyên âm + phụ âm hữu thanh → đọc /z/. Ba từ còn lại tận cùng phụ âm vô thanh → đọc /s/."),
      dict(q="Từ nào có đuôi \"-es\" phát âm là /ɪz/?", options=["loves","washes","drinks","hopes"], answer=1,
           explanation="\"washes\" tận cùng bằng /ʃ/ (âm \"sh\") → thêm \"-es\" đọc /ɪz/. Ba từ còn lại đọc /z/ hoặc /s/."),
      dict(q="Từ nào có đuôi \"-s/-es\" phát âm KHÁC với 3 từ còn lại?", options=["dishes","boxes","cups","watches"], answer=2,
           explanation="\"cups\" tận cùng phụ âm vô thanh /p/ → đọc /s/. Ba từ còn lại tận cùng /ʃ/, /ks/, /tʃ/ → đều đọc /ɪz/."),
    ]

def ed_pronunciation_quiz():
    """Generic -ed practice items (not unit-specific)."""
    return [
      dict(q="Từ nào có đuôi \"-ed\" phát âm là /ɪd/?", options=["worked","played","wanted","laughed"], answer=2,
           explanation="\"wanted\" có động từ gốc tận cùng bằng /t/ → thêm \"-ed\" đọc /ɪd/. Ba từ còn lại đọc /t/ hoặc /d/."),
      dict(q="Từ nào có đuôi \"-ed\" phát âm là /t/?", options=["cleaned","watched","loved","opened"], answer=1,
           explanation="\"watched\" tận cùng bằng /tʃ/ (âm vô thanh) → đọc /t/. Ba từ còn lại tận cùng phụ âm/nguyên âm hữu thanh → đọc /d/."),
      dict(q="Từ nào có đuôi \"-ed\" phát âm là /d/?", options=["helped","stopped","lived","talked"], answer=2,
           explanation="\"lived\" tận cùng bằng /v/ (âm hữu thanh) → đọc /d/. Ba từ còn lại tận cùng phụ âm vô thanh → đọc /t/."),
      dict(q="Từ nào có đuôi \"-ed\" phát âm KHÁC với 3 từ còn lại?", options=["needed","decided","visited","washed"], answer=3,
           explanation="\"washed\" tận cùng bằng /ʃ/ (vô thanh) → đọc /t/. Ba từ còn lại có động từ gốc tận cùng /d/ hoặc /t/ → đọc /ɪd/."),
    ]

def stress_basic_quiz():
    """Generic 2-syllable stress-tendency practice items (not unit-specific)."""
    return [
      dict(q="Từ nào có trọng âm rơi vào âm tiết THỨ HAI?", options=["TABLE","HAPPY","enJOY","GARden"], answer=2,
           explanation="\"enjoy\" là động từ 2 âm tiết, theo xu hướng chung động từ thường nhấn âm tiết thứ hai. Ba từ còn lại là danh từ/tính từ, nhấn âm tiết đầu."),
      dict(q="Từ nào có trọng âm rơi vào âm tiết ĐẦU TIÊN (đúng xu hướng danh từ)?", options=["reLAX","PICture","deCIDE","reCEIVE"], answer=1,
           explanation="\"picture\" là danh từ 2 âm tiết, nhấn âm tiết đầu theo xu hướng chung. Ba từ còn lại là động từ, nhấn âm tiết thứ hai."),
      dict(q="Cặp từ nào thể hiện đúng quy tắc \"danh từ nhấn âm 1 - động từ nhấn âm 2\"?",
           options=["PRESent (danh từ) / preSENT (động từ)","preSENT (danh từ) / PRESent (động từ)","Cả hai đều giống nhau","Không có quy tắc nào đúng"], answer=0,
           explanation="Với các cặp từ vừa là danh từ vừa là động từ, danh từ thường nhấn âm 1 (PRESent = món quà), động từ thường nhấn âm 2 (preSENT = trình bày)."),
      dict(q="Từ nào là NGOẠI LỆ của quy tắc \"động từ 2 âm tiết thường nhấn âm thứ hai\"?", options=["enjoy","relax","open","prefer"], answer=2,
           explanation="\"open\" là động từ nhưng trọng âm lại rơi vào âm tiết ĐẦU (OPen), khác với xu hướng chung của enjoy, relax, prefer (đều nhấn âm 2)."),
    ]

def sentence_writing_method_html(worked_example_html=""):
    """Generic 6-step sentence-writing / transformation method, universal
    for any grammar point. `worked_example_html` is an optional per-unit
    snippet (a short paragraph) showing the steps applied to one real
    sentence from THIS unit — everything else here is unit-agnostic."""
    example_block = f"""<p class="text-xs text-slate-500 mt-2">📌 Ví dụ áp dụng trong Unit này: {worked_example_html}</p>""" if worked_example_html else ""
    return f"""
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-shoe-prints mr-1"></i>Các bước làm bài VIẾT LẠI CÂU / VIẾT CÂU (Sentence Writing)</p>
  <ol class="list-decimal ml-5 space-y-2 text-sm text-slate-700">
    <li><b>Bước 1 — Xác định chủ ngữ (subject)</b> của câu cần viết và đối tượng/hành động chính được nhắc tới.</li>
    <li><b>Bước 2 — Xác định thì / cấu trúc ngữ pháp</b> cần dùng, dựa vào từ gợi ý (given word), dấu hiệu thời gian, hoặc yêu cầu của đề bài.</li>
    <li><b>Bước 3 — Chọn đúng dạng động từ</b> theo cấu trúc đã xác định (V-ing, to V, V nguyên thể, động từ chia thì...).</li>
    <li><b>Bước 4 — Kiểm tra sự hoà hợp chủ ngữ - động từ (subject–verb agreement):</b> chủ ngữ số ít ở hiện tại đơn cần thêm "-s/-es"; chủ ngữ giả "It" luôn chia số ít.</li>
    <li><b>Bước 5 — Thêm đầy đủ tân ngữ/bổ ngữ (objects/complements)</b> và trạng ngữ chỉ thời gian, nơi chốn, cách thức nếu đề bài yêu cầu giữ nguyên thông tin đó.</li>
    <li><b>Bước 6 — Kiểm tra lại chính tả và dấu câu</b>, rồi đọc lại toàn câu để so sánh với câu gốc, đảm bảo không đổi nghĩa và đúng ngữ pháp.</li>
  </ol>
  {example_block}
</div>
"""
