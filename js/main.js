/* ==========================================================
   MAIN.JS — Client config + data-binding + Save Contact + init
   Loaded last (after utils/navbar/cursor/parallax/counter/animations).
========================================================== */

(function(){
  'use strict';

  /* ============================================================
     EDIT ZONE
     This is the only block you should need to touch to reuse
     this template for a new client. Every field flows into the
     page text, the tel:/mailto:/WhatsApp links, AND the
     "Save Contact" vCard — so it only has to be correct once.
  ============================================================ */
  var CLIENT_DATA = {
    name:         'Rouf Bagwan',
    role:         'Graphic Designer & Web Developer',
    org:          'Freelance',
    tagline:      'I design clean business cards, thumbnails and social posts — fast, affordable, made for you.',
    phone:        '+910000000000',      // full international format — used for tel: + vCard
    phoneDisplay: '+91 00000 00000',    // human-readable version shown on the page
    whatsapp:     '910000000000',       // digits only, no + — used for wa.me links
    email:        'hello@rouf.in',
    website:      'https://rouf.in',
    address:      'Bangalore, Karnataka, India'
  };

  document.addEventListener('DOMContentLoaded', function(){
    bindClientData();
    setupSaveContact();
    document.querySelectorAll('.ripple').forEach(window.Utils.attachRipple);
  });

  /** Pushes CLIENT_DATA into every element carrying a data-bind attribute,
   *  and wires up the tel: / mailto: / WhatsApp links automatically. */
  function bindClientData(){
    document.querySelectorAll('[data-bind]').forEach(function(el){
      var key = el.dataset.bind;
      if (CLIENT_DATA[key] !== undefined) el.textContent = CLIENT_DATA[key];
    });

    document.querySelectorAll('[data-whatsapp-link]').forEach(function(el){
      el.href = 'https://wa.me/' + CLIENT_DATA.whatsapp;
    });
    document.querySelectorAll('[data-call-link]').forEach(function(el){
      el.href = 'tel:' + CLIENT_DATA.phone;
    });
    document.querySelectorAll('[data-mail-link]').forEach(function(el){
      el.href = 'mailto:' + CLIENT_DATA.email;
    });

    document.title = CLIENT_DATA.name + ' | ' + CLIENT_DATA.role;
  }

  /** Wires every [data-save-contact] button to download a .vcf built from CLIENT_DATA. */
  function setupSaveContact(){
    document.querySelectorAll('[data-save-contact]').forEach(function(btn){
      btn.addEventListener('click', function(){
        window.Utils.downloadVCard({
          name: CLIENT_DATA.name,
          role: CLIENT_DATA.role,
          org: CLIENT_DATA.org,
          phone: CLIENT_DATA.phone,
          email: CLIENT_DATA.email,
          website: CLIENT_DATA.website,
          address: CLIENT_DATA.address
        });
      });
    });
  }

})();
