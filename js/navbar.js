/* ==========================================================
   NAVBAR.JS — Mobile toggle, sticky shrink-on-scroll, nav-link scrolling
========================================================== */

(function(){
  'use strict';

  var header = document.getElementById('header');
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  /* Sticky shrink */
  var onScroll = function(){
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  /* Mobile menu toggle */
  navToggle.addEventListener('click', function(){
    navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active');
  });

  /* Close menu + smooth-scroll on link click */
  document.querySelectorAll('.nav__link, [data-scroll]').forEach(function(el){
    el.addEventListener('click', function(e){
      var targetSel = el.dataset.target || el.getAttribute('href');
      if (!targetSel || targetSel.charAt(0) !== '#') return;
      e.preventDefault();
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      window.Utils.smoothScrollTo(targetSel);
    });
  });

})();
