/* ==========================================================
   PARALLAX.JS — Mouse parallax on hero background + photo tilt
   Desktop / fine-pointer devices only.
========================================================== */

(function(){
  'use strict';

  if (!window.Utils.hasFinePointer()) return;

  var hero = document.querySelector('.hero');
  if (!hero) return;

  /* ---------- Glow spotlight that follows the cursor ---------- */
  var glow = document.getElementById('cursorGlow');
  var gx = 0, gy = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', function(e){ gx = e.clientX; gy = e.clientY; });
  (function raf(){
    cx += (gx - cx) * 0.15;
    cy += (gy - cy) * 0.15;
    if (glow){ glow.style.transform = 'translate(' + cx + 'px,' + cy + 'px)'; }
    requestAnimationFrame(raf);
  })();
  hero.addEventListener('mouseenter', function(){ if (glow) glow.style.opacity = 1; });
  hero.addEventListener('mouseleave', function(){ if (glow) glow.style.opacity = 0; });

  /* ---------- Orb parallax: layers drift opposite the cursor ---------- */
  var orbs = document.querySelectorAll('.orb');
  hero.addEventListener('mousemove', function(e){
    var rect = hero.getBoundingClientRect();
    var relX = (e.clientX - rect.left) / rect.width - 0.5;   // -0.5 .. 0.5
    var relY = (e.clientY - rect.top) / rect.height - 0.5;

    orbs.forEach(function(orb, i){
      var depth = (i + 1) * 10; // px of max travel, layered per orb
      orb.style.transform = 'translate(' + (relX * depth) + 'px,' + (relY * depth) + 'px)';
    });
  });
  hero.addEventListener('mouseleave', function(){
    orbs.forEach(function(orb){ orb.style.transform = 'translate(0,0)'; });
  });

  /* ---------- Photo frame 3D tilt ---------- */
  var frame = document.querySelector('.hero__photo-frame');
  if (frame){
    hero.addEventListener('mousemove', function(e){
      var rect = frame.getBoundingClientRect();
      var cxLocal = rect.left + rect.width / 2;
      var cyLocal = rect.top + rect.height / 2;
      var rotY = ((e.clientX - cxLocal) / rect.width) * 16;
      var rotX = -((e.clientY - cyLocal) / rect.height) * 16;
      frame.style.transform = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';
    });
    hero.addEventListener('mouseleave', function(){
      frame.style.transform = 'rotateX(0) rotateY(0)';
    });
  }

})();
