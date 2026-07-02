# Digital Business Card — Rouf Template

A single-page, dark-themed digital visiting card. Scan a QR code → land here → save the
contact, WhatsApp, or call in one tap.

## Folder structure

```
virtual-card/
├── index.html
├── css/
│   ├── base.css          # tokens, reset, typography
│   ├── navbar.css        # header + nav
│   ├── hero.css           # hero section, video bg, aurora orbs, photo frame
│   ├── buttons.css        # all button variants + ripple
│   ├── cards.css          # glass cards, service/work/testimonial cards
│   ├── sections.css       # about/services/work/testimonials/contact/footer layout
│   ├── animations.css     # keyframes, scroll-reveal classes, custom cursor
│   └── responsive.css     # ALL @media queries — loaded last on purpose
├── js/
│   ├── utils.js           # smoothScrollTo, vCard builder, ripple, helpers — load first
│   ├── navbar.js          # mobile menu + sticky header
│   ├── cursor.js          # custom cursor (desktop only)
│   ├── parallax.js        # mouse parallax on orbs + photo tilt (desktop only)
│   ├── counter.js         # animated number counters (GSAP ScrollTrigger)
│   ├── animations.js      # hero entrance + scroll reveal (GSAP)
│   └── main.js             # CLIENT_DATA config + data-binding — load last
└── assets/
    ├── icons/
    ├── images/
    ├── videos/
    └── fonts/
```

## Reusing this for a new client (the whole point of this template)

Open `js/main.js` and edit the `CLIENT_DATA` object at the top. Nothing else needs to
change — name, role, tagline, phone, WhatsApp, email and address all flow into the page
text **and** the "Save Contact" vCard automatically, from that one object.

```js
var CLIENT_DATA = {
  name:  'Client Name',
  role:  'Their Job Title',
  ...
};
```

Any element in `index.html` with `data-bind="name"` (or `role`, `tagline`, `email`,
`phoneDisplay`, `address`) will auto-fill from `CLIENT_DATA`.

## Assets you need to add

See the filename checklist in the chat reply — drop matching files into `assets/images/`,
`assets/videos/` and `assets/icons/` and they'll appear automatically (the page has
graceful fallbacks so it still looks intentional even before you add them).

## Deploying (matches the rouf.in + GitHub Pages plan)

1. Push this folder to a GitHub repo.
2. Enable GitHub Pages for that repo.
3. Point a subpath of `rouf.in` (e.g. `rouf.in/cards/clientname`) or a subdomain at it.
4. Generate a QR code for that URL and print it on the physical card.

Repeat per client: fork/copy this folder, edit `CLIENT_DATA`, swap the assets, deploy.
