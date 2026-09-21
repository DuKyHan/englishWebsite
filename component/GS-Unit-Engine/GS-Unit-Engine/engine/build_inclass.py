#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
from engine.common_js import NORMALIZE_JS, tts_js, confetti_js, CONFETTI_CSS, VOICE_STATUS_CSS, FEEDBACK_JS, google_font_import, BASE_HEAD
from engine.generic_lessons import (word_formation_guide_html, pronunciation_endings_guide_html, stress_tip_html,
                                     tip_box, s_es_pronunciation_quiz, ed_pronunciation_quiz, stress_basic_quiz)
from engine.build_vocab import derive_wf_quiz

def _vocab_ref_html(vocabulary):
    html = "<div class='bg-white rounded-2xl shadow-md p-5'><p class='font-extrabold text-indigo-900 mb-3'><i class=\"fa-solid fa-book mr-1\"></i>Bảng từ vựng (xem chi tiết &amp; luyện tập đầy đủ trong file VOCAB)</p><div class='grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm'>"
    for v in vocabulary:
        html += f"<div class='flex items-baseline gap-1 border-b border-slate-100 py-1'><span class='font-bold text-indigo-800'>{v['no']}. {v['w']}</span><span class='text-slate-400 text-xs'>({v['pos']}) {v['ipa']}</span><span class='text-slate-500 text-xs ml-auto'>{v['vi']}</span></div>"
    html += "</div></div>"
    return html

def _pron_stress_reference_html(pron_items, stress_items):
    """A compact ANSWER-KEY reference table (not a quiz) built from the
    unit's own Pronunciation & Stress exercises — this is the "give back
    the exercise examples so students can study them" piece the teacher
    asked for. Fully generic: works for whatever pronunciation focus a
    future unit's items happen to cover (endings, vowel pairs, stress...).
    """
    def rows(items):
        out = ""
        for i, q in enumerate(items):
            opts_html = " · ".join(
                f"<b class='{'text-emerald-700' if j==q['answer'] else 'text-slate-500'}'>{o}</b>" +
                (f" <span class='text-slate-400'>{q['ipas'][j]}</span>" if q.get("ipas") else "")
                for j, o in enumerate(q["options"])
            )
            out += f"<div class='border-b border-slate-100 py-2'><p class='text-sm'>{i+1}. {opts_html}</p><p class='text-xs text-blue-700 mt-0.5'>💡 {q.get('explanation','')}</p></div>"
        return out
    return f"""
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-list-check mr-1"></i>Bảng ví dụ Phát âm trong Unit này (đáp án đúng in đậm)</p>
  <div>{rows(pron_items)}</div>
</div>
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-list-check mr-1"></i>Bảng ví dụ Trọng âm trong Unit này (đáp án đúng in đậm)</p>
  <div>{rows(stress_items)}</div>
</div>
"""

def _mini_quiz_block(key, label):
    return f"""
<div class="bg-white rounded-2xl shadow-md p-5">
  <p class="font-extrabold text-emerald-800 mb-3"><i class="fa-solid fa-bolt mr-1"></i>Áp dụng ngay — {label}</p>
  <div id="miniquiz-{key}" class="space-y-3"></div>
  <span id="miniquiz-score-{key}" class="text-xs font-extrabold text-emerald-600"></span>
</div>
"""

def build_sections(data):
    sections = []
    theory_full = ("<div class='mb-5'><p class=\"text-sm text-slate-500 italic mb-3\">Ôn lại từ vựng, ngữ pháp trọng tâm và cách làm dạng bài Word Form trước khi luyện tập.</p></div>"
                   + _vocab_ref_html(data["vocabulary"]) + data["grammar_lesson_html"] + word_formation_guide_html())
    sections.append(dict(roman="", navLabel="Lý thuyết", title="Từ vựng - Ngữ pháp - Hướng dẫn Word Form",
                          icon="lightbulb", type="info", info=theory_full))

    sections.append(dict(roman="I", navLabel="Phát âm", title="Phát âm", icon="ear-listen",
                          instructions="Chọn từ có phần gạch chân được phát âm khác với các từ còn lại.",
                          type="mcq", instant=True, questions=data["pronunciation"]))
    sections.append(dict(roman="II", navLabel="Trọng âm", title="Trọng âm", icon="ear-listen",
                          instructions="Chọn từ có trọng âm khác với các từ còn lại.",
                          type="mcq", instant=True, questions=data["stress"]))
    sections.append(dict(roman="III", navLabel="Từ vựng & Ngữ pháp", title="Choose the best answer or phrase",
                          icon="list-check", instructions="Chọn đáp án (A, B, C hoặc D) đúng nhất.",
                          type="mcq", instant=True, questions=data["mcq"]))

    wf_questions = []
    fam_by_base = {f["base"]: f for f in data["word_families"]}
    for wf in data["word_formation"]:
        fam = fam_by_base.get(wf["family_base"])
        family_lines = [f"{f['w']} ({f['pos']}): {f['vi']}" for f in fam["forms"]] if fam else []
        wf_questions.append(dict(q=wf["q"], hint=wf["hint"], answer=wf["answer"],
                                  explanation=wf["explanation"], vi=wf["vi"], family=family_lines))
    sections.append(dict(roman="IV", navLabel="Word Form", title="Cho dạng đúng của từ trong ngoặc",
                          icon="spell-check",
                          instructions="Điền dạng đúng của từ trong ngoặc vào chỗ trống. Xem lại 'họ từ' (word family) bên dưới mỗi câu để ghi nhớ.",
                          type="fill", questions=wf_questions))

    roman_r = ["V", "VI"]
    for i, r in enumerate(data["readings"]):
        sections.append(dict(roman=roman_r[i], navLabel=f"Đọc điền từ {chr(65+i)}", title=f"Reading: Choose the best answer ({chr(65+i)})",
                              icon="file-lines", instructions="Đọc đoạn văn và chọn đáp án đúng để hoàn thành chỗ trống.",
                              type="mcq", instant=True, passage=dict(title=r["title"], html=r["html"], vi=r["vi"]),
                              questions=r["questions"]))

    roman_tf = ["VII", "VIII"]
    for i, t in enumerate(data["true_false"]):
        sections.append(dict(roman=roman_tf[i], navLabel=f"Đúng/Sai {chr(65+i)}", title=f"Reading: Choose True or False ({chr(65+i)})",
                              icon="book-open", instructions="Đọc đoạn văn, xác định Đúng/Sai và chọn đáp án đúng.",
                              type="mcq", instant=True, passage=dict(title=t["title"], html=t["html"], vi=t["vi"]),
                              questions=t["questions"]))

    sent_qs = [dict(q=t["q"], original=t["original"], starter=t["starter"], answer=t["answer"],
                     accepted=t.get("accepted"), explanation=t["explanation"], vi=t["vi"], note=t["note"])
               for t in data["transformations"]]
    sections.append(dict(roman="IX", navLabel="Viết lại câu", title="Sentence Transformation", icon="pen-to-square",
                          instructions="Viết lại câu, giữ nguyên nghĩa với câu gốc. Dùng đúng từ gợi ý ở đầu câu.",
                          type="sentence", instant=True, questions=sent_qs))

    roman_dict = ["X", "XI"]
    for i, d in enumerate(data["dictionary"]):
        sections.append(dict(roman=roman_dict[i], navLabel=f"Từ điển {i+1}", title=f"Tra từ điển \"{d['word']}\"",
                              icon="book-bookmark", instructions="Dựa vào mục từ điển, hoàn thành câu.",
                              type="fill",
                              dict_=dict(word=d["word"], ipa=d["ipa"], pos=d["pos"], senses=d["senses"], vi=d["vi"]),
                              questions=d["questions"]))

    sections.append(dict(roman="XII", navLabel="Biển báo", title="Pictures and Signs", icon="traffic-light",
                          instructions="Đọc biển báo/thông báo và chọn ý đúng nhất.",
                          type="mcq", instant=True, questions=data["pictures"]))

    # ---- Final review tab: everything a student needs to re-study, in
    # one place, after finishing all the exercises above — plus a small
    # "apply it now" mini-quiz under each topic so review isn't passive ----
    grammar_mini = data["comprehension_quiz"][:4]
    wf_mini = derive_wf_quiz(data["word_formation"], data["word_families"])[:4]
    mini_quizzes = dict(sEs=s_es_pronunciation_quiz(), ed=ed_pronunciation_quiz(), stress=stress_basic_quiz(),
                         grammar=grammar_mini, wf=wf_mini)

    summary_html = ("<p class=\"text-sm text-slate-500 italic mb-3\">Tổng hợp lại toàn bộ kiến thức trọng tâm của Unit "
                     f"{data['meta']['unit']} để ôn tập — có mẹo ghi nhớ và vài câu trắc nghiệm áp dụng ngay theo từng dạng.</p>"
                     + pronunciation_endings_guide_html()
                     + _mini_quiz_block("sEs", "Phát âm đuôi -s/-es")
                     + _mini_quiz_block("ed", "Phát âm đuôi -ed")
                     + stress_tip_html()
                     + _mini_quiz_block("stress", "Trọng âm")
                     + _pron_stress_reference_html(data["pronunciation"], data["stress"])
                     + data["grammar_lesson_html"]
                     + _mini_quiz_block("grammar", "Ngữ pháp")
                     + word_formation_guide_html()
                     + _mini_quiz_block("wf", "Word Formation")
                     + _vocab_ref_html(data["vocabulary"]))
    sections.append(dict(roman="", navLabel="📌 Tổng hợp kiến thức", title="Kiến thức cần nhớ — Unit " + str(data["meta"]["unit"]),
                          icon="graduation-cap", type="info", info=summary_html, miniQuizzes=mini_quizzes))
    return sections


def build(data: dict) -> str:
    sections = build_sections(data)
    mini_quizzes = next((s.pop("miniQuizzes") for s in sections if "miniQuizzes" in s), {})
    data_json = json.dumps(dict(unit=data["meta"]["unit"], sections=sections, miniQuizzes=mini_quizzes), ensure_ascii=False)
    data_json = data_json.replace('"dict_":', '"dict":')
    title = data["meta"]["title"]
    unit_no = data["meta"]["unit"]

    html = r"""<!DOCTYPE html>
<html lang="vi">
<head>
__BASE_HEAD__
<title>Unit __UNIT__ - In-class Practice</title>
<style>
  """ + google_font_import() + r"""
  :root{ --accent:#1d4ed8; --accent2:#0891b2; }
  * { box-sizing: border-box; }
  body { font-family:'Nunito',sans-serif; background:#f5f3ff; }
  .hero-gradient{ background: linear-gradient(135deg, #7c2d12 0%, #ea580c 55%, #f59e0b 100%); }
  .tab-btn{ transition: all .2s ease; }
  .tab-btn.active{ background: linear-gradient(135deg, #7c2d12, #f59e0b); color:#fff; box-shadow:0 4px 14px rgba(124,45,18,.35); transform:translateY(-1px); }
  .task-card{ transition: box-shadow .2s, transform .2s; }
  .task-card:hover{ transform: translateY(-2px); box-shadow:0 8px 30px rgba(0,0,0,.10); }
  .option-label{ cursor:pointer; transition: all .18s; border:2px solid #e2e8f0; }
  .option-label:hover{ border-color:var(--accent); background:#f5f3ff; }
  .option-label.selected{ border-color:#1e1b4b; background:#eef2ff; }
  .option-label.correct-opt{ border-color:#22c55e !important; background:#f0fdf4 !important; }
  .option-label.wrong-opt{ border-color:#ef4444 !important; background:#fef2f2 !important; }
  .mcq-detail-hidden{ display:none; }
  .show-mcq-detail .mcq-detail-hidden{ display:block; }
  .speak-btn{ cursor:pointer; }
  .speak-btn.speaking{ animation: pulseSpeak .7s ease-in-out infinite; }
  @keyframes pulseSpeak{ 0%,100%{transform:scale(1);} 50%{transform:scale(1.18);} }
  .vi-hidden{ display:none; }
  .explanation-box{ display:none; animation: fadeSlide .3s ease forwards; }
  .explanation-box.show{ display:block; }
  @keyframes fadeSlide{ from{opacity:0; transform:translateY(-6px);} to{opacity:1; transform:translateY(0);} }
  input.answer-input{ border:2px solid #cbd5e1; transition:border .18s; outline:none; background:#fff; }
  input.answer-input:focus{ border-color:var(--accent); }
  input.correct-input{ border-color:#22c55e !important; background:#f0fdf4; }
  input.wrong-input{ border-color:#ef4444 !important; background:#fef2f2; }
  .score-badge{ animation: popIn .35s cubic-bezier(.36,1.6,.6,1) forwards; }
  @keyframes popIn{ from{transform:scale(.4); opacity:0;} to{transform:scale(1); opacity:1;} }
  """ + CONFETTI_CSS + VOICE_STATUS_CSS + r"""
  .progress-bar-fill{ transition: width .6s ease; }
  .section-page{ display:none; }
  .section-page.active{ display:block; }
  #completionBanner{ display:none; }
  #completionBanner.show{ display:flex; }
  .passage-box{ background:#fff; border:1px solid #e2e8f0; border-radius:1rem; padding:1rem 1.25rem; line-height:1.9; font-size:.95rem; color:#334155; }
  .dict-box{ background:#fef9c3; border:1px solid #fde68a; border-radius:1rem; padding:1rem 1.25rem; font-size:.9rem; color:#334155; }
  .blank-tag{ background:#ffedd5; color:#9a3412; font-weight:800; border-radius:.4rem; padding:0 .35rem; }
  .wordfam-box{ background:#fff7ed; border:1px solid #fed7aa; border-radius:.6rem; padding:.5rem .75rem; font-size:.75rem; color:#9a3412; line-height:1.6; width:100%; }
  table.border-collapse td, table.border-collapse th{ border:1px solid #e2e8f0; }
</style>
</head>
<body class="min-h-screen">
<div class="confetti-wrap" id="confettiWrap"></div>

<header class="hero-gradient text-white py-8 px-4 text-center shadow-xl relative overflow-hidden">
  <div class="absolute inset-0 opacity-10 pointer-events-none">
    <div class="absolute top-4 left-8 text-6xl">🎨</div>
    <div class="absolute top-2 right-12 text-5xl">🏂</div>
    <div class="absolute bottom-2 left-1/3 text-4xl">🧩</div>
    <div class="absolute bottom-4 right-1/4 text-5xl">📷</div>
  </div>
  <p class="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Unit __UNIT__ · In-class Practice</p>
  <h1 class="font-['Baloo_2'] text-3xl md:text-5xl font-extrabold drop-shadow-lg">🎨 Unit __UNIT__: __TITLE__ 🏂</h1>
  <p class="mt-2 text-base md:text-lg opacity-90 font-semibold">Luyện tập trên lớp · Từ vựng - Ngữ pháp - Word Form - Kỹ năng</p>
  <div class="mt-5 max-w-2xl mx-auto">
    <div class="flex justify-between text-xs font-bold opacity-80 mb-1">
      <span>Tiến độ hoàn thành</span>
      <span id="progressText">0 / 12 phần</span>
    </div>
    <div class="bg-white/20 rounded-full h-3 overflow-hidden">
      <div id="progressBar" class="bg-white rounded-full h-3 progress-bar-fill" style="width:0%"></div>
    </div>
  </div>
</header>

<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm px-3 py-2 overflow-x-auto">
  <div class="flex gap-2 min-w-max mx-auto w-fit" id="navWrap"></div>
</nav>

<main class="max-w-4xl mx-auto px-4 py-6 pb-20" id="mainWrap"></main>

<div id="completionBanner" class="fixed inset-0 z-[9998] items-center justify-center bg-black/50 px-4">
  <div class="bg-white rounded-3xl p-8 max-w-sm w-full text-center score-badge shadow-2xl">
    <div class="text-6xl mb-3">🎉</div>
    <h3 class="text-2xl font-extrabold text-orange-900 mb-1">Hoàn thành bài luyện tập!</h3>
    <p class="text-slate-500 mb-4">Bạn đã làm xong tất cả các phần.</p>
    <p id="finalScoreDisplay" class="text-3xl font-black text-orange-700 mb-5"></p>
    <button onclick="closeBanner()" class="bg-gradient-to-r from-orange-900 to-amber-500 text-white font-bold px-6 py-2.5 rounded-full">Đóng</button>
  </div>
</div>

<script>
const DATA = __DATA_JSON__;
const completedTasks = new Set();
const scores = {};
const QUIZ_SECTIONS = DATA.sections.filter(s=>s.type!=='info');
const TOTAL_TASKS = QUIZ_SECTIONS.length;

""" + NORMALIZE_JS + r"""
function widthFor(ref){ const l=(ref||'').length; return l<7?'w-24':l<16?'w-40':'w-full'; }
""" + tts_js() + FEEDBACK_JS + r"""

function buildNav(){
  const nav=document.getElementById('navWrap');
  nav.innerHTML = DATA.sections.map((s,i)=>
    `<button class="tab-btn text-sm font-bold px-3 py-2 rounded-full text-slate-600${i===0?' active':''}" id="navbtn_${i}" onclick="showTab(${i})">${s.roman?s.roman+'. ':''}${s.navLabel}</button>`
  ).join('');
}

function renderPassage(p, idx){
  if(!p) return '';
  const viBlock = p.vi ? `<button onclick="togglePassageVI(${idx})" class="text-xs font-bold bg-white border border-indigo-200 text-indigo-700 px-3 py-1 rounded-full hover:scale-105 transition mt-2"><i class="fa-solid fa-language mr-1"></i>Dịch tiếng Việt</button>
    <p id="passage_vi_${idx}" class="vi-hidden mt-2 pt-2 border-t border-indigo-200 italic text-slate-500">${p.vi}</p>` : '';
  return `<div class="passage-box mb-4"><p class="font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-book mr-1"></i>${p.title||''}</p><p id="passage_en_${idx}">${p.html}</p>${viBlock}</div>`;
}
function renderDict(d, idx){
  if(!d) return '';
  const viBlock = d.vi ? `<button onclick="togglePassageVI(${idx})" class="text-xs font-bold bg-white border border-amber-300 text-amber-700 px-3 py-1 rounded-full hover:scale-105 transition mt-2"><i class="fa-solid fa-language mr-1"></i>Dịch tiếng Việt</button>
    <p id="passage_vi_${idx}" class="vi-hidden mt-2 pt-2 border-t border-amber-300 text-slate-600">${d.vi}</p>` : '';
  return `<div class="dict-box mb-4"><p class="font-extrabold text-amber-800 mb-1"><i class="fa-solid fa-book-bookmark mr-1"></i>${d.word} <span class="font-normal italic">${d.ipa||''}</span> <span class="font-normal">(${d.pos||''})</span></p>${d.senses.map(x=>`<p class="mb-1">✱ ${x.def}</p>${(x.examples||[]).map(e=>`<p class="ml-4 italic text-slate-600">• ${e}</p>`).join('')}`).join('')}${viBlock}</div>`;
}

function renderSection(s, idx){
  if(s.type==='info'){
    return `<section id="tab-${idx}" class="section-page${idx===0?' active':''} space-y-4">
      <h2 class="text-xl md:text-2xl font-extrabold text-indigo-900 flex items-center gap-2 mb-1"><i class="fa-solid fa-${s.icon||'lightbulb'} text-amber-400"></i> ${s.title}</h2>
      ${s.info}
    </section>`;
  }
  let inner = `<h2 class="text-xl md:text-2xl font-extrabold text-indigo-900 flex items-center gap-2 mb-1"><i class="fa-solid fa-${s.icon||'circle-check'} text-amber-400"></i> ${s.roman}. ${s.title}</h2>`;
  if(s.instructions) inner += `<p class="text-sm text-slate-500 mb-3 italic">${s.instructions}</p>`;
  inner += renderPassage(s.passage, idx);
  inner += renderDict(s.dict, idx);

  inner += `<div class="space-y-4">`;
  s.questions.forEach((q,i)=>{
    inner += `<div class="task-card bg-white rounded-2xl shadow-md p-4" id="qblock_${idx}_${i}">`;
    if(q.image) inner += `<div class="mb-3">${q.image}</div>`;
    inner += `<p class="font-bold text-slate-800 mb-2"><span class="bg-slate-100 text-slate-600 text-xs font-black px-2 py-1 rounded-lg mr-2">${i+1}</span>${q.q}</p>`;
    if(s.type==='mcq'){
      inner += `<div class="grid sm:grid-cols-2 gap-2">`;
      q.options.forEach((opt,j)=>{
        const ipa = q.ipas ? q.ipas[j] : null;
        const optVi = q.vis ? q.vis[j] : null;
        const cleanWord = opt.replace(/<[^>]+>/g,'');
        const wordBlock = (ipa || optVi)
          ? `<span class="flex flex-col leading-tight"><span>${opt}</span>${ipa?`<span class="text-[10px] text-slate-400 font-normal mcq-detail-hidden">${ipa}</span>`:''}${optVi?`<span class="text-[10px] text-emerald-500 font-normal italic mcq-detail-hidden">${optVi}</span>`:''}</span>
             <button type="button" data-w="${cleanWord}" onclick="event.stopPropagation();event.preventDefault();speak(this.dataset.w,this)" class="speak-btn w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:scale-110 transition flex items-center justify-center ml-auto shrink-0 mcq-detail-hidden" title="Nghe phát âm" aria-label="Nghe phát âm ${cleanWord}"><i class="fa-solid fa-volume-high text-[10px]"></i></button>`
          : `<span>${opt}</span>`;
        inner += `<label class="option-label rounded-xl px-3 py-2 text-sm font-semibold flex items-center gap-2" id="opt_${idx}_${i}_${j}" onclick="selectMcq(${idx},${i},${j})">
          <input type="radio" name="mcq_${idx}_${i}" class="accent-indigo-700" style="display:none">
          <span class="font-black text-indigo-700">${optionLetter(j)}.</span> ${wordBlock}
        </label>`;
      });
      inner += `</div>`;
    } else if(s.type==='fill'){
      const w = widthFor(q.answer);
      const famBlock = q.family ? `<div class="wordfam-box mt-2">${q.family.map(f=>`<div>• ${f}</div>`).join('')}</div>` : '';
      inner += `<div class="flex items-center gap-2 flex-wrap">`;
      if(q.hint) inner += `<span class="blank-tag text-xs">${q.hint}</span>`;
      inner += `<input type="text" id="inp_${idx}_${i}" class="answer-input ${w} px-3 py-1.5 rounded-lg text-sm font-semibold" placeholder="Nhập đáp án..." autocomplete="off" spellcheck="false"></div>${famBlock}`;
    } else if(s.type==='sentence'){
      const instantAttr = s.instant ? ` oninput="gradeOneSentence(${idx},${i})"` : '';
      if(q.starter){
        inner += `<p class="text-slate-700 text-sm mb-2">${q.original}</p>
        <div class="flex items-center gap-3 w-full flex-wrap">
          <span class="text-slate-800 font-extrabold text-base whitespace-nowrap">${q.starter}</span>
          <input type="text" id="inp_${idx}_${i}" class="answer-input flex-1 min-w-[180px] px-3 py-2 rounded-lg text-sm font-semibold" placeholder="..." autocomplete="off" spellcheck="false"${instantAttr}>
        </div>`;
      } else {
        inner += `<input type="text" id="inp_${idx}_${i}" class="answer-input w-full px-3 py-2 rounded-lg text-sm font-semibold" placeholder="Viết câu trả lời..." autocomplete="off" spellcheck="false"${instantAttr}>`;
      }
    }
    inner += `<div class="explanation-box mt-2 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-sm text-blue-800" id="fb_${idx}_${i}"></div>`;
    inner += `</div>`;
  });
  inner += `</div>`;

  inner += `<div class="flex flex-wrap gap-2 mt-5">
    <button onclick="checkSection(${idx})" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-5 py-2.5 rounded-full text-sm"><i class="fa-solid fa-check mr-1"></i>Kiểm tra</button>
    <button onclick="revealSection(${idx})" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm"><i class="fa-solid fa-eye mr-1"></i>Xem đáp án</button>
    <button onclick="resetSection(${idx})" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm"><i class="fa-solid fa-rotate-left mr-1"></i>Làm lại</button>
    <span id="score_${idx}" class="hidden ml-auto self-center font-extrabold text-emerald-600 text-sm score-badge"></span>
  </div>`;

  return `<section id="tab-${idx}" class="section-page${idx===0?' active':''} space-y-4">${inner}</section>`;
}

function buildMain(){
  const main=document.getElementById('mainWrap');
  main.innerHTML = DATA.sections.map((s,i)=>renderSection(s,i)).join('');
}

function togglePassageVI(idx){ const el=document.getElementById(`passage_vi_${idx}`); if(el) el.classList.toggle('vi-hidden'); }
function selectMcq(idx,i,j){
  const q=DATA.sections[idx].questions[i];
  document.querySelectorAll(`[id^="opt_${idx}_${i}_"]`).forEach(el=>el.classList.remove('selected'));
  document.getElementById(`opt_${idx}_${i}_${j}`).classList.add('selected');
  document.getElementById(`opt_${idx}_${i}_${j}`).dataset.chosen = j;
  if(DATA.sections[idx].instant){ gradeOneMcq(idx,i); }
}

function gradeOneMcq(idx,i){
  const s=DATA.sections[idx], q=s.questions[i];
  const qblock=document.getElementById(`qblock_${idx}_${i}`);
  if(qblock) qblock.classList.add('show-mcq-detail');
  const chosenEl=document.querySelector(`#tab-${idx} [id^="opt_${idx}_${i}_"].selected`);
  const chosen = chosenEl ? parseInt(chosenEl.dataset.chosen) : -1;
  const ok = chosen === q.answer;
  const answerLabel = `${optionLetter(q.answer)}. ${q.options[q.answer]}`;
  q.options.forEach((o,j)=>{
    const el=document.getElementById(`opt_${idx}_${i}_${j}`);
    el.classList.remove('correct-opt','wrong-opt');
    if(j===q.answer) el.classList.add('correct-opt');
    else if(j===chosen) el.classList.add('wrong-opt');
  });
  const fb=document.getElementById(`fb_${idx}_${i}`);
  fb.innerHTML = feedbackHTML(ok, answerLabel, q.explanation, q.vi, q.note);
  fb.classList.add('show');
}

function gradeOneSentence(idx,i){
  const q=DATA.sections[idx].questions[i];
  const inp=document.getElementById(`inp_${idx}_${i}`);
  const fb=document.getElementById(`fb_${idx}_${i}`);
  if(!inp || !fb) return;
  const raw=inp.value.trim();
  if(raw===''){
    inp.classList.remove('correct-input','wrong-input');
    fb.classList.remove('show'); fb.innerHTML='';
    return;
  }
  const val=normalize(inp.value);
  const acc=(q.accepted||[q.answer]).map(normalize);
  const ok = acc.includes(val);
  inp.classList.remove('correct-input','wrong-input');
  inp.classList.add(ok?'correct-input':'wrong-input');
  fb.innerHTML = feedbackHTML(ok, q.answer, q.explanation, q.vi, q.note);
  fb.classList.add('show');
}

function checkSection(idx){
  const s=DATA.sections[idx];
  let correct=0;
  s.questions.forEach((q,i)=>{
    let ok=false, answerLabel='';
    const fb=document.getElementById(`fb_${idx}_${i}`);
    if(s.type==='mcq'){
      const chosenEl=document.querySelector(`#tab-${idx} [id^="opt_${idx}_${i}_"].selected`);
      const chosen = chosenEl ? parseInt(chosenEl.dataset.chosen) : -1;
      ok = chosen === q.answer;
      answerLabel = `${optionLetter(q.answer)}. ${q.options[q.answer]}`;
      q.options.forEach((o,j)=>{
        const el=document.getElementById(`opt_${idx}_${i}_${j}`);
        el.classList.remove('correct-opt','wrong-opt');
        if(j===q.answer) el.classList.add('correct-opt');
        else if(j===chosen) el.classList.add('wrong-opt');
      });
      const qblock=document.getElementById(`qblock_${idx}_${i}`);
      if(qblock) qblock.classList.add('show-mcq-detail');
    } else {
      const inp=document.getElementById(`inp_${idx}_${i}`);
      const val=normalize(inp.value);
      const acc=(q.accepted||[q.answer]).map(normalize);
      ok = val!=='' && acc.includes(val);
      inp.classList.remove('correct-input','wrong-input');
      inp.classList.add(ok?'correct-input':'wrong-input');
      answerLabel = q.answer;
    }
    if(ok) correct++;
    fb.innerHTML = feedbackHTML(ok, answerLabel, q.explanation, q.vi, q.note);
    fb.classList.add('show');
  });
  const total=s.questions.length;
  scores[idx]={correct,total};
  const scoreEl=document.getElementById(`score_${idx}`);
  scoreEl.textContent = `🏆 Điểm: ${correct}/${total}`;
  scoreEl.classList.remove('hidden');
  completedTasks.add(idx);
  updateProgress();
  if(completedTasks.size===TOTAL_TASKS) setTimeout(showCompletion,500);
}

function revealSection(idx){
  const s=DATA.sections[idx];
  s.questions.forEach((q,i)=>{
    const fb=document.getElementById(`fb_${idx}_${i}`);
    let answerLabel = s.type==='mcq' ? `${optionLetter(q.answer)}. ${q.options[q.answer]}` : q.answer;
    if(s.type==='mcq'){
      q.options.forEach((o,j)=>{
        const el=document.getElementById(`opt_${idx}_${i}_${j}`);
        el.classList.remove('correct-opt','wrong-opt');
        if(j===q.answer) el.classList.add('correct-opt');
      });
      const qblock=document.getElementById(`qblock_${idx}_${i}`);
      if(qblock) qblock.classList.add('show-mcq-detail');
    }
    fb.innerHTML = `👁️ Đáp án: <b>${answerLabel}</b>` + (q.explanation?`<br><span class="text-blue-700">💡 ${q.explanation}</span>`:'') + (q.vi?`<br><span class="text-slate-500">📖 Nghĩa: <i>${q.vi}</i></span>`:'') + (q.note?`<br><span class="text-violet-600">📐 Công thức: <b>${q.note}</b></span>`:'');
    fb.classList.add('show');
  });
}

function resetSection(idx){
  const s=DATA.sections[idx];
  s.questions.forEach((q,i)=>{
    if(s.type==='mcq'){
      q.options.forEach((o,j)=>{
        const el=document.getElementById(`opt_${idx}_${i}_${j}`);
        el.classList.remove('correct-opt','wrong-opt','selected');
        delete el.dataset.chosen;
      });
    } else {
      const inp=document.getElementById(`inp_${idx}_${i}`);
      if(inp){ inp.value=''; inp.classList.remove('correct-input','wrong-input'); }
    }
    const qblock=document.getElementById(`qblock_${idx}_${i}`);
    if(qblock) qblock.classList.remove('show-mcq-detail');
    const fb=document.getElementById(`fb_${idx}_${i}`);
    fb.classList.remove('show'); fb.innerHTML='';
  });
  const scoreEl=document.getElementById(`score_${idx}`); scoreEl.classList.add('hidden');
  completedTasks.delete(idx); delete scores[idx]; updateProgress();
}

function showTab(idx){
  document.querySelectorAll('.section-page').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>{b.classList.remove('active'); b.classList.add('text-slate-600');});
  document.getElementById(`tab-${idx}`).classList.add('active');
  const btn=document.getElementById(`navbtn_${idx}`);
  btn.classList.add('active'); btn.classList.remove('text-slate-600');
  window.scrollTo({top:0,behavior:'smooth'});
}

function updateProgress(){
  const done=completedTasks.size;
  document.getElementById('progressText').textContent = `${done} / ${TOTAL_TASKS} phần`;
  document.getElementById('progressBar').style.width = `${(done/TOTAL_TASKS)*100}%`;
}

function showCompletion(){
  fireConfetti();
  const banner=document.getElementById('completionBanner');
  banner.classList.remove('hidden'); banner.classList.add('show');
  let c=0,t=0; Object.values(scores).forEach(s=>{c+=s.correct; t+=s.total;});
  document.getElementById('finalScoreDisplay').textContent = `🎯 ${c} / ${t} câu đúng`;
}
function closeBanner(){ const b=document.getElementById('completionBanner'); b.classList.remove('show'); b.classList.add('hidden'); }
""" + confetti_js() + r"""

function renderMiniQuizzes(){
  Object.keys(DATA.miniQuizzes||{}).forEach(key=>{
    const wrap = document.getElementById('miniquiz-'+key);
    if(!wrap) return;
    wrap.innerHTML = DATA.miniQuizzes[key].map((q,i)=>`
      <div id="mqwrap_${key}_${i}">
        <p class="text-sm font-bold text-slate-800 mb-1.5">${i+1}. ${q.q}</p>
        <div class="grid sm:grid-cols-2 gap-2">${q.options.map((o,j)=>`<label class="option-label rounded-lg px-3 py-1.5 text-xs font-semibold" id="mq_${key}_${i}_${j}" onclick="answerMiniQuiz('${key}',${i},${j})"><span class="font-black text-emerald-700">${optionLetter(j)}.</span> ${o}</label>`).join('')}</div>
        <div class="mt-1 text-xs hidden bg-blue-50 border border-blue-200 rounded-lg px-2 py-1.5 text-blue-800" id="mq_fb_${key}_${i}"></div>
      </div>`).join('');
  });
}
const MINI_QUIZ_SCORE = {};
function answerMiniQuiz(key,i,j){
  const wrapEl = document.getElementById(`mqwrap_${key}_${i}`);
  if(wrapEl.dataset.answered) return;
  wrapEl.dataset.answered = '1';
  const q = DATA.miniQuizzes[key][i];
  const ok = j===q.answer;
  q.options.forEach((o,k)=>{
    const el=document.getElementById(`mq_${key}_${i}_${k}`);
    el.onclick=null;
    if(k===q.answer) el.classList.add('correct-opt');
    else if(k===j) el.classList.add('wrong-opt');
  });
  const fb=document.getElementById(`mq_fb_${key}_${i}`);
  fb.classList.remove('hidden');
  fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${optionLetter(q.answer)}. ${q.options[q.answer]}</b>`) + (q.explanation?`<br>💡 ${q.explanation}`:'') + (q.vi?`<br>📖 <i>${q.vi}</i>`:'');
  if(!MINI_QUIZ_SCORE[key]) MINI_QUIZ_SCORE[key] = {correct:0, answered:0};
  MINI_QUIZ_SCORE[key].answered++;
  if(ok) MINI_QUIZ_SCORE[key].correct++;
  const scoreEl = document.getElementById(`miniquiz-score-${key}`);
  if(scoreEl) scoreEl.textContent = `🏆 ${MINI_QUIZ_SCORE[key].correct}/${MINI_QUIZ_SCORE[key].answered} đã trả lời`;
}

buildNav();
buildMain();
updateProgress();
renderMiniQuizzes();
</script>
</body>
</html>
"""
    html = (html.replace("__BASE_HEAD__", BASE_HEAD)
                .replace("<title>Unit __UNIT__ - In-class Practice</title>",
                         f"<title>Unit {unit_no} - In-class Practice</title>")
                .replace("__UNIT__", str(unit_no))
                .replace("__TITLE__", title)
                .replace("__DATA_JSON__", data_json))
    return html
