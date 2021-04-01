# maki-js
Stupidly simple on-scroll element reveal handler

**Powered by:**
* [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
* [CSS Data Attribute Selectors](https://drafts.csswg.org/selectors-3/#attribute-selectors)
* CSS Animation via [@keyframes](https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)

**Anatomy:**
* `maki.js` → checks for viewport intersections of elements with `data-maki` css attribute selectors
* `maki.css` → includes prefabricated classes and `@keyframes` animations to apply on intersection

## Quick start:
### 0. install via npm __(optional)__
    npm install maki-js

### 1. include maki.js
    <script src="./scripts/maki.js"></script>

### 2. include maki.css
    <link href="./style/maki.css type="text/css" rel="stylesheet>

### 3. run maki()
    `<script>maki()</script>`

### 4. add the data-maki data attribute to your target elements
    <div data-maki="scroll-in">Senatus Populusque Romanus</div>