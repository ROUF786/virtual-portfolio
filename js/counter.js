/* ==========================================================
   COUNTER.JS — Animated counters (stats / chips with data-count)
   Requires GSAP + ScrollTrigger (loaded in index.html).
========================================================== */

(function(){
  'use strict';

  if (!window.gsap || !window.ScrollTrigger) return;

  document.querySelectorAll('[data-count]').forEach(function(counter){
    var target = +counter.dataset.count;
    var suffix = counter.dataset.suffix || '';

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      once: true,
      onEnter: function(){
        var obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: function(){ counter.textContent = Math.floor(obj.val) + suffix; }
        });
      }
    });
  });

})();
