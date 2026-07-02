/* ==========================================================
   CURSOR.JS — Custom cursor (dot + lagging ring)
   Desktop / fine-pointer devices only.
========================================================== */

(function(){
  'use strict';

  if (!window.Utils.hasFinePointer()) return;

  document.body.classList.add('has-custom-cursor');

  var dot = document.createElement('div');
  dot.className = 'cursor-dot';
  var ring = document.createElement('div');
  ring.className = 'cursor-ring';
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  var mx = 0, my = 0;   // raw mouse position
  var rx = 0, ry = 0;   // ring position (lagging, lerped)

  window.addEventListener('mousemove', function(e){
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  (function loop(){
    rx += (mx - rx) * 0.16;
    ry += (my - ry) * 0.16;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();

  var interactiveSelector = 'a, button, .btn, .service-card, .work-card, .faq__question';
  document.querySelectorAll(interactiveSelector).forEach(function(el){
    el.addEventListener('mouseenter', function(){ ring.classList.add('is-active'); });
    el.addEventListener('mouseleave', function(){ ring.classList.remove('is-active'); });
  });

})();
