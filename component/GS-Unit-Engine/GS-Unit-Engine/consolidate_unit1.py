#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Consolidates the scattered Unit-1 data files (built in the previous
session, still on disk under /home/claude/e8/) into a single unit1.json
that conforms to schema/UNIT_SCHEMA.md.
"""
import json, os

SRC = "/home/claude/e8"
def load(name):
    with open(os.path.join(SRC, name), encoding="utf-8") as f:
        return json.load(f)

vf   = load("vocab_families.json")     # vocab, families
mw   = load("mcq_wf.json")             # mcq, wf
ps   = load("pron_stress.json")        # pron, stress
rt   = load("reading_tf.json")         # reading_a, reading_b, tf_a, tf_b
tdp  = load("transform_dict_pics.json")# transform, dict1, dict2, pictures
gpr  = load("grammar_practice.json")   # [{model, extra:[3 items w/o explanation/note]}]
comp = load("grammar_comprehension.json")

# ---- tag the MCQ pool (was hand-picked indices before; now explicit tags
#      on the content itself, so the engine can filter generically) ----
vocab_idx    = {9,10,11,12,13,16,17,18,20,27}
grammar_idx  = {0,1,2,3,4,7,21,23,24,25}
mcq_tagged = []
for i, q in enumerate(mw["mcq"]):
    tags = []
    if i in vocab_idx: tags.append("vocab")
    if i in grammar_idx: tags.append("grammar")
    if not tags: tags.append("mixed")
    mcq_tagged.append(dict(q=q["q"], options=q["options"], answer=q["answer"],
                            explanation=q["explanation"], vi=q.get("vi"), tags=tags))

# ---- word_formation: link each item to its family via family_base ----
hint_to_base = {"act":"act","connect":"connect","strong":"strength","entertain":"entertain",
                "create":"create","comedy":"comedy","snowboard":"snowboard","popular":"popular",
                "comfort":"comfort","surprise":"surprise"}
word_formation = []
for q in mw["wf"]:
    hint_word = q["hint"].strip("()").lower()
    fam_base = hint_to_base.get(hint_word, hint_word)
    word_formation.append(dict(q=q["q"], hint=q["hint"], answer=q["answer"],
                                family_base=fam_base, explanation=q["explanation"], vi=q["vi"]))

# ---- transformations: embed extra_practice inline (was a side-lookup) ----
transformations = []
for g in gpr:
    m = g["model"]
    extra = [dict(original=e["original"], starter=e["starter"], answer=e["answer"], vi=e["vi"])
             for e in g["extra"]]
    transformations.append(dict(q=m["q"], dang=m["dang"], original=m["original"], starter=m["starter"],
                                 answer=m["answer"], accepted=m.get("accepted"), explanation=m["explanation"],
                                 vi=m["vi"], note=m["note"], extra_practice=extra))

# ---- readings / true_false: normalize into keyed list ----
readings = [
  dict(key="readingA", title=rt["reading_a"]["title"], html=rt["reading_a"]["html"], vi=rt["reading_a"]["vi"],
       questions=rt["reading_a"]["questions"]),
  dict(key="readingB", title=rt["reading_b"]["title"], html=rt["reading_b"]["html"], vi=rt["reading_b"]["vi"],
       questions=rt["reading_b"]["questions"]),
]
true_false = [
  dict(key="tfA", title=rt["tf_a"]["title"], html=rt["tf_a"]["html"], vi=rt["tf_a"]["vi"],
       questions=rt["tf_a"]["questions"]),
  dict(key="tfB", title=rt["tf_b"]["title"], html=rt["tf_b"]["html"], vi=rt["tf_b"]["vi"],
       questions=rt["tf_b"]["questions"]),
]

# ---- dictionary ----
def norm_dict(d):
    return dict(word=d["word"], ipa=d["ipa"], pos=d["pos"],
                senses=[dict(**{"def": s["def_"]}, examples=s["examples"]) for s in d["senses"]],
                vi=d["vi"], questions=d["questions"])
dictionary = [norm_dict(tdp["dict1"]), norm_dict(tdp["dict2"])]

# ---- grammar lesson html (already includes VI translations + mistakes +
#      formula cards + unit-specific worked example; the GENERIC steps
#      live in the engine, not here) ----
GRAMMAR_LESSON_HTML = r"""
<div class="space-y-5">
  <div class="bg-white rounded-2xl shadow-md p-5">
    <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-chalkboard mr-1"></i>1. Verbs of liking + gerunds / to-infinitives</p>
    <div class="overflow-x-auto">
    <table class="w-full text-sm border-collapse">
      <tr class="bg-slate-100"><th class="border px-2 py-1"></th><th class="border px-2 py-1">Cấu trúc</th><th class="border px-2 py-1">Ví dụ (Anh - Việt)</th></tr>
      <tr class="bg-emerald-50"><td class="border px-2 py-1 font-bold" rowspan="8">LIKING<br><span class="font-normal text-xs">(thích)</span></td><td class="border px-2 py-1 font-bold">Adore + V-ing</td><td class="border px-2 py-1 italic">I adore watching movies.<br><span class="not-italic text-slate-500">Tôi rất mê xem phim.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold">Love + V-ing / to V</td><td class="border px-2 py-1 italic">She loves learning English. / She loves to learn English.<br><span class="not-italic text-slate-500">Cô ấy rất thích học tiếng Anh.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold">Enjoy + V-ing</td><td class="border px-2 py-1 italic">He enjoys listening to music.<br><span class="not-italic text-slate-500">Anh ấy thích nghe nhạc.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold">Fancy + V-ing</td><td class="border px-2 py-1 italic">Do they fancy skiing?<br><span class="not-italic text-slate-500">Họ có thích trượt tuyết không?</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold">Like + V-ing / to V</td><td class="border px-2 py-1 italic">I like playing football. / I like to play football.<br><span class="not-italic text-slate-500">Tôi thích chơi bóng đá.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold">Prefer + V-ing / to V</td><td class="border px-2 py-1 italic">My sister prefers dancing. / My sister prefers to dance.<br><span class="not-italic text-slate-500">Chị tôi thích khiêu vũ hơn.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold">Not like + V-ing</td><td class="border px-2 py-1 italic">I don't like eating vegetables.<br><span class="not-italic text-slate-500">Tôi không thích ăn rau.</span></td></tr>
      <tr class="bg-rose-50"><td class="border px-2 py-1 font-bold">Dislike + V-ing</td><td class="border px-2 py-1 italic">Does he dislike fishing?<br><span class="not-italic text-slate-500">Anh ấy có ghét câu cá không?</span></td></tr>
      <tr class="bg-rose-50"><td class="border px-2 py-1 font-bold" rowspan="3">DISLIKE<br><span class="font-normal text-xs">(không thích)</span></td><td class="border px-2 py-1 font-bold">Hate + V-ing / to V</td><td class="border px-2 py-1 italic">She hates cleaning the house.<br><span class="not-italic text-slate-500">Cô ấy ghét dọn nhà.</span></td></tr>
      <tr class="bg-rose-50"><td class="border px-2 py-1 font-bold">Detest + V-ing</td><td class="border px-2 py-1 italic">They detest getting up early.<br><span class="not-italic text-slate-500">Họ ghét cay ghét đắng việc dậy sớm.</span></td></tr>
      <tr class="bg-rose-50"><td class="border px-2 py-1 font-bold">Not mind + V-ing</td><td class="border px-2 py-1 italic">I don't mind cooking.<br><span class="not-italic text-slate-500">Tôi không phiền việc nấu ăn.</span></td></tr>
    </table>
    </div>
    <p class="text-xs text-slate-500 mt-2">💡 <b>fancy, adore, enjoy, mind, detest, dislike</b> chỉ theo sau bởi <b>V-ing</b>. <b>love, like, prefer, hate</b> đi được với cả <b>V-ing</b> và <b>to V</b>.</p>
  </div>

  <div class="bg-white rounded-2xl shadow-md p-5">
    <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-heart mr-1"></i>2. Expressions used with hobbies</p>
    <div class="overflow-x-auto">
    <table class="w-full text-sm border-collapse">
      <tr class="bg-slate-100"><th class="border px-2 py-1">Verb</th><th class="border px-2 py-1">Cấu trúc tương đương</th><th class="border px-2 py-1">Ví dụ - Nghĩa</th></tr>
      <tr><td class="border px-2 py-1 font-bold" rowspan="5">Like<br><span class="font-normal text-xs">(thích)</span></td><td class="border px-2 py-1">= Be keen ON</td><td class="border px-2 py-1 italic">I'm keen on music. <span class="not-italic text-slate-500">— Tôi say mê âm nhạc.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be a fan OF</td><td class="border px-2 py-1 italic">I'm a fan of football. <span class="not-italic text-slate-500">— Tôi là fan bóng đá.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be interested IN</td><td class="border px-2 py-1 italic">I'm interested in action movies. <span class="not-italic text-slate-500">— Tôi thích phim hành động.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be hooked ON</td><td class="border px-2 py-1 italic">I'm hooked on playing board games. <span class="not-italic text-slate-500">— Tôi mê chơi cờ bàn.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be addicted TO</td><td class="border px-2 py-1 italic">I'm addicted to playing computer games. <span class="not-italic text-slate-500">— Tôi nghiện chơi game.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold" rowspan="3">Love<br><span class="font-normal text-xs">(rất thích)</span></td><td class="border px-2 py-1">= Be obsessed WITH</td><td class="border px-2 py-1 italic">She's obsessed with novels. <span class="not-italic text-slate-500">— Cô ấy mê tiểu thuyết.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be mad ABOUT</td><td class="border px-2 py-1 italic">He's mad about painting. <span class="not-italic text-slate-500">— Anh ấy đam mê hội họa.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be crazy ABOUT</td><td class="border px-2 py-1 italic">She is crazy about taking photos. <span class="not-italic text-slate-500">— Cô ấy mê chụp ảnh.</span></td></tr>
      <tr><td class="border px-2 py-1 font-bold" rowspan="2">Dislike<br><span class="font-normal text-xs">(không giỏi/thích)</span></td><td class="border px-2 py-1">= Be bad AT</td><td class="border px-2 py-1 italic">I'm bad at swimming. <span class="not-italic text-slate-500">— Tôi bơi không giỏi.</span></td></tr>
      <tr><td class="border px-2 py-1">= Be terrible AT</td><td class="border px-2 py-1 italic">I'm terrible at singing. <span class="not-italic text-slate-500">— Tôi hát rất dở.</span></td></tr>
    </table>
    </div>
    <p class="text-xs text-slate-500 mt-2">💡 Chú ý đúng GIỚI TỪ đi kèm: keen <b>on</b>, interested <b>in</b>, addicted <b>to</b>, obsessed <b>with</b>, mad/crazy <b>about</b>, bad/terrible <b>at</b>.</p>
  </div>

  <div class="bg-rose-50 border border-rose-200 rounded-2xl p-5">
    <p class="font-extrabold text-rose-800 mb-2"><i class="fa-solid fa-triangle-exclamation mr-1"></i>DON'T MAKE THESE MISTAKES</p>
    <ol class="list-decimal ml-5 space-y-1.5 text-sm text-slate-700">
      <li><s>I fancy to play.</s> ❌ → <b>I fancy playing.</b> ✅ — "fancy" chỉ theo sau bởi V-ing, không dùng to-V.</li>
      <li><s>She enjoys to cook.</s> ❌ → <b>She enjoys cooking.</b> ✅ — "enjoy" chỉ đi với V-ing.</li>
      <li><s>He doesn't mind to wait.</s> ❌ → <b>He doesn't mind waiting.</b> ✅ — "mind" chỉ đi với V-ing.</li>
      <li><s>They detest to get up early.</s> ❌ → <b>They detest getting up early.</b> ✅ — "detest" chỉ đi với V-ing.</li>
      <li><s>I am interested to play football.</s> ❌ → <b>I am interested IN playing football.</b> ✅ — cần giới từ "in".</li>
      <li><s>It take me two hours to do it.</s> ❌ → <b>It takes me two hours to do it.</b> ✅ — chủ ngữ giả "It" luôn chia số ít (takes/took).</li>
      <li><s>I spend two hours to read books.</s> ❌ → <b>I spend two hours reading books.</b> ✅ — "spend + time" đi với V-ing, không dùng to-V.</li>
      <li><s>She is keen with music.</s> ❌ → <b>She is keen ON music.</b> ✅ — "keen" đi với giới từ "on", không phải "with".</li>
    </ol>
  </div>

  <div class="grid sm:grid-cols-2 gap-3">
    <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 relative">
      <button onclick="copyNote(this)" data-copy="It is interesting for sb to V = sb + fancy/fancies + V-ing" class="absolute top-3 right-3 text-xs text-indigo-600"><i class="fa-solid fa-copy"></i></button>
      <p class="font-bold text-indigo-800 text-sm mb-1">📒 Công thức 1 (riêng của Unit này)</p>
      <p class="text-sm text-slate-700">It is interesting for sb to V<br>= sb + fancy(-ies) + V-ing</p>
    </div>
    <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 relative">
      <button onclick="copyNote(this)" data-copy="V-ing... is interesting to sb = sb + enjoy(s) + V-ing" class="absolute top-3 right-3 text-xs text-indigo-600"><i class="fa-solid fa-copy"></i></button>
      <p class="font-bold text-indigo-800 text-sm mb-1">📒 Công thức 2 (riêng của Unit này)</p>
      <p class="text-sm text-slate-700">V-ing... is interesting to sb<br>= sb + enjoy(s) + V-ing</p>
    </div>
    <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 relative">
      <button onclick="copyNote(this)" data-copy="S + like(s) + V-ing = S + be interested in + V-ing" class="absolute top-3 right-3 text-xs text-indigo-600"><i class="fa-solid fa-copy"></i></button>
      <p class="font-bold text-indigo-800 text-sm mb-1">📒 Công thức 3 (riêng của Unit này)</p>
      <p class="text-sm text-slate-700">S + like(s) + V-ing<br>= S + be interested in + V-ing</p>
    </div>
    <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 relative">
      <button onclick="copyNote(this)" data-copy="S + spend(s)/spent + time + V-ing = It takes/took + O + time + to V" class="absolute top-3 right-3 text-xs text-indigo-600"><i class="fa-solid fa-copy"></i></button>
      <p class="font-bold text-indigo-800 text-sm mb-1">📒 Công thức 4 (riêng của Unit này)</p>
      <p class="text-sm text-slate-700">S + spend(s)/spent + time + V-ing<br>= It takes/took + O + time + to V</p>
    </div>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-2xl p-5">
    <p class="font-extrabold text-amber-800 mb-2"><i class="fa-solid fa-lightbulb mr-1"></i>Áp dụng phương pháp 6 bước (xem tab "Cách viết lại câu") vào bài này</p>
    <p class="text-sm text-slate-700">Ví dụ: <i>"It is really interesting for him to talk with his music teacher about jazz."</i> → từ gợi ý <b>He fancies</b> cho biết cần dùng Công thức 1 → động từ "talk" ở câu gốc → chuyển thành V-ing "talking" → giữ nguyên phần còn lại → <b>He fancies talking with his music teacher about jazz.</b></p>
  </div>
</div>
"""

unit1 = dict(
  meta=dict(unit=1, title="Leisure Time", grade=8, book="Global Success"),
  vocabulary=vf["vocab"],
  word_families=vf["families"],
  word_formation=word_formation,
  pronunciation=ps["pron"],
  stress=ps["stress"],
  mcq=mcq_tagged,
  readings=readings,
  true_false=true_false,
  transformations=transformations,
  dictionary=dictionary,
  pictures=tdp["pictures"],
  grammar_lesson_html=GRAMMAR_LESSON_HTML,
  comprehension_quiz=comp,
)

# add emoji to vocab (from the enhanced vocab2 build) and word_families
vf2 = load("DATA_vocab2.json")
emoji_by_word = {w["w"]: w["emoji"] for w in vf2["words"]}
emoji_by_fam = {f["base"]: f["emoji"] for f in vf2["families"]}
for v in unit1["vocabulary"]:
    v["emoji"] = emoji_by_word.get(v["w"], "📖")
for f in unit1["word_families"]:
    f["emoji"] = emoji_by_fam.get(f["base"], "🔤")

out_path = "/home/claude/engine/data/unit1.json"
with open(out_path, "w", encoding="utf-8") as f:
    json.dump(unit1, f, ensure_ascii=False)

print("written:", out_path)
for k in ["vocabulary","word_families","word_formation","pronunciation","stress","mcq",
          "readings","true_false","transformations","dictionary","pictures","comprehension_quiz"]:
    v = unit1[k]
    print(f"  {k}: {len(v)}")
