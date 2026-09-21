#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
from engine.common_js import NORMALIZE_JS, google_font_import, BASE_HEAD, CONFETTI_CSS, confetti_js

def _chunk(lst, size):
    return [lst[i:i+size] for i in range(0, len(lst), size)]

def build_full_stage_list(data: dict, chunk_size=10):
    """Generic content → stage partition. Walks every category the schema
    defines, in a fixed pedagogical order, and slices any category longer
    than `chunk_size` into multiple same-titled stages ("Part 1", "Part
    2"...). This algorithm is identical for every unit — nothing here is
    Unit-1-specific, unlike the old hand-picked-index version."""
    stages = []

    def add_mcq_category(items, key_prefix, title, vi, emoji, id_prefix, tag_fn=None):
        chunks = _chunk(items, chunk_size)
        for ci, chunk in enumerate(chunks):
            part = f" ({ci*chunk_size+1}-{ci*chunk_size+len(chunk)})" if len(chunks) > 1 else ""
            out_items = []
            for i, q in enumerate(chunk):
                out_items.append(dict(id=f"{id_prefix}{ci*chunk_size+i+1}", type="mcq", q=q["q"],
                                       options=q["options"], answer=q["answer"],
                                       explanation=q.get("explanation"), vi=q.get("vi"),
                                       ipas=q.get("ipas"), vis=q.get("vis"), image=q.get("image")))
            stages.append(dict(key=f"{key_prefix}{ci}", title=title+part, emoji=emoji, vi=vi, items=out_items))

    add_mcq_category(data["pronunciation"], "pron", "Pronunciation", "Phát âm", "🔊", "PRON")
    add_mcq_category(data["stress"], "stress", "Stressed syllable", "Trọng âm", "🎯", "STR")
    add_mcq_category(data["mcq"], "mcq", "Vocabulary & Grammar", "Từ vựng & Ngữ pháp", "📚", "MCQ")

    wf_items = []
    for i, wf in enumerate(data["word_formation"]):
        wf_items.append(dict(id=f"WF{i+1}", type="fill", q=f"{wf['q']} {wf['hint']}",
                              answer=wf["answer"], explanation=wf.get("explanation"), vi=wf.get("vi")))
    stages.append(dict(key="wordform", title="Word Form", emoji="🔤", vi="Word Form", items=wf_items))

    for r in data["readings"]:
        items = []
        for i, q in enumerate(r["questions"]):
            items.append(dict(id=f"{r['key'].upper()}{i+1}", type="mcq", q=q["q"], options=q["options"],
                               answer=q["answer"], explanation=q.get("explanation"), vi=q.get("vi")))
        stages.append(dict(key=r["key"], title=r["title"], emoji="📖", vi="Đọc điền từ", items=items, passage=r["html"]))

    for t in data["true_false"]:
        items = []
        for i, q in enumerate(t["questions"]):
            items.append(dict(id=f"{t['key'].upper()}{i+1}", type="mcq", q=q["q"], options=q["options"],
                               answer=q["answer"], explanation=q.get("explanation"), vi=q.get("vi")))
        stages.append(dict(key=t["key"], title=t["title"], emoji="✅", vi="Đúng/Sai", items=items, passage=t["html"]))

    trans_chunks = _chunk(data["transformations"], chunk_size)
    for ci, chunk in enumerate(trans_chunks):
        items = []
        for i, t in enumerate(chunk):
            items.append(dict(id=f"TR{ci*chunk_size+i+1}", type="sentence", q=t["original"], starter=t["starter"],
                               answer=t["answer"], accepted=t.get("accepted"), explanation=t.get("explanation"),
                               vi=t.get("vi"), note=t.get("note")))
        label = f"Sentence Transformation" + (f" (Part {ci+1})" if len(trans_chunks) > 1 else "")
        stages.append(dict(key=f"transform{ci}", title=label, emoji="✍️", vi="Viết lại câu", items=items))

    final_items = []
    for di, d in enumerate(data["dictionary"]):
        for i, q in enumerate(d["questions"]):
            final_items.append(dict(id=f"DIC{di+1}_{i+1}", type="fill", q=f"[Từ điển \"{d['word']}\"] {q['q']}",
                                     answer=q["answer"], explanation=q.get("explanation"), vi=q.get("vi")))
    for i, p in enumerate(data["pictures"]):
        final_items.append(dict(id=f"PIC{i+1}", type="mcq", q=p["q"], image=p.get("image"), options=p["options"],
                                 answer=p["answer"], explanation=p.get("explanation"), vi=p.get("vi")))
    if final_items:
        stages.append(dict(key="final", title="Dictionary & Signs", emoji="⭐", vi="Từ điển & Biển báo", items=final_items))

    total = sum(len(s["items"]) for s in stages)
    return stages, total


def build(data: dict) -> str:
    stages, total = build_full_stage_list(data)
    unit_no = data["meta"]["unit"]
    title = data["meta"]["title"]
    data_json = json.dumps(dict(stages=stages, total=total), ensure_ascii=False)

    html = r"""<!DOCTYPE html>
<html lang="vi">
<head>
__BASE_HEAD__
<title>Unit __UNIT__ - Full Test</title>
<style>
  """ + google_font_import() + r"""
  * { box-sizing: border-box; }
  body { font-family:'Nunito',sans-serif; background:#fef2f2; }
  .hero-gradient{ background: linear-gradient(135deg, #7f1d1d 0%, #dc2626 55%, #f97316 100%); }
  .screen{ display:none; } .screen.active{ display:block; }
  .stage-card{ transition:.2s; cursor:pointer; }
  .stage-card:hover{ transform:translateY(-3px); box-shadow:0 10px 30px rgba(0,0,0,.12); }
  .option-label{ cursor:pointer; transition: all .18s; border:2px solid #e2e8f0; }
  .option-label:hover{ border-color:#dc2626; background:#fef2f2; }
  .option-label.selected{ border-color:#7f1d1d; background:#fee2e2; }
  .option-label.correct-opt{ border-color:#22c55e !important; background:#f0fdf4 !important; }
  .option-label.wrong-opt{ border-color:#ef4444 !important; background:#fef2f2 !important; }
  input.answer-input{ border:2px solid #cbd5e1; outline:none; background:#fff; }
  input.answer-input:focus{ border-color:#dc2626; }
  input.correct-input{ border-color:#22c55e !important; background:#f0fdf4; }
  input.wrong-input{ border-color:#ef4444 !important; background:#fef2f2; }
  .progress-dot{ width:7px;height:7px;border-radius:50%;background:#fecaca; }
  .progress-dot.done{ background:#dc2626; }
  """ + CONFETTI_CSS + r"""
  .badge-pill{ background:#fff7ed; border:1px solid #fed7aa; color:#9a3412; }
  #auditBanner{ display:none; }
  #auditBanner.show{ display:block; }
</style>
</head>
<body class="min-h-screen">
<div class="confetti-wrap" id="confettiWrap"></div>
<div id="auditBanner" class="bg-rose-600 text-white text-sm font-bold text-center py-2 px-4"></div>
<header class="hero-gradient text-white py-7 px-4 text-center shadow-xl">
  <p class="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Unit __UNIT__ · __TITLE__</p>
  <h1 class="font-['Baloo_2'] text-3xl md:text-5xl font-extrabold drop-shadow-lg">🏆 Full Unit Test</h1>
  <p class="mt-2 text-base opacity-90 font-semibold"><span id="stageCountHeader"></span> chặng · <span id="totalCountHeader"></span> câu — TOÀN BỘ nội dung Unit</p>
</header>

<main class="max-w-3xl mx-auto px-4 py-6 pb-20">

<section id="screen-home" class="screen active">
  <div class="grid grid-cols-2 gap-3 mb-4">
    <div class="bg-white rounded-2xl shadow-md p-4"><p class="text-xs text-slate-400 font-bold">TỔNG ĐIỂM XP</p><p class="text-2xl font-black text-red-700" id="xpDisplay">0 XP</p></div>
    <div class="bg-white rounded-2xl shadow-md p-4"><p class="text-xs text-slate-400 font-bold">STREAK</p><p class="text-2xl font-black text-orange-600" id="streakDisplay">🔥 0 ngày</p></div>
  </div>
  <div class="bg-white rounded-2xl shadow-md p-4 mb-4">
    <p class="text-xs text-slate-400 font-bold mb-1">TIẾN ĐỘ TOÀN BÀI (<span id="totalCount"></span> câu)</p>
    <div class="bg-slate-100 rounded-full h-3 overflow-hidden"><div id="overallBar" class="bg-gradient-to-r from-red-700 to-orange-500 h-3" style="width:0%"></div></div>
    <p class="text-xs text-slate-500 mt-1" id="overallText"></p>
  </div>
  <div id="badgesWrap" class="flex flex-wrap gap-2 mb-5"></div>
  <div id="stageGrid" class="grid sm:grid-cols-2 gap-4"></div>
  <button onclick="confirmReset()" class="mt-6 text-xs text-slate-400 underline">Reset toàn bộ tiến độ</button>
</section>

<section id="screen-play" class="screen">
  <div class="flex justify-between items-center mb-3">
    <button onclick="quitStage()" class="text-slate-400 text-sm"><i class="fa-solid fa-arrow-left mr-1"></i>Thoát</button>
    <div class="flex flex-wrap gap-1 max-w-[55%] justify-center" id="progressDots"></div>
    <span class="text-sm font-bold text-red-700" id="playCounter"></span>
  </div>
  <div id="playPassage" class="hidden bg-white border border-slate-200 rounded-xl p-4 mb-3 text-sm leading-relaxed text-slate-700"></div>
  <div class="bg-white rounded-2xl shadow-lg p-6" id="playCard"></div>
</section>

<section id="screen-result" class="screen">
  <div class="bg-white rounded-3xl shadow-xl p-8 text-center">
    <div class="text-6xl mb-3" id="resultEmoji">🎉</div>
    <h3 class="text-2xl font-extrabold text-red-800 mb-1" id="resultTitle"></h3>
    <p class="text-4xl font-black text-red-700 my-3" id="resultScore"></p>
    <p class="text-slate-500 mb-5" id="resultAccuracy"></p>
    <div class="flex flex-wrap justify-center gap-3">
      <button onclick="showReview(false)" class="bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-full text-sm">🔍 Xem lại tất cả</button>
      <button onclick="showReview(true)" id="reviewWrongBtn" class="hidden bg-rose-600 text-white font-bold px-5 py-2.5 rounded-full text-sm">❌ Xem câu sai</button>
      <button onclick="retryWrongInStage()" id="retryWrongBtn" class="hidden bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full text-sm">🔄 Làm lại câu sai</button>
      <button onclick="goHome()" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm">Về trang chủ</button>
    </div>
  </div>
  <div id="reviewWrap" class="mt-5 space-y-3"></div>
</section>

</main>

<script>
const STAGES_RAW = __DATA_JSON__;
const STAGES = STAGES_RAW.stages;
const TOTAL_EXPECTED = STAGES_RAW.total;
const STORE_KEY = 'gs_unit__UNIT___fulltest_v1';

(function validate(){
  const ids = [];
  let missingAnswer=0, missingExplanation=0;
  STAGES.forEach(s=>{
    s.items.forEach(it=>{
      ids.push(it.id);
      if(it.type==='mcq' && (it.answer===undefined || it.answer===null || it.answer<0 || it.answer>=it.options.length)) missingAnswer++;
      if((it.type==='fill'||it.type==='sentence') && !it.answer) missingAnswer++;
      if(!it.explanation) missingExplanation++;
    });
  });
  const dupSet = new Set(); let dupes=0;
  ids.forEach(id=>{ if(dupSet.has(id)) dupes++; dupSet.add(id); });
  const totalActual = ids.length;
  const problems = [];
  if(totalActual !== TOTAL_EXPECTED) problems.push(`Tổng số câu thực tế (${totalActual}) khác kỳ vọng (${TOTAL_EXPECTED})`);
  if(dupes>0) problems.push(`${dupes} ID bị trùng`);
  if(missingAnswer>0) problems.push(`${missingAnswer} câu thiếu đáp án hợp lệ`);
  if(missingExplanation>0) problems.push(`${missingExplanation} câu thiếu giải thích`);
  const banner = document.getElementById('auditBanner');
  if(problems.length){
    banner.classList.add('show');
    banner.textContent = '⚠️ Content audit: ' + problems.join(' · ');
    console.error('CONTENT AUDIT FAILED', problems);
  } else {
    console.log(`Content audit OK: ${totalActual}/${TOTAL_EXPECTED} câu, 0 lỗi.`);
  }
})();

function loadStore(){ try{ return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }catch(e){ return {}; } }
function saveStore(s){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(s)); }catch(e){} }
let STORE = Object.assign({xp:0, streak:0, lastPlay:null, badges:[], stageBest:{}}, loadStore());

function todayStr(){ return new Date().toISOString().slice(0,10); }
function bumpStreak(){
  const today = todayStr();
  if(STORE.lastPlay === today) return;
  const y = new Date(Date.now()-86400000).toISOString().slice(0,10);
  STORE.streak = (STORE.lastPlay===y) ? STORE.streak+1 : 1;
  STORE.lastPlay = today;
  saveStore(STORE);
}

""" + NORMALIZE_JS + r"""

function showScreen(id){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(id).classList.add('active'); window.scrollTo({top:0,behavior:'smooth'}); }

function renderHome(){
  document.getElementById('xpDisplay').textContent = `${STORE.xp} XP`;
  document.getElementById('streakDisplay').textContent = `🔥 ${STORE.streak} ngày`;
  document.getElementById('stageCountHeader').textContent = `${STAGES.length}`;
  document.getElementById('totalCountHeader').textContent = `${TOTAL_EXPECTED}`;
  document.getElementById('totalCount').textContent = `${TOTAL_EXPECTED}`;
  document.getElementById('badgesWrap').innerHTML = (STORE.badges||[]).map(b=>`<span class="badge-pill text-xs font-bold px-3 py-1 rounded-full">${b}</span>`).join('');
  let bestSum=0;
  STAGES.forEach(s=>{ const b=STORE.stageBest[s.key]; if(b!==undefined) bestSum+=b; });
  const pct = Math.round(bestSum/TOTAL_EXPECTED*100);
  document.getElementById('overallBar').style.width = pct+'%';
  document.getElementById('overallText').textContent = `${bestSum} / ${TOTAL_EXPECTED} câu (điểm tốt nhất mỗi chặng) — ${pct}%`;
  const grid = document.getElementById('stageGrid');
  grid.innerHTML = STAGES.map(st=>{
    const best = STORE.stageBest[st.key];
    return `<div class="stage-card bg-white rounded-2xl shadow-md p-5" onclick="startStage('${st.key}')">
      <p class="text-3xl mb-1">${st.emoji}</p>
      <p class="font-extrabold text-red-900">${st.title}</p>
      <p class="text-xs text-slate-400">${st.vi} · ${st.items.length} câu</p>
      ${best!==undefined ? `<p class="text-xs text-emerald-600 mt-2 font-bold">🏆 Điểm tốt nhất: ${best}/${st.items.length}</p>` : `<p class="text-xs text-slate-400 mt-2">Chưa làm</p>`}
    </div>`;
  }).join('');
}

let PLAY = null;
function startStage(key, itemsOverride){
  const st = STAGES.find(s=>s.key===key);
  const items = itemsOverride || shuffleArr(st.items);
  PLAY = { key, st, items, i:0, correct:0, wrongList:[], answers:[] };
  showScreen('screen-play');
  renderPlayItem();
}
function quitStage(){ showScreen('screen-home'); renderHome(); }
function goHome(){ showScreen('screen-home'); renderHome(); }

function renderDots(){
  const wrap = document.getElementById('progressDots');
  wrap.innerHTML = PLAY.items.map((_,i)=>`<span class="progress-dot ${i<PLAY.i?'done':''}"></span>`).join('');
}
function renderPlayItem(){
  renderDots();
  document.getElementById('playCounter').textContent = `${PLAY.i+1}/${PLAY.items.length}`;
  const it = PLAY.items[PLAY.i];
  const passageBox = document.getElementById('playPassage');
  if(PLAY.st.passage){ passageBox.classList.remove('hidden'); passageBox.innerHTML = PLAY.st.passage; } else { passageBox.classList.add('hidden'); passageBox.innerHTML=''; }
  const card = document.getElementById('playCard');
  let html = `<p class="font-bold text-slate-800 mb-4 text-lg">${it.q}</p>`;
  if(it.image) html = `<div class="mb-3">${it.image}</div>` + html;
  if(it.type==='mcq'){
    html += `<div class="grid gap-2" id="optWrap">` + it.options.map((o,j)=>`<label class="option-label rounded-xl px-4 py-3 text-sm font-semibold flex items-center gap-2" id="opt_${j}" onclick="pickMcq(${j})"><span class="font-black text-red-700">${optionLetter(j)}.</span> ${o}</label>`).join('') + `</div>`;
  } else if(it.type==='fill'){
    html += `<input type="text" id="fillInp" class="answer-input w-full px-4 py-3 rounded-xl text-base font-semibold" placeholder="Nhập đáp án..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter') submitFill()">
      <button onclick="submitFill()" class="mt-3 bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-sm">Kiểm tra</button>`;
  } else if(it.type==='sentence'){
    html += `<div class="flex items-center gap-3 flex-wrap"><span class="font-extrabold">${it.starter}</span>
      <input type="text" id="fillInp" class="answer-input flex-1 min-w-[180px] px-4 py-3 rounded-xl text-base font-semibold" placeholder="..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter') submitFill()"></div>
      <button onclick="submitFill()" class="mt-3 bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-sm">Kiểm tra</button>`;
  }
  html += `<div id="feedback" class="hidden mt-4 p-3 rounded-xl text-sm"></div>
    <button id="nextBtn" onclick="nextItem()" class="hidden mt-3 bg-gradient-to-r from-red-800 to-orange-500 text-white font-bold px-6 py-2.5 rounded-full text-sm">Câu tiếp theo →</button>`;
  card.innerHTML = html;
}
function pickMcq(j){
  const it = PLAY.items[PLAY.i];
  document.querySelectorAll('#optWrap .option-label').forEach(el=>el.classList.remove('selected'));
  document.getElementById(`opt_${j}`).classList.add('selected');
  const ok = j===it.answer;
  it.options.forEach((o,k)=>{ const el=document.getElementById(`opt_${k}`); if(k===it.answer) el.classList.add('correct-opt'); else if(k===j) el.classList.add('wrong-opt'); el.onclick=null; });
  finishAnswer(ok, `${optionLetter(it.answer)}. ${it.options[it.answer]}`);
}
function submitFill(){
  const it = PLAY.items[PLAY.i];
  const inp = document.getElementById('fillInp');
  const val = normalize(inp.value);
  const acc = (it.accepted||[it.answer]).map(normalize);
  const ok = val!=='' && acc.includes(val);
  inp.classList.add(ok?'correct-input':'wrong-input');
  inp.disabled = true;
  const btn = document.querySelector('#playCard button[onclick="submitFill()"]');
  if(btn) btn.classList.add('hidden');
  finishAnswer(ok, it.answer);
}
function finishAnswer(ok, answerLabel){
  const it = PLAY.items[PLAY.i];
  if(ok) PLAY.correct++; else PLAY.wrongList.push(PLAY.i);
  PLAY.answers.push({ok, item:it});
  const fb = document.getElementById('feedback');
  fb.classList.remove('hidden');
  fb.className = 'mt-4 p-3 rounded-xl text-sm ' + (ok? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-rose-50 border border-rose-200 text-rose-700');
  fb.innerHTML = (ok? '✅ Chính xác!' : `❌ Chưa đúng. Đáp án đúng: <b>${answerLabel}</b>`) + (it.explanation?`<br>💡 ${it.explanation}`:'') + (it.vi?`<br>📖 <i>${it.vi}</i>`:'') + (it.note?`<br>📐 <b>${it.note}</b>`:'');
  document.getElementById('nextBtn').classList.remove('hidden');
}
function nextItem(){
  PLAY.i++;
  if(PLAY.i < PLAY.items.length) renderPlayItem();
  else finishStage();
}
function finishStage(){
  bumpStreak();
  const st = PLAY.st;
  const total = PLAY.items.length;
  const pct = Math.round(PLAY.correct/total*100);
  STORE.xp += PLAY.correct*10 + (pct===100?30:0);
  const prevBest = STORE.stageBest[st.key];
  if(prevBest===undefined || PLAY.correct>prevBest) STORE.stageBest[st.key]=PLAY.correct;
  const newBadges=[];
  if(pct===100 && !STORE.badges.includes(`🏆 ${st.title} Perfect`)) newBadges.push(`🏆 ${st.title} Perfect`);
  if(pct>=80 && !STORE.badges.includes(`⭐ ${st.title} Mastered`)) newBadges.push(`⭐ ${st.title} Mastered`);
  const allDone = STAGES.every(s=>STORE.stageBest[s.key]!==undefined || s.key===st.key);
  if(allDone && !STORE.badges.includes('🎓 Unit Complete')) newBadges.push('🎓 Unit Complete');
  STORE.badges = (STORE.badges||[]).concat(newBadges);
  saveStore(STORE);

  showScreen('screen-result');
  document.getElementById('resultEmoji').textContent = pct===100?'🏆':pct>=80?'🌟':pct>=60?'👍':pct>=40?'💪':'📚';
  document.getElementById('resultTitle').textContent = `${st.emoji} ${st.title} — Hoàn thành!`;
  document.getElementById('resultScore').textContent = `${PLAY.correct} / ${total}`;
  document.getElementById('resultAccuracy').textContent = `Độ chính xác: ${pct}%` + (prevBest!==undefined?` · Lần trước: ${prevBest}/${total}`:'');
  document.getElementById('reviewWrongBtn').classList.toggle('hidden', PLAY.wrongList.length===0);
  document.getElementById('retryWrongBtn').classList.toggle('hidden', PLAY.wrongList.length===0);
  document.getElementById('reviewWrap').innerHTML='';
  if(pct>=60) fireConfetti();
}
function showReview(onlyWrong){
  const wrap = document.getElementById('reviewWrap');
  const list = onlyWrong ? PLAY.answers.filter(a=>!a.ok) : PLAY.answers;
  wrap.innerHTML = list.map(a=>{
    const it=a.item;
    const answerLabel = it.type==='mcq' ? `${optionLetter(it.answer)}. ${it.options[it.answer]}` : it.answer;
    return `<div class="bg-white rounded-xl shadow-sm p-4 ${a.ok?'border-l-4 border-emerald-400':'border-l-4 border-rose-400'}">
      <p class="font-bold text-slate-800 text-sm mb-1">${a.ok?'✅':'❌'} ${it.q}</p>
      <p class="text-sm text-slate-600">Đáp án đúng: <b>${answerLabel}</b></p>
      ${it.explanation?`<p class="text-xs text-blue-700 mt-1">💡 ${it.explanation}</p>`:''}
      ${it.vi?`<p class="text-xs text-slate-400 mt-1">📖 ${it.vi}</p>`:''}
      ${it.note?`<p class="text-xs text-violet-600 mt-1">📐 ${it.note}</p>`:''}
    </div>`;
  }).join('');
  wrap.scrollIntoView({behavior:'smooth'});
}
function retryWrongInStage(){
  if(!PLAY.wrongList.length) return;
  const items = PLAY.wrongList.map(i=>PLAY.items[i]);
  startStage(PLAY.key, items);
}

""" + confetti_js() + r"""
function confirmReset(){
  if(confirm('Xoá toàn bộ tiến độ, XP, huy hiệu? Hành động này không thể hoàn tác.')){
    localStorage.removeItem(STORE_KEY);
    STORE = {xp:0, streak:0, lastPlay:null, badges:[], stageBest:{}};
    renderHome();
  }
}

renderHome();
</script>
</body>
</html>
"""
    html = (html.replace("__BASE_HEAD__", BASE_HEAD)
                .replace("<title>Unit __UNIT__ - Full Test</title>", f"<title>Unit {unit_no} - Full Test</title>")
                .replace("__UNIT__", str(unit_no))
                .replace("__TITLE__", title)
                .replace("__DATA_JSON__", data_json))
    return html
