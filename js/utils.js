/* ==========================================================
   UTILS.JS — Shared helper functions
   Exposed on window.Utils so other files can call them.
   Load this file FIRST (before navbar.js, main.js, etc).
========================================================== */

window.Utils = (function(){

  /** Smooth-scrolls to a target selector, offsetting for the fixed header. */
  function smoothScrollTo(selector){
    var target = document.querySelector(selector);
    if (!target) return;
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var offset = target.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: offset, behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  /** Builds a .vcf (vCard) file from a data object and triggers a download. */
  function downloadVCard(data){
    var lines = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:' + data.name,
      data.role ? 'TITLE:' + data.role : '',
      data.org ? 'ORG:' + data.org : '',
      data.phone ? 'TEL;TYPE=CELL:' + data.phone : '',
      data.email ? 'EMAIL:' + data.email : '',
      data.website ? 'URL:' + data.website : '',
      data.address ? 'ADR;TYPE=WORK:;;' + data.address : '',
      'END:VCARD'
    ].filter(Boolean);

    var blob = new Blob([lines.join('\n')], { type: 'text/vcard' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = (data.name || 'contact').replace(/\s+/g,'_') + '.vcf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  /** Attaches a Material-style ripple circle to a button on click. */
  function attachRipple(el){
    el.addEventListener('click', function(e){
      var rect = this.getBoundingClientRect();
      var span = document.createElement('span');
      span.className = 'ripple__circle';
      var size = Math.max(rect.width, rect.height);
      span.style.width = span.style.height = size + 'px';
      span.style.left = (e.clientX - rect.left - size / 2) + 'px';
      span.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(span);
      setTimeout(function(){ span.remove(); }, 600);
    });
  }

  /** Basic debounce, used to throttle resize/scroll-heavy listeners if ever needed. */
  function debounce(fn, wait){
    var t;
    return function(){
      clearTimeout(t);
      var args = arguments, ctx = this;
      t = setTimeout(function(){ fn.apply(ctx, args); }, wait);
    };
  }

  /** True on devices with a real mouse (used to gate cursor/parallax effects). */
  function hasFinePointer(){
    return window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  }

  return { smoothScrollTo: smoothScrollTo, downloadVCard: downloadVCard, attachRipple: attachRipple, debounce: debounce, hasFinePointer: hasFinePointer };
})();
