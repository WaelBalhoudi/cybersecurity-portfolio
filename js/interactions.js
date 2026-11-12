(function(){
 const fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
 const still=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
 // scroll reveal (staggered per parent)
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
 window.observeReveal=root=>(root||document).querySelectorAll('.reveal:not(.in)').forEach((el,i)=>{el.style.setProperty('--d',(i%3)*.08+'s');io.observe(el)});
 // progress bar + sticky nav
 const bar=document.getElementById('progress'),nav=document.getElementById('nav');
 let tick=false;addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{
  const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';nav.classList.toggle('solid',h.scrollTop>40);tick=false})},{passive:true});
 if(!fine)return;
 // pointer glow, card lighting, tilt
 const g=document.getElementById('glow');
 addEventListener('pointermove',e=>{g.style.opacity=1;g.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
  const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px');
   if(!still&&c.classList.contains('tilt')){c.style.transform=`perspective(800px) rotateY(${((e.clientX-r.left)/r.width-.5)*8}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*8}deg)`}}},{passive:true});
 document.addEventListener('pointerout',e=>{const c=e.target.closest&&e.target.closest('.tilt');if(c)c.style.transform=''});
})();
