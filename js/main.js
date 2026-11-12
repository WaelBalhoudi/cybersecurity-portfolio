(function(){
 const $=(s,r=document)=>r.querySelector(s),esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 $('#year').textContent=new Date().getFullYear();
 // mobile menu
 const burger=$('#burger'),menu=$('#menu');
 const setMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)};
 burger.onclick=()=>setMenu(!menu.classList.contains('open'));
 menu.addEventListener('click',e=>{if(e.target.tagName==='A')setMenu(false)});
 // scrollspy
 const links=[...menu.querySelectorAll('a[href^="#"]')];
 const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
 links.forEach(a=>{const s=$(a.getAttribute('href'));s&&spy.observe(s)});
 // expertise + skills
 $('#expertise-grid').innerHTML=EXPERTISE.map(x=>`<article class="card reveal"><div class="ex-ic" aria-hidden="true">${esc(x.ic)}</div><h3>${x.t}</h3><p>${x.d}</p><ul class="tags">${x.topics.map(t=>`<li>${t}</li>`).join('')}</ul>${x.tools.length?`<ul class="tags tools" aria-label="Tools">${x.tools.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}${x.note?`<p class="note" style="margin-top:.8rem">${x.note}</p>`:''}</article>`).join('');
 $('#skills-grid').innerHTML=Object.entries(SKILLS).map(([k,v])=>`<article class="card reveal"><h3>${k}</h3><ul class="tags">${v.map(t=>`<li>${t}</li>`).join('')}</ul></article>`).join('');
 // projects
 const grid=$('#projects-grid'),fil=$('#filters');
 const thumb=p=>`<div class="thumb"><div class="fb" aria-hidden="true">${esc(p.title)}</div><img src="${p.img}" alt="${esc(p.title)} project preview" loading="lazy" onerror="this.remove()"></div>`;
 const repo=(p,cls)=>p.github?`<a class="btn btn-sm ${cls}" href="${p.github}" target="_blank" rel="noopener">${p.repoLabel||'GitHub'}</a>`:`<span class="btn btn-sm btn-ghost" aria-disabled="true">Repository not public</span>`;
 grid.innerHTML=PROJECTS.map(p=>`<article class="card proj${p.featured?' feat':''}" data-f="${p.filter}">${p.featured?'<span class="badge">Featured</span>':''}${thumb(p)}<div class="p-body"><span class="cat">${p.cat}</span><h3>${p.title}</h3><p>${p.desc}</p><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join('')}</ul><div class="p-btns"><button class="btn btn-sm btn-primary" data-id="${p.id}">Details</button>${repo(p,'btn-ghost')}</div></div></article>`).join('');
 fil.innerHTML=FILTERS.map(([k,l],i)=>`<button type="button" data-k="${k}" class="${i?'':'on'}" aria-pressed="${!i}">${l}</button>`).join('');
 fil.onclick=e=>{const b=e.target.closest('button');if(!b)return;
  fil.querySelectorAll('button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b)});
  grid.querySelectorAll('.proj').forEach(c=>{const show=b.dataset.k==='all'||c.dataset.f===b.dataset.k;c.classList.toggle('hide',!show);if(show){c.style.animation='none';c.offsetWidth;c.style.animation=''}})};
 // modal
 const modal=$('#modal'),body=$('#m-body');let last=null;
 const close=()=>{modal.classList.remove('show');setTimeout(()=>{modal.hidden=true;last&&last.focus()},250)};
 grid.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;const p=PROJECTS.find(x=>x.id===b.dataset.id);last=b;
  body.innerHTML=`${thumb(p)}<span class="cat">${p.cat}</span><h3 id="m-title">${p.title}</h3><p>${p.desc}</p><h4 class="mono" style="color:var(--a);font-size:.8rem">Highlights</h4><ul class="hl">${p.hl.map(h=>`<li>${h}</li>`).join('')}</ul><ul class="tags">${p.tech.map(t=>`<li>${t}</li>`).join('')}</ul><div class="p-btns">${repo(p,'btn-primary')}</div>`;
  modal.hidden=false;requestAnimationFrame(()=>modal.classList.add('show'));$('#m-close').focus()});
 $('#m-close').onclick=close;modal.onclick=e=>{if(e.target===modal)close()};
 addEventListener('keydown',e=>{if(modal.hidden)return;if(e.key==='Escape')close();
  if(e.key==='Tab'){const f=[...modal.querySelectorAll('a,button')].filter(x=>x.offsetParent);const i=f.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}});
 // terminal
 const out=$('#term-out');
 const lines=[['$ whoami','p'],['wael-balhoudi','o'],['','o'],['$ focus','p'],['Web Application Security\nSecurity Auditing\nRisk Management','o'],['','o'],['$ status','p'],['Currently seeking PFE Internship','o']];
 if(matchMedia('(prefers-reduced-motion:reduce)').matches){out.innerHTML=lines.map(([t,c])=>`<span class="${c}">${t}</span>`).join('\n')}
 else{let li=0,ci=0,html='';(function type(){if(li>=lines.length)return;const [t,c]=lines[li];
  if(c==='p'){ci++;out.innerHTML=html+`<span class="p">${t.slice(0,ci)}</span>`;if(ci<t.length)return setTimeout(type,55);html+=`<span class="p">${t}</span>\n`;li++;ci=0;return setTimeout(type,350)}
  html+=`<span class="o">${t}</span>\n`;out.innerHTML=html;li++;setTimeout(type,120)})()}
 // contact form: set your Formspree endpoint here
 const FORM_ENDPOINT='https://formspree.io/f/YOUR_FORM_ID';
 const form=$('#form'),msg=$('#form-msg');
 form.addEventListener('submit',async e=>{e.preventDefault();msg.className='';
  let bad=null;form.querySelectorAll('input[required],textarea').forEach(f=>{const ok=f.checkValidity();f.classList.toggle('invalid',!ok);f.setAttribute('aria-invalid',!ok);if(!ok&&!bad)bad=f});
  if(bad){msg.textContent='Please complete every field with valid information.';msg.className='err';return bad.focus()}
  if(FORM_ENDPOINT.includes('YOUR_FORM_ID')){msg.innerHTML='The contact form is not configured yet. Please email <a href="mailto:waelbalhoudi@gmail.com">waelbalhoudi@gmail.com</a> directly.';msg.className='err';return}
  const btn=form.querySelector('button');btn.disabled=true;
  try{const r=await fetch(FORM_ENDPOINT,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
   if(r.ok){msg.textContent='Message sent. Thank you, I will reply soon.';msg.className='ok';form.reset()}else throw 0}
  catch{msg.textContent='Message not sent. Please try again or email me directly.';msg.className='err'}
  btn.disabled=false});
 observeReveal();
})();
