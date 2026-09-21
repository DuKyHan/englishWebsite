#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json, random
from engine.common_js import NORMALIZE_JS, tts_js, google_font_import, BASE_HEAD, VOICE_STATUS_CSS
from engine.generic_lessons import word_formation_guide_html

def derive_wf_quiz(word_formation, word_families, seed=42):
    """Auto-generates 3-4 option MCQs for each word_formation item, using
    OTHER forms from the SAME word family as distractors. This is the
    "engine derives it, no per-unit authoring" piece from the schema doc."""
    rnd = random.Random(seed)
    fam_by_base = {f["base"]: f for f in word_families}
    quiz = []
    for wf in word_formation:
        fam = fam_by_base.get(wf["family_base"])
        forms = [f["w"] for f in fam["forms"]] if fam else []
        distractors = [w for w in forms if w.lower() != wf["answer"].lower()]
        rnd.shuffle(distractors)
        distractors = distractors[:3]
        options = distractors + [wf["answer"]]
        rnd.shuffle(options)
        answer_idx = options.index(wf["answer"])
        quiz.append(dict(q=wf["q"], hint=wf["hint"], options=options, answer=answer_idx,
                          explanation=wf["explanation"], vi=wf["vi"]))
    return quiz

def derive_wf_pool(word_families):
    """Flattens every family's forms into one pool — used by the Listen &
    Choose, Matching, and Spelling Challenge modes so students practise
    across the WHOLE word-family set, not just the 10 exercise sentences."""
    pool = []
    for fam in word_families:
        for f in fam["forms"]:
            pool.append(dict(w=f["w"], pos=f["pos"], vi=f["vi"], base=fam["base"], emoji=fam.get("emoji", "🔤")))
    return pool

def build(data: dict) -> str:
    words = data["vocabulary"]
    families = data["word_families"]
    wf_items = [dict(q=w["q"], hint=w["hint"], answer=w["answer"], explanation=w["explanation"], vi=w["vi"])
                for w in data["word_formation"]]
    wf_quiz = derive_wf_quiz(data["word_formation"], families)
    wf_pool = derive_wf_pool(families)

    payload = dict(words=words, families=families, wf=wf_items, wfQuiz=wf_quiz, wfPool=wf_pool)
    data_json = json.dumps(payload, ensure_ascii=False)
    theory_wf = word_formation_guide_html()
    title = data["meta"]["title"]
    unit_no = data["meta"]["unit"]

    html = r"""<!DOCTYPE html>
<html lang="vi">
<head>
__BASE_HEAD__
<title>Unit __UNIT__ - Vocabulary</title>
<style>
  """ + google_font_import() + r"""
  * { box-sizing: border-box; }
  body { font-family:'Nunito',sans-serif; background:#f0fdf4; }
  .hero-gradient{ background: linear-gradient(135deg, #14532d 0%, #16a34a 55%, #4ade80 100%); }
  .tab-btn.active{ background: linear-gradient(135deg, #14532d, #16a34a); color:#fff; box-shadow:0 4px 14px rgba(20,83,45,.35); transform:translateY(-1px); }
  .tab-btn{ transition:.2s; }
  .page{ display:none; } .page.active{ display:block; }
  .flashcard{ perspective:1200px; }
  .flashcard-inner{ position:relative; transition: transform .5s; transform-style: preserve-3d; }
  .flashcard.flipped .flashcard-inner{ transform: rotateY(180deg); }
  .flashcard-face{ backface-visibility:hidden; }
  .flashcard-back{ position:absolute; inset:0; transform: rotateY(180deg); }
  .option-btn{ transition:.15s; border:2px solid #e2e8f0; cursor:pointer; }
  .option-btn:hover{ border-color:#16a34a; background:#f0fdf4; }
  .option-btn.correct{ border-color:#22c55e !important; background:#dcfce7 !important; }
  .option-btn.wrong{ border-color:#ef4444 !important; background:#fee2e2 !important; }
  .speak-btn.speaking{ animation: pulseSpeak .7s ease-in-out infinite; }
  @keyframes pulseSpeak{ 0%,100%{transform:scale(1);} 50%{transform:scale(1.18);} }
  .fam-card{ background:#fff7ed; border:1px solid #fed7aa; border-radius:1rem; padding:1rem; }
  table.border-collapse td, table.border-collapse th{ border:1px solid #e2e8f0; }
  input.answer-input{ border:2px solid #cbd5e1; outline:none; }
  input.answer-input:focus{ border-color:#16a34a; }
  input.correct-input{ border-color:#22c55e !important; background:#f0fdf4; }
  input.wrong-input{ border-color:#ef4444 !important; background:#fef2f2; }
  .emoji-badge{ font-size:1.6rem; line-height:1; }
  """ + VOICE_STATUS_CSS + r"""
</style>
</head>
<body class="min-h-screen">
<header class="hero-gradient text-white py-8 px-4 text-center shadow-xl">
  <p class="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Unit __UNIT__ · __TITLE__</p>
  <h1 class="font-['Baloo_2'] text-3xl md:text-5xl font-extrabold drop-shadow-lg">📖 Vocabulary &amp; Word Family</h1>
  <p class="mt-2 text-base md:text-lg opacity-90 font-semibold">Flashcard · Quiz · Word Family · Word Form Game</p>
  <p class="text-xs mt-2 opacity-80" id="voiceStatus"></p>
</header>

<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm px-3 py-2 overflow-x-auto">
  <div class="flex gap-2 min-w-max mx-auto w-fit" id="navWrap">
    <button class="tab-btn active text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage(0,this)"><i class="fa-solid fa-list mr-1"></i>Danh sách từ</button>
    <button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage(1,this)"><i class="fa-solid fa-clone mr-1"></i>Flashcards</button>
    <button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage(2,this)"><i class="fa-solid fa-gamepad mr-1"></i>Quiz</button>
    <button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage(3,this)"><i class="fa-solid fa-diagram-project mr-1"></i>Word Family &amp; Word Form</button>
  </div>
</nav>

<main class="max-w-4xl mx-auto px-4 py-6 pb-20">

<section id="page-0" class="page active">
  <input id="searchBox" type="text" placeholder="🔍 Tìm từ..." class="w-full mb-4 px-4 py-2.5 rounded-xl border-2 border-slate-200 outline-none focus:border-emerald-500" oninput="renderList()">
  <div id="listWrap" class="space-y-2"></div>
</section>

<section id="page-1" class="page">
  <div class="flex justify-between items-center mb-4">
    <span id="fcCounter" class="font-bold text-emerald-800"></span>
    <button onclick="shuffleCards()" class="text-xs font-bold bg-white border-2 border-slate-200 px-3 py-1.5 rounded-full"><i class="fa-solid fa-shuffle mr-1"></i>Xáo trộn</button>
  </div>
  <div class="flashcard w-full h-64 mx-auto cursor-pointer" id="flashcard" onclick="flipCard()">
    <div class="flashcard-inner w-full h-full relative">
      <div class="flashcard-face flashcard-front absolute inset-0 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 border-4 border-emerald-200">
        <p class="emoji-badge mb-1" id="fcEmoji"></p>
        <p id="fcWord" class="text-3xl font-black text-emerald-900"></p>
        <p id="fcIpa" class="text-slate-400 italic mt-1"></p>
        <p class="text-xs text-slate-400 mt-3">Chạm để xem nghĩa</p>
      </div>
      <div class="flashcard-face flashcard-back absolute inset-0 bg-emerald-700 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center p-6">
        <p class="emoji-badge mb-1" id="fcEmoji2"></p>
        <p id="fcVi" class="text-2xl font-extrabold text-center"></p>
        <p id="fcPos" class="opacity-80 mt-1"></p>
      </div>
    </div>
  </div>
  <div class="flex justify-center gap-3 mt-5">
    <button onclick="prevCard()" class="bg-white border-2 border-slate-200 font-bold px-5 py-2.5 rounded-full"><i class="fa-solid fa-arrow-left"></i></button>
    <button onclick="speakCurrent()" class="bg-emerald-600 text-white font-bold px-5 py-2.5 rounded-full"><i class="fa-solid fa-volume-high"></i></button>
    <button onclick="nextCard()" class="bg-white border-2 border-slate-200 font-bold px-5 py-2.5 rounded-full"><i class="fa-solid fa-arrow-right"></i></button>
  </div>
</section>

<section id="page-2" class="page">
  <div id="quizHome" class="grid sm:grid-cols-2 gap-3">
    <button onclick="startQuiz('en2vi')" class="bg-white rounded-2xl shadow-md p-5 text-left hover:shadow-lg transition"><p class="text-2xl mb-1">🇬🇧➡️🇻🇳</p><p class="font-extrabold text-emerald-900">Anh → Việt</p><p class="text-xs text-slate-500 mt-1">Chọn nghĩa đúng của từ tiếng Anh</p></button>
    <button onclick="startQuiz('vi2en')" class="bg-white rounded-2xl shadow-md p-5 text-left hover:shadow-lg transition"><p class="text-2xl mb-1">🇻🇳➡️🇬🇧</p><p class="font-extrabold text-emerald-900">Việt → Anh</p><p class="text-xs text-slate-500 mt-1">Chọn từ tiếng Anh đúng nghĩa</p></button>
    <button onclick="startQuiz('listen')" class="bg-white rounded-2xl shadow-md p-5 text-left hover:shadow-lg transition"><p class="text-2xl mb-1">🎧⌨️</p><p class="font-extrabold text-emerald-900">Nghe &amp; Gõ</p><p class="text-xs text-slate-500 mt-1">Nghe phát âm chuẩn rồi gõ lại từ</p></button>
    <button onclick="startQuiz('picword')" class="bg-white rounded-2xl shadow-md p-5 text-left hover:shadow-lg transition"><p class="text-2xl mb-1">🖼️➡️🔤</p><p class="font-extrabold text-emerald-900">Hình ảnh → Từ</p><p class="text-xs text-slate-500 mt-1">Nhìn hình đoán từ tiếng Anh</p></button>
  </div>
  <div id="quizPlay" class="hidden">
    <div class="flex justify-between text-sm font-bold text-emerald-800 mb-3">
      <span id="quizProgress"></span>
      <button onclick="quitQuiz()" class="text-slate-400"><i class="fa-solid fa-xmark"></i> Thoát</button>
    </div>
    <div class="bg-white rounded-2xl shadow-md p-6 text-center" id="quizCard"></div>
  </div>
  <div id="quizResult" class="hidden text-center bg-white rounded-2xl shadow-md p-8">
    <div class="text-5xl mb-2">🏆</div>
    <p class="text-2xl font-extrabold text-emerald-900" id="quizScoreText"></p>
    <div id="weakWordsBox" class="mt-4 text-left"></div>
    <div class="flex justify-center gap-3 mt-5">
      <button onclick="retryWeak()" id="retryWeakBtn" class="hidden bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full">🎯 Luyện lại từ sai</button>
      <button onclick="backToQuizHome()" class="bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-full">Về trang Quiz</button>
    </div>
  </div>
</section>

<section id="page-3" class="page">
  <div id="famWrap" class="grid sm:grid-cols-2 gap-4 mb-6"></div>
  __THEORY_WF__
  <div class="mt-6 mb-3">
    <h3 class="text-lg font-extrabold text-indigo-900 mb-2"><i class="fa-solid fa-pen mr-1"></i>Luyện tập Word Form</h3>
    <div class="flex flex-wrap gap-2">
      <button onclick="switchWfMode('fill')" id="wfModeFillBtn" class="text-xs font-bold px-3 py-1.5 rounded-full bg-indigo-900 text-white">✏️ Điền từ</button>
      <button onclick="switchWfMode('game')" id="wfModeGameBtn" class="text-xs font-bold px-3 py-1.5 rounded-full bg-white border-2 border-slate-200 text-slate-600">🎮 Trắc nghiệm</button>
      <button onclick="switchWfMode('listen')" id="wfModeListenBtn" class="text-xs font-bold px-3 py-1.5 rounded-full bg-white border-2 border-slate-200 text-slate-600">🎧 Nghe &amp; Chọn</button>
      <button onclick="switchWfMode('match')" id="wfModeMatchBtn" class="text-xs font-bold px-3 py-1.5 rounded-full bg-white border-2 border-slate-200 text-slate-600">🔗 Ghép cặp</button>
      <button onclick="switchWfMode('spell')" id="wfModeSpellBtn" class="text-xs font-bold px-3 py-1.5 rounded-full bg-white border-2 border-slate-200 text-slate-600">🔤 Đánh vần</button>
    </div>
  </div>
  <div id="wfFillMode">
    <div id="wfWrap" class="space-y-4"></div>
    <div class="flex gap-2 mt-4">
      <button onclick="checkWF()" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-5 py-2.5 rounded-full text-sm">Kiểm tra</button>
      <button onclick="resetWF()" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm">Làm lại</button>
      <span id="wfScore" class="hidden ml-auto self-center font-extrabold text-emerald-600 text-sm"></span>
    </div>
  </div>
  <div id="wfGameMode" class="hidden">
    <div id="wfGameHome" class="bg-white rounded-2xl shadow-md p-6 text-center">
      <p class="text-3xl mb-2">🎮</p>
      <p class="font-extrabold text-indigo-900 mb-2">Word Form Challenge</p>
      <p class="text-xs text-slate-500 mb-4">Trắc nghiệm chọn đúng dạng từ — càng nhanh càng nhiều điểm thưởng! Bấm 🔊 để nghe từng lựa chọn trước khi chọn.</p>
      <button onclick="startWfGame()" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-6 py-2.5 rounded-full text-sm">Bắt đầu chơi</button>
    </div>
    <div id="wfGamePlay" class="hidden">
      <div class="flex justify-between text-sm font-bold text-indigo-800 mb-3">
        <span id="wfGameProgress"></span>
        <span id="wfGameTimer">⏱️ <span id="wfGameSeconds">0</span>s</span>
      </div>
      <div class="bg-white rounded-2xl shadow-md p-6 text-center" id="wfGameCard"></div>
    </div>
    <div id="wfGameResult" class="hidden text-center bg-white rounded-2xl shadow-md p-8">
      <div class="text-5xl mb-2">🏆</div>
      <p class="text-2xl font-extrabold text-indigo-900" id="wfGameScoreText"></p>
      <p class="text-sm text-slate-500 mt-1" id="wfGameTimeText"></p>
      <button onclick="startWfGame()" class="mt-4 bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full text-sm">🔄 Chơi lại</button>
    </div>
  </div>
  <div id="wfListenMode" class="hidden">
    <div id="wfListenHome" class="bg-white rounded-2xl shadow-md p-6 text-center">
      <p class="text-3xl mb-2">🎧</p>
      <p class="font-extrabold text-indigo-900 mb-2">Nghe &amp; Chọn từ đúng</p>
      <p class="text-xs text-slate-500 mb-4">Nghe phát âm rồi chọn đúng từ trong 4 lựa chọn — luyện tai nghe cho cả bộ họ từ.</p>
      <button onclick="startWfListen()" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-6 py-2.5 rounded-full text-sm">Bắt đầu</button>
    </div>
    <div id="wfListenPlay" class="hidden">
      <p class="text-sm font-bold text-indigo-800 mb-3" id="wfListenProgress"></p>
      <div class="bg-white rounded-2xl shadow-md p-6 text-center" id="wfListenCard"></div>
    </div>
    <div id="wfListenResult" class="hidden text-center bg-white rounded-2xl shadow-md p-8">
      <div class="text-5xl mb-2">🏆</div>
      <p class="text-2xl font-extrabold text-indigo-900" id="wfListenScoreText"></p>
      <button onclick="startWfListen()" class="mt-4 bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full text-sm">🔄 Chơi lại</button>
    </div>
  </div>
  <div id="wfMatchMode" class="hidden">
    <div class="flex justify-between items-center mb-3">
      <p class="text-sm font-bold text-indigo-800" id="wfMatchProgress"></p>
      <div class="flex gap-2">
        <button onclick="speakMatchWords()" class="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-600 text-white"><i class="fa-solid fa-volume-high mr-1"></i>Nghe tất cả</button>
        <button onclick="startWfMatch()" class="text-xs font-bold px-3 py-1.5 rounded-full bg-white border-2 border-slate-200 text-slate-600">🔄 Nhóm khác</button>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div id="matchWordsCol" class="space-y-2"></div>
      <div id="matchMeaningsCol" class="space-y-2"></div>
    </div>
  </div>
  <div id="wfSpellMode" class="hidden">
    <div id="wfSpellHome" class="bg-white rounded-2xl shadow-md p-6 text-center">
      <p class="text-3xl mb-2">🔤</p>
      <p class="font-extrabold text-indigo-900 mb-2">Spelling Challenge</p>
      <p class="text-xs text-slate-500 mb-4">Nghe và xem nghĩa tiếng Việt, gõ đúng chính tả từ tiếng Anh.</p>
      <button onclick="startWfSpell()" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-6 py-2.5 rounded-full text-sm">Bắt đầu</button>
    </div>
    <div id="wfSpellPlay" class="hidden">
      <p class="text-sm font-bold text-indigo-800 mb-3" id="wfSpellProgress"></p>
      <div class="bg-white rounded-2xl shadow-md p-6 text-center" id="wfSpellCard"></div>
    </div>
    <div id="wfSpellResult" class="hidden text-center bg-white rounded-2xl shadow-md p-8">
      <div class="text-5xl mb-2">🏆</div>
      <p class="text-2xl font-extrabold text-indigo-900" id="wfSpellScoreText"></p>
      <div id="wfSpellWeakBox" class="mt-4 text-left"></div>
      <button onclick="startWfSpell()" class="mt-4 bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full text-sm">🔄 Chơi lại</button>
    </div>
  </div>
</section>

</main>

<script>
const DATA = __DATA_JSON__;
""" + NORMALIZE_JS + tts_js("voiceStatus") + r"""

function showPage(i, btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(`page-${i}`).classList.add('active');
  document.querySelectorAll('#navWrap .tab-btn').forEach(b=>{b.classList.remove('active'); b.classList.add('text-slate-600');});
  if(btn){ btn.classList.add('active'); btn.classList.remove('text-slate-600'); }
  window.scrollTo({top:0,behavior:'smooth'});
}

function renderList(){
  const q = normalize(document.getElementById('searchBox').value);
  const wrap = document.getElementById('listWrap');
  const items = DATA.words.filter(w => !q || normalize(w.w).includes(q) || normalize(w.vi).includes(q));
  wrap.innerHTML = items.map(w => `
    <div class="bg-white rounded-xl shadow-sm p-3 flex items-center gap-3">
      <span class="emoji-badge shrink-0">${w.emoji}</span>
      <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 font-black text-xs flex items-center justify-center shrink-0">${w.no}</span>
      <div class="flex-1 min-w-0">
        <p class="font-extrabold text-emerald-900">${w.w} <span class="text-xs font-normal text-slate-400">(${w.pos})</span></p>
        <p class="text-xs text-slate-400">${w.ipa}</p>
      </div>
      <p class="text-sm text-slate-600 max-w-[35%] text-right">${w.vi}</p>
      <button data-w="${w.w.replace(/"/g,'')}" onclick="speak(this.dataset.w,this)" class="speak-btn w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0"><i class="fa-solid fa-volume-high text-xs"></i></button>
    </div>`).join('');
}

let fcOrder = DATA.words.map((_,i)=>i);
let fcIdx = 0;
function renderCard(){
  const w = DATA.words[fcOrder[fcIdx]];
  document.getElementById('flashcard').classList.remove('flipped');
  document.getElementById('fcEmoji').textContent = w.emoji;
  document.getElementById('fcEmoji2').textContent = w.emoji;
  document.getElementById('fcWord').textContent = w.w;
  document.getElementById('fcIpa').textContent = w.ipa;
  document.getElementById('fcVi').textContent = w.vi;
  document.getElementById('fcPos').textContent = `(${w.pos})`;
  document.getElementById('fcCounter').textContent = `${fcIdx+1} / ${fcOrder.length}`;
}
function flipCard(){ document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard(){ fcIdx=(fcIdx+1)%fcOrder.length; renderCard(); }
function prevCard(){ fcIdx=(fcIdx-1+fcOrder.length)%fcOrder.length; renderCard(); }
function shuffleCards(){ fcOrder.sort(()=>Math.random()-0.5); fcIdx=0; renderCard(); }
function speakCurrent(){ const w=DATA.words[fcOrder[fcIdx]]; speak(w.w); }

let Q = { mode:null, items:[], i:0, correct:0, wrong:[] };
function buildQuizItems(){ return shuffleArr(DATA.words.map(w=>w)); }
function startQuiz(mode){
  Q = { mode, items: buildQuizItems(), i:0, correct:0, wrong:[] };
  document.getElementById('quizHome').classList.add('hidden');
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizPlay').classList.remove('hidden');
  renderQuizItem();
}
function quitQuiz(){ document.getElementById('quizPlay').classList.add('hidden'); document.getElementById('quizHome').classList.remove('hidden'); }
function backToQuizHome(){ document.getElementById('quizResult').classList.add('hidden'); document.getElementById('quizHome').classList.remove('hidden'); }
function pickDistractors(correctVal, key, n){
  const pool = DATA.words.filter(w=>w[key]!==correctVal).map(w=>w[key]);
  return shuffleArr(pool).slice(0,n);
}
function renderQuizItem(){
  const w = Q.items[Q.i];
  document.getElementById('quizProgress').textContent = `Câu ${Q.i+1} / ${Q.items.length} · Đúng: ${Q.correct}`;
  const card = document.getElementById('quizCard');
  if(Q.mode==='en2vi'){
    const opts = shuffleArr([w.vi, ...pickDistractors(w.vi,'vi',3)]);
    card.innerHTML = `<p class="emoji-badge mb-2">${w.emoji}</p><p class="text-2xl font-black text-emerald-900 mb-1">${w.w}</p><p class="text-slate-400 italic mb-4">${w.ipa}</p>
      <div class="grid sm:grid-cols-2 gap-2">${opts.map(o=>`<button class="option-btn rounded-xl px-3 py-2.5 text-sm font-semibold" onclick="answerQuiz(this,'${o.replace(/'/g,"\\'")}','${w.vi.replace(/'/g,"\\'")}')">${o}</button>`).join('')}</div>`;
  } else if(Q.mode==='vi2en'){
    const opts = shuffleArr([w.w, ...pickDistractors(w.w,'w',3)]);
    card.innerHTML = `<p class="text-2xl font-black text-emerald-900 mb-4">${w.vi}</p>
      <div class="grid sm:grid-cols-2 gap-2">${opts.map(o=>`<button class="option-btn rounded-xl px-3 py-2.5 text-sm font-semibold" onclick="answerQuiz(this,'${o.replace(/'/g,"\\'")}','${w.w.replace(/'/g,"\\'")}')">${o}</button>`).join('')}</div>`;
  } else if(Q.mode==='listen'){
    card.innerHTML = `<button onclick="speak('${w.w.replace(/'/g,"\\'")}',this)" class="speak-btn bg-emerald-600 text-white w-16 h-16 rounded-full text-2xl mb-4"><i class="fa-solid fa-volume-high"></i></button>
      <p class="text-xs text-slate-400 mb-3">Nghe rồi gõ lại từ (${w.vi})</p>
      <input id="listenInp" class="answer-input w-full max-w-xs mx-auto block px-3 py-2 rounded-lg text-center font-bold" placeholder="Gõ từ bạn nghe được..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter') submitListen('${w.w.replace(/'/g,"\\'")}')">
      <button onclick="submitListen('${w.w.replace(/'/g,"\\'")}')" class="mt-3 bg-emerald-700 text-white font-bold px-5 py-2 rounded-full text-sm">Kiểm tra</button>`;
    setTimeout(()=>speak(w.w),300);
  } else if(Q.mode==='picword'){
    const opts = shuffleArr([w.w, ...pickDistractors(w.w,'w',3)]);
    card.innerHTML = `<p class="text-7xl mb-4">${w.emoji}</p><p class="text-xs text-slate-400 mb-3">Từ này nghĩa là gì? (nhìn hình đoán từ tiếng Anh)</p>
      <div class="grid sm:grid-cols-2 gap-2">${opts.map(o=>`<button class="option-btn rounded-xl px-3 py-2.5 text-sm font-semibold" onclick="answerQuiz(this,'${o.replace(/'/g,"\\'")}','${w.w.replace(/'/g,"\\'")}')">${o}</button>`).join('')}</div>`;
  }
}
function answerQuiz(btn, chosen, correct){
  const ok = chosen===correct;
  document.querySelectorAll('#quizCard .option-btn').forEach(b=>{
    b.onclick=null;
    if(b.textContent===correct) b.classList.add('correct');
    else if(b===btn && !ok) b.classList.add('wrong');
  });
  if(ok) Q.correct++; else Q.wrong.push(Q.items[Q.i]);
  setTimeout(()=>{ Q.i++; if(Q.i<Q.items.length) renderQuizItem(); else finishQuiz(); }, 900);
}
function submitListen(correct){
  const inp = document.getElementById('listenInp');
  const ok = normalize(inp.value)===normalize(correct);
  inp.classList.add(ok?'correct-input':'wrong-input');
  if(ok) Q.correct++; else Q.wrong.push(Q.items[Q.i]);
  setTimeout(()=>{ Q.i++; if(Q.i<Q.items.length) renderQuizItem(); else finishQuiz(); }, 900);
}
function finishQuiz(){
  document.getElementById('quizPlay').classList.add('hidden');
  document.getElementById('quizResult').classList.remove('hidden');
  document.getElementById('quizScoreText').textContent = `${Q.correct} / ${Q.items.length} câu đúng`;
  const box = document.getElementById('weakWordsBox');
  const retryBtn = document.getElementById('retryWeakBtn');
  if(Q.wrong.length){
    box.innerHTML = `<p class="font-bold text-rose-600 text-sm mb-2">Từ cần ôn lại (${Q.wrong.length}):</p>` +
      Q.wrong.map(w=>`<div class="text-sm text-slate-600">${w.emoji} <b>${w.w}</b> — ${w.vi}</div>`).join('');
    retryBtn.classList.remove('hidden');
  } else { box.innerHTML = `<p class="text-emerald-700 font-bold">🎉 Xuất sắc! Không có từ nào sai.</p>`; retryBtn.classList.add('hidden'); }
}
function retryWeak(){
  const words = Q.wrong; const mode = Q.mode;
  Q = { mode, items: shuffleArr(words), i:0, correct:0, wrong:[] };
  document.getElementById('quizResult').classList.add('hidden');
  document.getElementById('quizPlay').classList.remove('hidden');
  renderQuizItem();
}

function renderFamilies(){
  const wrap = document.getElementById('famWrap');
  wrap.innerHTML = DATA.families.map(fam => `
    <div class="fam-card">
      <p class="font-extrabold text-amber-800 mb-2"><span class="emoji-badge">${fam.emoji}</span> ${fam.base} <span class="text-xs font-normal text-slate-500">(${fam.vi_base})</span></p>
      <div class="space-y-0.5">${fam.forms.map(f=>`<div class="text-sm text-slate-700 flex items-center gap-2"><b class="text-amber-700">${f.w}</b> <span class="text-xs text-slate-400">(${f.pos})</span><span class="flex-1">: ${f.vi}</span><button data-w="${f.w.replace(/"/g,'')}" onclick="speak(this.dataset.w,this)" class="speak-btn w-6 h-6 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 flex items-center justify-center shrink-0" title="Nghe phát âm"><i class="fa-solid fa-volume-high text-[10px]"></i></button></div>`).join('')}</div>
    </div>`).join('');
}

function renderWF(){
  const wrap = document.getElementById('wfWrap');
  wrap.innerHTML = DATA.wf.map((q,i)=>`
    <div class="task-card bg-white rounded-2xl shadow-md p-4">
      <p class="font-bold text-slate-800 mb-2"><span class="bg-slate-100 text-slate-600 text-xs font-black px-2 py-1 rounded-lg mr-2">${i+1}</span>${q.q} <span class="text-orange-700 font-black text-xs">${q.hint}</span>
        <button data-w="${q.hint.replace(/[()]/g,'')}" onclick="speak(this.dataset.w,this)" class="speak-btn inline-flex w-6 h-6 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 items-center justify-center ml-1 align-middle" title="Nghe gốc từ"><i class="fa-solid fa-volume-high text-[10px]"></i></button></p>
      <input type="text" id="wfInp_${i}" class="answer-input w-56 px-3 py-1.5 rounded-lg text-sm font-semibold" placeholder="Nhập đáp án..." autocomplete="off" spellcheck="false">
      <div class="mt-2 text-sm hidden bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-800" id="wfFb_${i}"></div>
    </div>`).join('');
}
function checkWF(){
  let correct=0;
  DATA.wf.forEach((q,i)=>{
    const inp=document.getElementById(`wfInp_${i}`);
    const ok = normalize(inp.value)===normalize(q.answer);
    inp.classList.remove('correct-input','wrong-input'); inp.classList.add(ok?'correct-input':'wrong-input');
    if(ok) correct++;
    const fb=document.getElementById(`wfFb_${i}`);
    fb.classList.remove('hidden');
    fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${q.answer}</b>`) + ` <button data-w="${q.answer.replace(/"/g,'')}" onclick="speak(this.dataset.w,this)" class="speak-btn inline-flex w-5 h-5 rounded-full bg-blue-200 text-blue-800 items-center justify-center align-middle" title="Nghe đáp án đúng"><i class="fa-solid fa-volume-high text-[9px]"></i></button><br>💡 ${q.explanation}<br>📖 <i>${q.vi}</i>`;
  });
  const scoreEl=document.getElementById('wfScore');
  scoreEl.classList.remove('hidden'); scoreEl.textContent = `🏆 ${correct}/${DATA.wf.length}`;
}
function resetWF(){
  DATA.wf.forEach((q,i)=>{
    document.getElementById(`wfInp_${i}`).value=''; document.getElementById(`wfInp_${i}`).classList.remove('correct-input','wrong-input');
    const fb=document.getElementById(`wfFb_${i}`); fb.classList.add('hidden'); fb.innerHTML='';
  });
  document.getElementById('wfScore').classList.add('hidden');
}
const WF_MODES = ['fill','game','listen','match','spell'];
function switchWfMode(mode){
  WF_MODES.forEach(m=>{
    document.getElementById(`wf${m[0].toUpperCase()+m.slice(1)}Mode`).classList.toggle('hidden', mode!==m);
    document.getElementById(`wfMode${m[0].toUpperCase()+m.slice(1)}Btn`).className = 'text-xs font-bold px-3 py-1.5 rounded-full ' + (mode===m?'bg-indigo-900 text-white':'bg-white border-2 border-slate-200 text-slate-600');
  });
  if(mode==='match' && !document.getElementById('matchWordsCol').children.length) startWfMatch();
}

let WFG = { items:[], i:0, correct:0, seconds:0, timer:null };
function startWfGame(){
  WFG = { items: shuffleArr(DATA.wfQuiz), i:0, correct:0, seconds:0, timer:null };
  document.getElementById('wfGameHome').classList.add('hidden');
  document.getElementById('wfGameResult').classList.add('hidden');
  document.getElementById('wfGamePlay').classList.remove('hidden');
  WFG.timer = setInterval(()=>{ WFG.seconds++; document.getElementById('wfGameSeconds').textContent=WFG.seconds; }, 1000);
  renderWfGameItem();
}
function renderWfGameItem(){
  document.getElementById('wfGameProgress').textContent = `Câu ${WFG.i+1}/${WFG.items.length} · Đúng: ${WFG.correct}`;
  const q = WFG.items[WFG.i];
  const card = document.getElementById('wfGameCard');
  card.innerHTML = `<p class="font-bold text-slate-800 mb-1">${q.q}</p><p class="text-orange-700 font-black text-xs mb-4">${q.hint}</p>
    <div class="grid sm:grid-cols-2 gap-2" id="wfGameOpts">${q.options.map((o,j)=>`<button class="option-btn rounded-xl px-3 py-2.5 text-sm font-semibold flex items-center justify-between gap-2" onclick="answerWfGame(${j})"><span>${o}</span><span data-w="${o.replace(/"/g,'')}" onclick="event.stopPropagation();speak(this.dataset.w,this)" class="speak-btn w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 flex items-center justify-center shrink-0"><i class="fa-solid fa-volume-high text-[10px]"></i></span></button>`).join('')}</div>
    <div id="wfGameFb" class="hidden mt-3 text-sm"></div>`;
}
function answerWfGame(j){
  const q = WFG.items[WFG.i];
  const ok = j===q.answer;
  document.querySelectorAll('#wfGameOpts .option-btn').forEach((b,k)=>{ b.onclick=null; if(k===q.answer) b.classList.add('correct'); else if(k===j) b.classList.add('wrong'); });
  if(ok) WFG.correct++;
  const fb=document.getElementById('wfGameFb'); fb.classList.remove('hidden');
  fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':'<span class="text-rose-600 font-bold">❌ Chưa đúng.</span>') + `<br>💡 ${q.explanation}<br>📖 <i>${q.vi}</i>`;
  setTimeout(()=>{ WFG.i++; if(WFG.i<WFG.items.length) renderWfGameItem(); else finishWfGame(); }, 1300);
}
function finishWfGame(){
  clearInterval(WFG.timer);
  document.getElementById('wfGamePlay').classList.add('hidden');
  document.getElementById('wfGameResult').classList.remove('hidden');
  const bonus = WFG.correct===WFG.items.length ? Math.max(0, 60-WFG.seconds) : 0;
  document.getElementById('wfGameScoreText').textContent = `${WFG.correct} / ${WFG.items.length} câu đúng`;
  document.getElementById('wfGameTimeText').textContent = `⏱️ Thời gian: ${WFG.seconds}s` + (bonus>0?` · 🎁 Điểm thưởng tốc độ: +${bonus}`:'');
}

// ---------- WORD FORM: LISTEN & CHOOSE (uses the full word-family pool) ----------
let WFL = { items:[], i:0, correct:0 };
function buildListenItems(){
  return shuffleArr(DATA.wfPool).slice(0, Math.min(10, DATA.wfPool.length)).map(w=>{
    const distractors = shuffleArr(DATA.wfPool.filter(x=>x.w.toLowerCase()!==w.w.toLowerCase())).slice(0,3).map(x=>x.w);
    const options = shuffleArr([w.w, ...distractors]);
    return { word:w, options, answer: options.indexOf(w.w) };
  });
}
function startWfListen(){
  WFL = { items: buildListenItems(), i:0, correct:0 };
  document.getElementById('wfListenHome').classList.add('hidden');
  document.getElementById('wfListenResult').classList.add('hidden');
  document.getElementById('wfListenPlay').classList.remove('hidden');
  renderWfListenItem();
}
function renderWfListenItem(){
  document.getElementById('wfListenProgress').textContent = `Câu ${WFL.i+1}/${WFL.items.length} · Đúng: ${WFL.correct}`;
  const it = WFL.items[WFL.i];
  const card = document.getElementById('wfListenCard');
  card.innerHTML = `<button onclick="speak('${it.word.w.replace(/'/g,"\\'")}',this)" class="speak-btn bg-indigo-700 text-white w-16 h-16 rounded-full text-2xl mb-4"><i class="fa-solid fa-volume-high"></i></button>
    <p class="text-xs text-slate-400 mb-3">Nghe rồi chọn đúng từ (${it.word.vi} — ${it.word.pos})</p>
    <div class="grid sm:grid-cols-2 gap-2" id="wfListenOpts">${it.options.map((o,j)=>`<button class="option-btn rounded-xl px-3 py-2.5 text-sm font-semibold" onclick="answerWfListen(${j})">${o}</button>`).join('')}</div>
    <div id="wfListenFb" class="hidden mt-3 text-sm"></div>`;
  setTimeout(()=>speak(it.word.w), 300);
}
function answerWfListen(j){
  const it = WFL.items[WFL.i];
  const ok = j===it.answer;
  document.querySelectorAll('#wfListenOpts .option-btn').forEach((b,k)=>{ b.onclick=null; if(k===it.answer) b.classList.add('correct'); else if(k===j) b.classList.add('wrong'); });
  if(ok) WFL.correct++;
  const fb=document.getElementById('wfListenFb'); fb.classList.remove('hidden');
  fb.innerHTML = ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${it.word.w}</b>`;
  setTimeout(()=>{ WFL.i++; if(WFL.i<WFL.items.length) renderWfListenItem(); else finishWfListen(); }, 1100);
}
function finishWfListen(){
  document.getElementById('wfListenPlay').classList.add('hidden');
  document.getElementById('wfListenResult').classList.remove('hidden');
  document.getElementById('wfListenScoreText').textContent = `${WFL.correct} / ${WFL.items.length} câu đúng`;
}

// ---------- WORD FORM: MATCHING (one family at a time) ----------
let WFM = { famIdx:0, pairs:[], selectedWord:null, selectedMeaning:null, solved:0 };
function startWfMatch(){
  WFM.famIdx = Math.floor(Math.random()*DATA.families.length);
  const fam = DATA.families[WFM.famIdx];
  WFM.pairs = fam.forms.map((f,i)=>({id:i, w:f.w, vi:f.vi}));
  WFM.selectedWord = null; WFM.selectedMeaning = null; WFM.solved = 0;
  document.getElementById('wfMatchProgress').textContent = `Nhóm: ${fam.base} (${fam.vi_base}) · Ghép đúng: 0/${WFM.pairs.length}`;
  const wordsShuffled = shuffleArr(WFM.pairs);
  const meaningsShuffled = shuffleArr(WFM.pairs);
  document.getElementById('matchWordsCol').innerHTML = wordsShuffled.map(p=>`<button class="option-btn w-full rounded-xl px-3 py-2.5 text-sm font-bold text-left flex items-center justify-between" id="mw_${p.id}" onclick="selectMatchWord(${p.id})"><span>${p.w}</span><span data-w="${p.w.replace(/"/g,'')}" onclick="event.stopPropagation();speak(this.dataset.w,this)" class="speak-btn w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0"><i class="fa-solid fa-volume-high text-[10px]"></i></span></button>`).join('');
  document.getElementById('matchMeaningsCol').innerHTML = meaningsShuffled.map(p=>`<button class="option-btn w-full rounded-xl px-3 py-2.5 text-sm text-left" id="mm_${p.id}" onclick="selectMatchMeaning(${p.id})">${p.vi}</button>`).join('');
}
function speakMatchWords(){ WFM.pairs.forEach((p,i)=>setTimeout(()=>speak(p.w), i*900)); }
function selectMatchWord(id){
  if(document.getElementById(`mw_${id}`).classList.contains('correct')) return;
  document.querySelectorAll('#matchWordsCol .option-btn').forEach(b=>b.classList.remove('selected'));
  document.getElementById(`mw_${id}`).classList.add('selected');
  WFM.selectedWord = id;
  tryMatch();
}
function selectMatchMeaning(id){
  if(document.getElementById(`mm_${id}`).classList.contains('correct')) return;
  document.querySelectorAll('#matchMeaningsCol .option-btn').forEach(b=>b.classList.remove('selected'));
  document.getElementById(`mm_${id}`).classList.add('selected');
  WFM.selectedMeaning = id;
  tryMatch();
}
function tryMatch(){
  if(WFM.selectedWord===null || WFM.selectedMeaning===null) return;
  const wEl = document.getElementById(`mw_${WFM.selectedWord}`);
  const mEl = document.getElementById(`mm_${WFM.selectedMeaning}`);
  if(WFM.selectedWord===WFM.selectedMeaning){
    wEl.classList.remove('selected'); wEl.classList.add('correct'); wEl.onclick=null;
    mEl.classList.remove('selected'); mEl.classList.add('correct'); mEl.onclick=null;
    WFM.solved++;
    const fam = DATA.families[WFM.famIdx];
    document.getElementById('wfMatchProgress').textContent = `Nhóm: ${fam.base} (${fam.vi_base}) · Ghép đúng: ${WFM.solved}/${WFM.pairs.length}`;
    if(WFM.solved===WFM.pairs.length){ setTimeout(()=>{ fireConfettiIfAvailable(); }, 200); }
  } else {
    wEl.classList.add('wrong'); mEl.classList.add('wrong');
    setTimeout(()=>{ wEl.classList.remove('selected','wrong'); mEl.classList.remove('selected','wrong'); }, 700);
  }
  WFM.selectedWord = null; WFM.selectedMeaning = null;
}
function fireConfettiIfAvailable(){ if(typeof fireConfetti==='function') fireConfetti(); }

// ---------- WORD FORM: SPELLING CHALLENGE (uses the full word-family pool) ----------
let WFS = { items:[], i:0, correct:0, wrong:[] };
function startWfSpell(){
  WFS = { items: shuffleArr(DATA.wfPool).slice(0, Math.min(10, DATA.wfPool.length)), i:0, correct:0, wrong:[] };
  document.getElementById('wfSpellHome').classList.add('hidden');
  document.getElementById('wfSpellResult').classList.add('hidden');
  document.getElementById('wfSpellPlay').classList.remove('hidden');
  renderWfSpellItem();
}
function renderWfSpellItem(){
  document.getElementById('wfSpellProgress').textContent = `Câu ${WFS.i+1}/${WFS.items.length} · Đúng: ${WFS.correct}`;
  const it = WFS.items[WFS.i];
  const card = document.getElementById('wfSpellCard');
  card.innerHTML = `<button onclick="speak('${it.w.replace(/'/g,"\\'")}',this)" class="speak-btn bg-indigo-700 text-white w-14 h-14 rounded-full text-xl mb-3"><i class="fa-solid fa-volume-high"></i></button>
    <p class="text-lg font-extrabold text-indigo-900 mb-1">${it.vi}</p>
    <p class="text-xs text-slate-400 mb-3">(${it.pos}) — nghe phát âm rồi gõ đúng chính tả</p>
    <input id="spellInp" class="answer-input w-full max-w-xs mx-auto block px-3 py-2 rounded-lg text-center font-bold" placeholder="Gõ từ tiếng Anh..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter') submitSpell()">
    <button onclick="submitSpell()" class="mt-3 bg-indigo-700 text-white font-bold px-5 py-2 rounded-full text-sm">Kiểm tra</button>
    <div id="wfSpellFb" class="hidden mt-3 text-sm"></div>`;
}
function submitSpell(){
  const it = WFS.items[WFS.i];
  const inp = document.getElementById('spellInp');
  const ok = normalize(inp.value)===normalize(it.w);
  inp.classList.add(ok?'correct-input':'wrong-input');
  inp.disabled = true;
  document.querySelector('#wfSpellCard button[onclick="submitSpell()"]').classList.add('hidden');
  if(ok) WFS.correct++; else WFS.wrong.push(it);
  const fb=document.getElementById('wfSpellFb'); fb.classList.remove('hidden');
  fb.innerHTML = ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${it.w}</b>`;
  setTimeout(()=>{ WFS.i++; if(WFS.i<WFS.items.length) renderWfSpellItem(); else finishWfSpell(); }, 1200);
}
function finishWfSpell(){
  document.getElementById('wfSpellPlay').classList.add('hidden');
  document.getElementById('wfSpellResult').classList.remove('hidden');
  document.getElementById('wfSpellScoreText').textContent = `${WFS.correct} / ${WFS.items.length} câu đúng`;
  const box = document.getElementById('wfSpellWeakBox');
  box.innerHTML = WFS.wrong.length
    ? `<p class="font-bold text-rose-600 text-sm mb-2">Từ cần ôn lại chính tả:</p>` + WFS.wrong.map(w=>`<div class="text-sm text-slate-600">${w.emoji} <b>${w.w}</b> — ${w.vi}</div>`).join('')
    : `<p class="text-emerald-700 font-bold">🎉 Xuất sắc! Không có từ nào sai.</p>`;
}

renderList();
renderCard();
renderFamilies();
renderWF();
</script>
</body>
</html>
"""
    html = (html.replace("__BASE_HEAD__", BASE_HEAD)
                .replace("<title>Unit __UNIT__ - Vocabulary</title>", f"<title>Unit {unit_no} - Vocabulary</title>")
                .replace("__UNIT__", str(unit_no))
                .replace("__TITLE__", title)
                .replace("__THEORY_WF__", theory_wf)
                .replace("__DATA_JSON__", data_json))
    return html
