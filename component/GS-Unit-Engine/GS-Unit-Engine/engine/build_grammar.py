#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
from engine.common_js import NORMALIZE_JS, google_font_import, BASE_HEAD
from engine.generic_lessons import sentence_writing_method_html

def derive_test_mcq(mcq, min_count=8):
    """Prefer items tagged 'grammar'; top up with 'mixed' if too few."""
    grammar = [q for q in mcq if "grammar" in q.get("tags", [])]
    if len(grammar) >= min_count:
        return grammar[:12]
    mixed = [q for q in mcq if "mixed" in q.get("tags", []) and q not in grammar]
    return (grammar + mixed)[:12]

def group_transformations_by_dang(transformations):
    """Generic grouping: whatever distinct `dang` labels appear, in the
    order they first appear — works for 1, 2, or N groups per unit."""
    order = []
    groups = {}
    for t in transformations:
        d = t.get("dang", "Practice")
        if d not in groups:
            groups[d] = []
            order.append(d)
        groups[d].append(t)
    return [(d, groups[d]) for d in order]

def build(data: dict) -> str:
    unit_no = data["meta"]["unit"]
    title = data["meta"]["title"]
    lesson_html = data["grammar_lesson_html"] + sentence_writing_method_html()

    dang_groups = group_transformations_by_dang(data["transformations"])
    test_mcq = derive_test_mcq(data["mcq"])
    test_transform = data["transformations"]

    DATA = dict(dangGroups=[dict(label=label, items=items) for label, items in dang_groups],
                test_mcq=test_mcq, test_transform=test_transform,
                comprehension=data["comprehension_quiz"], dictionary=data["dictionary"])
    data_json = json.dumps(DATA, ensure_ascii=False)

    # Build nav + page markup for N dang groups dynamically
    dang_nav_btns = "".join(
        f'<button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage(\'dang{i}\',this)"><i class="fa-solid fa-{i+1} mr-1"></i>{label}</button>'
        for i, (label, _) in enumerate(dang_groups)
    )
    dang_pages = "".join(f"""
<section id="page-dang{i}" class="page">
  <p class="text-sm text-slate-500 italic mb-4">{label}. Mỗi câu mẫu có sẵn hướng dẫn công thức; làm xong câu mẫu rồi luyện thêm các câu cùng dạng bên dưới.</p>
  <div id="dangWrap{i}" class="space-y-5"></div>
  <div class="flex gap-2 mt-5">
    <button onclick="checkGroup('dangWrap{i}')" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-5 py-2.5 rounded-full text-sm">Kiểm tra tất cả</button>
    <button onclick="resetGroup('dangWrap{i}')" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm">Làm lại</button>
    <span id="score-dangWrap{i}" class="hidden ml-auto self-center font-extrabold text-emerald-600 text-sm"></span>
  </div>
</section>""" for i, (label, _) in enumerate(dang_groups))
    dang_render_calls = "".join(f"renderDang('dangWrap{i}', DATA.dangGroups[{i}].items, 'd{i}');\n" for i in range(len(dang_groups)))

    html = r"""<!DOCTYPE html>
<html lang="vi">
<head>
__BASE_HEAD__
<title>Unit __UNIT__ - Grammar</title>
<style>
  """ + google_font_import() + r"""
  * { box-sizing: border-box; }
  body { font-family:'Nunito',sans-serif; background:#eef2ff; }
  .hero-gradient{ background: linear-gradient(135deg, #312e81 0%, #4f46e5 55%, #818cf8 100%); }
  .tab-btn.active{ background: linear-gradient(135deg, #312e81, #4f46e5); color:#fff; box-shadow:0 4px 14px rgba(49,46,129,.35); transform:translateY(-1px); }
  .tab-btn{ transition:.2s; }
  .page{ display:none; } .page.active{ display:block; }
  table.border-collapse td, table.border-collapse th{ border:1px solid #e2e8f0; }
  input.answer-input{ border:2px solid #cbd5e1; outline:none; background:#fff; }
  input.answer-input:focus{ border-color:#4f46e5; }
  input.correct-input{ border-color:#22c55e !important; background:#f0fdf4; }
  input.wrong-input{ border-color:#ef4444 !important; background:#fef2f2; }
  .group-card{ background:#fff; border-radius:1.25rem; box-shadow:0 4px 20px rgba(0,0,0,.06); padding:1.25rem; }
  .practice-row{ border-top:1px dashed #e2e8f0; padding-top:.6rem; margin-top:.6rem; }
  .option-label{ cursor:pointer; transition: all .18s; border:2px solid #e2e8f0; }
  .option-label:hover{ border-color:#4f46e5; background:#eef2ff; }
  .option-label.selected{ border-color:#312e81; background:#e0e7ff; }
  .option-label.correct-opt{ border-color:#22c55e !important; background:#f0fdf4 !important; }
  .option-label.wrong-opt{ border-color:#ef4444 !important; background:#fef2f2 !important; }
  .dict-box{ background:#fef9c3; border:1px solid #fde68a; border-radius:1rem; padding:1rem 1.25rem; font-size:.9rem; color:#334155; }
</style>
</head>
<body class="min-h-screen">
<header class="hero-gradient text-white py-8 px-4 text-center shadow-xl">
  <p class="text-sm font-bold uppercase tracking-widest opacity-80 mb-1">Unit __UNIT__ · __TITLE__</p>
  <h1 class="font-['Baloo_2'] text-3xl md:text-5xl font-extrabold drop-shadow-lg">✍️ Grammar &amp; Sentence Writing</h1>
  <p class="mt-2 text-base md:text-lg opacity-90 font-semibold">Lý thuyết (có dịch) · Trắc nghiệm hiểu bài · Viết câu · Từ điển · Test</p>
</header>

<nav class="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm px-3 py-2 overflow-x-auto">
  <div class="flex gap-2 min-w-max mx-auto w-fit" id="navWrap">
    <button class="tab-btn active text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage('lesson',this)"><i class="fa-solid fa-chalkboard mr-1"></i>Lý thuyết</button>
    <button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage('comp',this)"><i class="fa-solid fa-brain mr-1"></i>Trắc nghiệm hiểu bài</button>
    __DANG_NAV__
    <button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage('dict',this)"><i class="fa-solid fa-book-bookmark mr-1"></i>Từ điển</button>
    <button class="tab-btn text-sm font-bold px-4 py-2 rounded-full text-slate-600" onclick="showPage('test',this)"><i class="fa-solid fa-graduation-cap mr-1"></i>Test tổng hợp</button>
  </div>
</nav>

<main class="max-w-4xl mx-auto px-4 py-6 pb-20">

<section id="page-lesson" class="page active">__LESSON_HTML__</section>

<section id="page-comp" class="page">
  <p class="text-sm text-slate-500 italic mb-4">Trắc nghiệm kiểm tra mức độ HIỂU quy tắc ngữ pháp (không chỉ áp dụng máy móc). Chọn đáp án để xem giải thích ngay.</p>
  <div id="compWrap" class="space-y-4"></div>
  <div class="flex gap-2 mt-5">
    <span id="compScore" class="ml-auto self-center font-extrabold text-emerald-600 text-sm"></span>
  </div>
</section>

__DANG_PAGES__

<section id="page-dict" class="page">
  <p class="text-sm text-slate-500 italic mb-4">Tra từ điển rồi hoàn thành câu — cách làm dạng bài dựa vào mục từ điển (dictionary-based cloze).</p>
  <div id="dictWrap" class="space-y-5"></div>
  <div class="flex gap-2 mt-5">
    <button onclick="checkDict()" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-5 py-2.5 rounded-full text-sm">Kiểm tra</button>
    <button onclick="resetDict()" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm">Làm lại</button>
    <span id="dictScore" class="hidden ml-auto self-center font-extrabold text-emerald-600 text-sm"></span>
  </div>
</section>

<section id="page-test" class="page">
  <p class="text-sm text-slate-500 italic mb-4">Trắc nghiệm + viết lại câu. Đáp án được giữ kín cho đến khi bạn nhấn "Nộp bài".</p>
  <div id="testWrap" class="space-y-4"></div>
  <div class="flex gap-2 mt-5">
    <button onclick="submitTest()" class="bg-gradient-to-r from-indigo-900 to-pink-600 text-white font-bold px-6 py-3 rounded-full text-sm">📝 Nộp bài</button>
    <button onclick="resetTest()" class="bg-white border-2 border-slate-200 text-slate-600 font-bold px-5 py-2.5 rounded-full text-sm">Làm lại</button>
  </div>
  <div id="testResult" class="hidden mt-5 bg-white rounded-2xl shadow-md p-6 text-center">
    <div class="text-5xl mb-2">🏆</div>
    <p class="text-2xl font-extrabold text-indigo-900" id="testScoreText"></p>
    <button onclick="retryTestWrong()" id="retryTestBtn" class="hidden mt-4 bg-amber-500 text-white font-bold px-5 py-2.5 rounded-full">🎯 Làm lại các câu sai</button>
  </div>
</section>

</main>

<script>
const DATA = __DATA_JSON__;
""" + NORMALIZE_JS + r"""
function copyNote(btn){ const t=btn.dataset.copy; navigator.clipboard && navigator.clipboard.writeText(t).then(()=>{ btn.innerHTML='<i class="fa-solid fa-check"></i>'; setTimeout(()=>btn.innerHTML='<i class="fa-solid fa-copy"></i>',1200); }); }

function showPage(id, btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(`page-${id}`).classList.add('active');
  document.querySelectorAll('#navWrap .tab-btn').forEach(b=>{b.classList.remove('active'); b.classList.add('text-slate-600');});
  if(btn){ btn.classList.add('active'); btn.classList.remove('text-slate-600'); }
  window.scrollTo({top:0,behavior:'smooth'});
}

let compScore=0, compAnswered=0;
function renderComprehension(){
  const wrap = document.getElementById('compWrap');
  wrap.innerHTML = DATA.comprehension.map((q,i)=>`
    <div class="group-card" id="comp_${i}">
      <p class="font-bold text-slate-800 mb-2">${q.q}</p>
      <div class="grid sm:grid-cols-2 gap-2">${q.options.map((o,j)=>`<label class="option-label rounded-xl px-3 py-2 text-sm font-semibold flex items-center gap-2" id="comp_${i}_${j}" onclick="answerComp(${i},${j})"><span class="font-black text-indigo-700">${optionLetter(j)}.</span> ${o}</label>`).join('')}</div>
      <div class="mt-2 text-sm hidden bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-800" id="comp_fb_${i}"></div>
    </div>`).join('');
}
function answerComp(i,j){
  const q = DATA.comprehension[i];
  if(document.getElementById(`comp_${i}`).dataset.answered) return;
  document.getElementById(`comp_${i}`).dataset.answered='1';
  const ok = j===q.answer;
  q.options.forEach((o,k)=>{ const el=document.getElementById(`comp_${i}_${k}`); if(k===q.answer) el.classList.add('correct-opt'); else if(k===j) el.classList.add('wrong-opt'); el.onclick=null; });
  const fb=document.getElementById(`comp_fb_${i}`); fb.classList.remove('hidden');
  fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án đúng: <b>${optionLetter(q.answer)}. ${q.options[q.answer]}</b>`) + `<br>💡 ${q.explanation}<br>📖 <i>${q.vi}</i>`;
  compAnswered++; if(ok) compScore++;
  document.getElementById('compScore').textContent = compAnswered ? `🏆 ${compScore}/${compAnswered} đã trả lời` : '';
}

function sentenceRow(item, id, isModel){
  return `<div class="${isModel?'':'practice-row'}">
    <p class="text-slate-700 text-sm mb-1.5">${isModel?'<span class=\"font-black text-indigo-700\">Câu mẫu:</span> ':'<span class=\"font-black text-slate-400\">Luyện thêm:</span> '}${item.original}</p>
    <div class="flex items-center gap-3 w-full flex-wrap">
      <span class="text-slate-800 font-extrabold text-base whitespace-nowrap">${item.starter}</span>
      <input type="text" id="${id}" class="answer-input flex-1 min-w-[180px] px-3 py-2 rounded-lg text-sm font-semibold" placeholder="..." autocomplete="off" spellcheck="false" oninput="gradeSentenceInput('${id}')">
    </div>
    <div class="explanation-box mt-1.5 text-sm hidden bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-800" id="fb_${id}"></div>
  </div>`;
}
const SENT_ITEMS = {};
function registerItem(id, item){ SENT_ITEMS[id] = item; }
function renderDang(wrapId, items, prefix){
  const wrap = document.getElementById(wrapId);
  wrap.innerHTML = items.map((t,gi)=>{
    const modelId = `${prefix}_${gi}_m`;
    registerItem(modelId, t);
    let html = `<div class="group-card">
      <p class="text-xs font-bold text-indigo-400 mb-2">Câu ${t.q}</p>
      ${sentenceRow(t, modelId, true)}
      <div class="mt-1 text-xs text-violet-600">📐 Công thức: <b>${t.note}</b></div>`;
    (t.extra_practice||[]).forEach((e,ei)=>{
      const exId = `${prefix}_${gi}_e${ei}`;
      const exItem = Object.assign({}, e, {explanation: t.explanation, note: t.note});
      registerItem(exId, exItem);
      html += sentenceRow(exItem, exId, false);
    });
    html += `</div>`;
    return html;
  }).join('');
}
function gradeSentenceInput(id){
  const item = SENT_ITEMS[id];
  const inp = document.getElementById(id);
  const fb = document.getElementById('fb_'+id);
  if(!inp || !fb) return;
  const raw = inp.value.trim();
  if(raw===''){ inp.classList.remove('correct-input','wrong-input'); fb.classList.add('hidden'); fb.innerHTML=''; return; }
  const val = normalize(inp.value);
  const acc = (item.accepted || [item.answer]).map(normalize);
  const ok = acc.includes(val);
  inp.classList.remove('correct-input','wrong-input'); inp.classList.add(ok?'correct-input':'wrong-input');
  fb.classList.remove('hidden');
  fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án đúng: <b>${item.answer}</b>`) + `<br>💡 ${item.explanation}` + (item.vi?`<br>📖 <i>${item.vi}</i>`:'');
}
function checkGroup(wrapId){
  const prefix = wrapId.replace('Wrap','').match(/d\d+/)[0]+'_';
  const ids = Object.keys(SENT_ITEMS).filter(id=>id.startsWith(prefix));
  let correct=0;
  ids.forEach(id=>{
    const item=SENT_ITEMS[id]; const inp=document.getElementById(id); const fb=document.getElementById('fb_'+id);
    const val=normalize(inp.value); const acc=(item.accepted||[item.answer]).map(normalize);
    const ok = val!=='' && acc.includes(val);
    inp.classList.remove('correct-input','wrong-input'); inp.classList.add(ok?'correct-input':'wrong-input');
    fb.classList.remove('hidden');
    fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án đúng: <b>${item.answer}</b>`) + `<br>💡 ${item.explanation}` + (item.vi?`<br>📖 <i>${item.vi}</i>`:'');
    if(ok) correct++;
  });
  const scoreEl=document.getElementById('score-'+wrapId);
  scoreEl.classList.remove('hidden'); scoreEl.textContent = `🏆 ${correct}/${ids.length}`;
}
function resetGroup(wrapId){
  const prefix = wrapId.replace('Wrap','').match(/d\d+/)[0]+'_';
  const ids = Object.keys(SENT_ITEMS).filter(id=>id.startsWith(prefix));
  ids.forEach(id=>{ document.getElementById(id).value=''; document.getElementById(id).classList.remove('correct-input','wrong-input'); const fb=document.getElementById('fb_'+id); fb.classList.add('hidden'); fb.innerHTML=''; });
  document.getElementById('score-'+wrapId).classList.add('hidden');
}

function renderDictEntry(d, prefix){
  const senses = d.senses.map(x=>`<p class="mb-1">✱ ${x.def}</p>${(x.examples||[]).map(e=>`<p class="ml-4 italic text-slate-600">• ${e}</p>`).join('')}`).join('');
  let html = `<div class="group-card">
    <div class="dict-box mb-3"><p class="font-extrabold text-amber-800 mb-1"><i class="fa-solid fa-book-bookmark mr-1"></i>${d.word} <span class="font-normal italic">${d.ipa}</span> <span class="font-normal">(${d.pos})</span></p>${senses}<p class="mt-2 pt-2 border-t border-amber-300 text-slate-600">${d.vi}</p></div>`;
  d.questions.forEach((q,i)=>{
    const id = `${prefix}_${i}`;
    registerItem(id, q);
    html += `<div class="mb-3"><p class="text-sm text-slate-700 mb-1.5">${q.q}</p>
      <input type="text" id="${id}" class="answer-input w-64 px-3 py-1.5 rounded-lg text-sm font-semibold" placeholder="Nhập đáp án..." autocomplete="off" spellcheck="false">
      <div class="mt-1 text-sm hidden bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-800" id="fb_${id}"></div>
    </div>`;
  });
  html += `</div>`;
  return html;
}
function renderDictTab(){
  document.getElementById('dictWrap').innerHTML = DATA.dictionary.map((d,i)=>renderDictEntry(d,'dic'+i)).join('');
}
function checkDict(){
  const ids = Object.keys(SENT_ITEMS).filter(id=>/^dic\d+_/.test(id));
  let correct=0;
  ids.forEach(id=>{
    const item=SENT_ITEMS[id]; const inp=document.getElementById(id); const fb=document.getElementById('fb_'+id);
    const val=normalize(inp.value); const ok = val!=='' && normalize(item.answer)===val;
    inp.classList.remove('correct-input','wrong-input'); inp.classList.add(ok?'correct-input':'wrong-input');
    fb.classList.remove('hidden');
    fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${item.answer}</b>`) + `<br>💡 ${item.explanation}<br>📖 <i>${item.vi}</i>`;
    if(ok) correct++;
  });
  const scoreEl=document.getElementById('dictScore'); scoreEl.classList.remove('hidden'); scoreEl.textContent = `🏆 ${correct}/${ids.length}`;
}
function resetDict(){
  const ids = Object.keys(SENT_ITEMS).filter(id=>/^dic\d+_/.test(id));
  ids.forEach(id=>{ document.getElementById(id).value=''; document.getElementById(id).classList.remove('correct-input','wrong-input'); const fb=document.getElementById('fb_'+id); fb.classList.add('hidden'); fb.innerHTML=''; });
  document.getElementById('dictScore').classList.add('hidden');
}

let testWrong = [];
function renderTest(){
  const wrap = document.getElementById('testWrap');
  let html='';
  DATA.test_mcq.forEach((q,i)=>{
    html += `<div class="group-card" id="tmcq_${i}">
      <p class="font-bold text-slate-800 mb-2"><span class="bg-slate-100 text-slate-600 text-xs font-black px-2 py-1 rounded-lg mr-2">${i+1}</span>${q.q}</p>
      <div class="grid sm:grid-cols-2 gap-2">${q.options.map((o,j)=>`<label class="option-label rounded-xl px-3 py-2 text-sm font-semibold flex items-center gap-2" id="tmcq_${i}_${j}" onclick="selectTestMcq(${i},${j})"><span class="font-black text-indigo-700">${optionLetter(j)}.</span> ${o}</label>`).join('')}</div>
      <div class="explanation-box mt-2 text-sm hidden bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-800" id="tmcq_fb_${i}"></div>
    </div>`;
  });
  DATA.test_transform.forEach((t,i)=>{
    const id = `ttrans_${i}`;
    html += `<div class="group-card">
      <p class="font-bold text-slate-800 mb-2"><span class="bg-slate-100 text-slate-600 text-xs font-black px-2 py-1 rounded-lg mr-2">${DATA.test_mcq.length+i+1}</span>${t.original}</p>
      <div class="flex items-center gap-3 w-full flex-wrap">
        <span class="text-slate-800 font-extrabold text-base whitespace-nowrap">${t.starter}</span>
        <input type="text" id="${id}" class="answer-input flex-1 min-w-[180px] px-3 py-2 rounded-lg text-sm font-semibold" placeholder="..." autocomplete="off" spellcheck="false">
      </div>
      <div class="explanation-box mt-2 text-sm hidden bg-blue-50 border border-blue-200 rounded-lg px-3 py-2 text-blue-800" id="fb_${id}"></div>
    </div>`;
  });
  wrap.innerHTML = html;
}
function selectTestMcq(i,j){
  document.querySelectorAll(`[id^="tmcq_${i}_"]`).forEach(el=>el.classList.remove('selected'));
  document.getElementById(`tmcq_${i}_${j}`).classList.add('selected');
  document.getElementById(`tmcq_${i}_${j}`).dataset.chosen=j;
}
function submitTest(){
  let correct=0, total=DATA.test_mcq.length+DATA.test_transform.length;
  testWrong = [];
  DATA.test_mcq.forEach((q,i)=>{
    const chosenEl = document.querySelector(`#testWrap [id^="tmcq_${i}_"].selected`);
    const chosen = chosenEl ? parseInt(chosenEl.dataset.chosen) : -1;
    const ok = chosen===q.answer;
    q.options.forEach((o,j)=>{ const el=document.getElementById(`tmcq_${i}_${j}`); el.classList.remove('correct-opt','wrong-opt'); if(j===q.answer) el.classList.add('correct-opt'); else if(j===chosen) el.classList.add('wrong-opt'); });
    const fb=document.getElementById(`tmcq_fb_${i}`); fb.classList.remove('hidden');
    fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${optionLetter(q.answer)}. ${q.options[q.answer]}</b>`) + `<br>💡 ${q.explanation}` + (q.vi?`<br>📖 <i>${q.vi}</i>`:'');
    if(ok) correct++; else testWrong.push({type:'mcq', idx:i});
  });
  DATA.test_transform.forEach((t,i)=>{
    const id=`ttrans_${i}`; const inp=document.getElementById(id); const fb=document.getElementById('fb_'+id);
    const val=normalize(inp.value); const acc=(t.accepted||[t.answer]).map(normalize);
    const ok = val!=='' && acc.includes(val);
    inp.classList.remove('correct-input','wrong-input'); inp.classList.add(ok?'correct-input':'wrong-input');
    fb.classList.remove('hidden');
    fb.innerHTML = (ok?'<span class="text-emerald-700 font-bold">✅ Chính xác!</span>':`<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án: <b>${t.answer}</b>`) + `<br>💡 ${t.explanation}<br>📖 <i>${t.vi}</i><br>📐 <b>${t.note}</b>`;
    if(ok) correct++; else testWrong.push({type:'trans', idx:i});
  });
  document.getElementById('testResult').classList.remove('hidden');
  document.getElementById('testScoreText').textContent = `${correct} / ${total} câu đúng`;
  document.getElementById('retryTestBtn').classList.toggle('hidden', testWrong.length===0);
  document.getElementById('testResult').scrollIntoView({behavior:'smooth'});
}
function resetTest(){
  DATA.test_mcq.forEach((q,i)=>{ q.options.forEach((o,j)=>{ const el=document.getElementById(`tmcq_${i}_${j}`); el.classList.remove('selected','correct-opt','wrong-opt'); delete el.dataset.chosen; }); const fb=document.getElementById(`tmcq_fb_${i}`); fb.classList.add('hidden'); fb.innerHTML=''; });
  DATA.test_transform.forEach((t,i)=>{ const id=`ttrans_${i}`; document.getElementById(id).value=''; document.getElementById(id).classList.remove('correct-input','wrong-input'); const fb=document.getElementById('fb_'+id); fb.classList.add('hidden'); fb.innerHTML=''; });
  document.getElementById('testResult').classList.add('hidden');
}
function retryTestWrong(){
  if(!testWrong.length) return;
  alert('Các câu sai vẫn hiển thị màu đỏ ở trên — hãy sửa lại các câu đó rồi bấm "Nộp bài" lần nữa để chấm lại toàn bộ.');
  document.getElementById('testWrap').scrollIntoView({behavior:'smooth'});
}

renderComprehension();
""" + dang_render_calls + r"""
renderDictTab();
renderTest();
</script>
</body>
</html>
"""
    html = (html.replace("__BASE_HEAD__", BASE_HEAD)
                .replace("<title>Unit __UNIT__ - Grammar</title>", f"<title>Unit {unit_no} - Grammar</title>")
                .replace("__UNIT__", str(unit_no))
                .replace("__TITLE__", title)
                .replace("__LESSON_HTML__", lesson_html)
                .replace("__DANG_NAV__", dang_nav_btns)
                .replace("__DANG_PAGES__", dang_pages)
                .replace("__DATA_JSON__", data_json))
    return html
