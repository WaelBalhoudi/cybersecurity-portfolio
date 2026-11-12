(function(){
 if(typeof particlesJS==='undefined')return;
 const small=window.matchMedia('(max-width:700px)').matches;
 const still=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
 particlesJS('particles-js',{particles:{number:{value:small?28:70,density:{enable:true,value_area:900}},color:{value:['#00D6A0','#00B8D9']},shape:{type:'circle'},opacity:{value:.4},size:{value:2.2,random:true},line_linked:{enable:true,distance:small?110:150,color:'#00B8D9',opacity:.18,width:1},move:{enable:!still,speed:.9,out_mode:'out'}},
 interactivity:{detect_on:'window',events:{onhover:{enable:!small&&!still,mode:'repulse'},onclick:{enable:!small,mode:'push'},resize:true},modes:{repulse:{distance:110,duration:.4},push:{particles_nb:3}}},retina_detect:true});
})();
