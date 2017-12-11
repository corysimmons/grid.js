# grid.js

[![Greenkeeper badge](https://badges.greenkeeper.io/corysimmons/grid.js.svg)](https://greenkeeper.io/)

Simple fractional JS grid prototype. Makes adding fractions to markup easy.

## Installation

Import it into your project someway, somehow.

## Usage

```html
<html data-breakpoints="1024">
  <body>
    <div data-w="1/2 2/3">A</div>
    <div data-w="1/2 1/3">B</div>
  </body>
</html>
```

It's mobile-first only (for now). That example will default to `1/2` elements on mobile. When the viewport hits `1024px` wide, the layout will change so the first element is `2/3` width, the second element `1/3` width.

## Details

Does this by adding a stylesheet with JS, then inserts simple/clean rulesets.

The above examples JS-stylesheet would be:

```css
[data-w="1/2 2/3"] { width: calc(50%); }
@media (min-width: 1024px) {
  [data-w="1/2 2/3"] {
    width: calc(66.6667%);
  }
}

[data-w="1/2 1/3"] { width: calc(50%); }
@media (min-width: 1024px) {
  [data-w="1/2 1/3"] {
    width: calc(33.3333%);
  }
}
```

## Wishlist

- Combine rulesets as much as possible so it looks a bit cleaner. The same rules (say `<div data-w="1/2"></div> <div data-w="1/2"></div>`) currently get duplicate rules. 😅
- Gotta go faster! 🏎
