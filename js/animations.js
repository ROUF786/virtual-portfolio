/* ==========================================================
   ANIMATIONS.JS — GSAP hero entrance + scroll-reveal
   Requires GSAP + ScrollTrigger (loaded in index.html).
========================================================== */

(function(){
  'use strict';

  if (!window.gsap) return;
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Hero entrance ---------- */
  gsap.timeline({ defaults:{ ease:'power3.out' } })
    .to('.hero__eyebrow',    { opacity:1, y:0, filter:'blur(0px)', duration:.7, delay:.15 })
    .to('.hero__photo-wrap', { opacity:1, y:0, filter:'blur(0px)', duration:.7 }, '-=0.5')
    .to('.hero__title',      { opacity:1, y:0, filter:'blur(0px)', duration:.8 }, '-=0.5')
    .to('.hero__role',       { opacity:1, y:0, filter:'blur(0px)', duration:.7 }, '-=0.55')
    .to('.hero__tagline',    { opacity:1, y:0, filter:'blur(0px)', duration:.7 }, '-=0.55')
    .to('.hero__chips',      { opacity:1, y:0, filter:'blur(0px)', duration:.6 }, '-=0.5')
    .to('.hero__actions',    { opacity:1, y:0, filter:'blur(0px)', duration:.7 }, '-=0.45');

  /* ---------- Generic scroll reveal ---------- */
  gsap.utils.toArray('.reveal, .reveal-left, .reveal-right').forEach(function(el){
    gsap.to(el, {
      opacity:1, x:0, y:0, filter:'blur(0px)',
      duration:1, ease:'power3.out',
      scrollTrigger:{ trigger: el, start:'top 85%' }
    });
  });

})();
