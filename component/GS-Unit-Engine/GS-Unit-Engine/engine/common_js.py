#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Shared JS fragments used by every build_*.py module. Keeping these in
one place means a fix or improvement (e.g. a better voice-picking
heuristic) automatically applies to every unit's VOCAB/GRAMMAR/INCLASS/
TEST app the next time they're rebuilt — this is the "core engine that
doesn't change per unit" the schema doc talks about.
"""

NORMALIZE_JS = r"""
function normalize(s){ return (s||'').trim().toLowerCase().replace(/[\u2018\u2019]/g,"'").replace(/[\u201c\u201d"]/g,'').replace(/[.,!?;:]/g,'').replace(/\s+/g,' '); }
function optionLetter(i){ return ['A','B','C','D'][i]; }
function shuffleArr(a){ return a.slice().sort(()=>Math.random()-0.5); }
"""

# High-quality-voice-preferring, cross-platform (iOS/Android) TTS.
# `voiceStatusElId` (optional) is an element id to show which voice was
# picked — pass null to skip the status line.
def tts_js(voice_status_el_id=None):
    status_line = f"""
  const status = document.getElementById('{voice_status_el_id}');
  if(status){{
    if(chosenVoice) status.innerHTML = `<span class="voice-ok"><i class="fa-solid fa-circle-check mr-1"></i>Giọng đọc: ${{chosenVoice.name}}</span>`;
    else status.innerHTML = `<span class="voice-warn"><i class="fa-solid fa-triangle-exclamation mr-1"></i>Chưa tìm thấy giọng đọc tiếng Anh — hãy thử Chrome/Edge/Safari</span>`;
  }}""" if voice_status_el_id else ""
    return r"""
let audioUnlocked=false, cachedVoices=[], chosenVoice=null;
const PREFERRED_VOICE_NAMES = [
  'Google US English','Microsoft Aria Online (Natural) - English (United States)',
  'Microsoft Jenny Online (Natural) - English (United States)','Samantha',
  'Microsoft Zira Desktop - English (United States)','Google UK English Female','Alex'
];
function unlockAudio(){ if(audioUnlocked) return; audioUnlocked=true;
  try{ const Ctx=window.AudioContext||window.webkitAudioContext; if(Ctx){ const ctx=new Ctx(); const buf=ctx.createBuffer(1,1,22050); const src=ctx.createBufferSource(); src.buffer=buf; src.connect(ctx.destination); src.start(0);} }catch(e){}
  try{ window.speechSynthesis.speak(new SpeechSynthesisUtterance('')); }catch(e){}
  loadVoices();
}
document.addEventListener('touchstart', unlockAudio, {once:true, passive:true});
document.addEventListener('click', unlockAudio, {once:true});
function pickBestVoice(){
  if(!cachedVoices.length) return null;
  for(const name of PREFERRED_VOICE_NAMES){ const v=cachedVoices.find(x=>x.name===name); if(v) return v; }
  const usEn = cachedVoices.filter(v=>/en[-_]us/i.test(v.lang));
  if(usEn.length){ const local = usEn.find(v=>v.localService); return local||usEn[0]; }
  const anyEn = cachedVoices.find(v=>/^en/i.test(v.lang));
  return anyEn||null;
}
function loadVoices(){
  cachedVoices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  chosenVoice = pickBestVoice();""" + status_line + r"""
}
if('speechSynthesis' in window){ loadVoices(); window.speechSynthesis.onvoiceschanged=loadVoices; setTimeout(loadVoices,300); setTimeout(loadVoices,1000); }
let resumeInterval=null;
function speak(text, btn){
  try{
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if(resumeInterval){ clearInterval(resumeInterval); resumeInterval=null; }
    const u=new SpeechSynthesisUtterance(text); u.lang='en-US'; u.rate=0.88; u.pitch=1;
    if(!cachedVoices.length) loadVoices();
    if(chosenVoice) u.voice=chosenVoice;
    if(btn){ btn.classList.add('speaking'); u.onend=()=>{btn.classList.remove('speaking'); if(resumeInterval){clearInterval(resumeInterval);resumeInterval=null;}}; }
    window.speechSynthesis.speak(u);
    resumeInterval=setInterval(()=>{ if(window.speechSynthesis.speaking){ window.speechSynthesis.pause(); window.speechSynthesis.resume(); } else { clearInterval(resumeInterval); resumeInterval=null; } },4000);
  }catch(e){}
}
"""

def confetti_js(wrap_id="confettiWrap", colors=None):
    colors = colors or ['#7c2d12','#ea580c','#f59e0b','#fbbf24','#0891b2','#6366f1']
    colors_js = "[" + ",".join(f"'{c}'" for c in colors) + "]"
    return f"""
function fireConfetti(){{
  const wrap=document.getElementById('{wrap_id}'); if(!wrap) return; wrap.innerHTML='';
  const colors={colors_js};
  for(let i=0;i<80;i++){{
    const p=document.createElement('div'); p.className='confetti-piece';
    p.style.cssText=`left:${{Math.random()*100}}vw;top:-20px;background:${{colors[Math.floor(Math.random()*colors.length)]}};width:${{6+Math.random()*8}}px;height:${{6+Math.random()*8}}px;border-radius:${{Math.random()>0.5?'50%':'2px'}};animation-duration:${{2+Math.random()*2}}s;animation-delay:${{Math.random()*0.8}}s;`;
    wrap.appendChild(p);
  }}
  setTimeout(()=>{{wrap.innerHTML='';}},4000);
}}
"""

CONFETTI_CSS = """
  .confetti-wrap{ position:fixed; inset:0; pointer-events:none; z-index:9999; }
  .confetti-piece{ position:absolute; width:10px; height:10px; border-radius:2px; animation: confettiFall linear forwards; }
  @keyframes confettiFall{ 0%{transform:translateY(-20px) rotate(0deg); opacity:1;} 100%{transform:translateY(100vh) rotate(720deg); opacity:0;} }
"""

VOICE_STATUS_CSS = """
  .voice-ok{ color:#16a34a; } .voice-warn{ color:#d97706; }
"""

FEEDBACK_JS = r"""
function feedbackHTML(ok, answerLabel, explanation, vi, note){
  const okLine = ok? `<span class="text-emerald-700 font-bold">✅ Chính xác!</span>` : `<span class="text-rose-600 font-bold">❌ Chưa đúng.</span> Đáp án đúng: <b>${answerLabel}</b>`;
  const expLine = explanation? `<br><span class="text-blue-700">💡 ${explanation}</span>` : '';
  const viLine = vi? `<span class="text-slate-500">📖 Nghĩa: <i>${vi}</i></span>` : '';
  const noteLine = note? `<br><span class="text-violet-600">📐 Công thức: <b>${note}</b></span>` : '';
  if(note){ return (viLine?viLine+'<br>':'') + okLine + expLine + noteLine; }
  return okLine + expLine + (viLine?'<br>'+viLine:'') + noteLine;
}
"""

def google_font_import(weights="400;600;700;800;900"):
    return f"@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@{weights}&family=Baloo+2:wght@700;800&display=swap');"

BASE_HEAD = r"""<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
"""
