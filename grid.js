// grid.js
// Grab breakpoints
const breakpoints = document
  .querySelector('[data-breakpoints]')
  .dataset.breakpoints.split(' ');

// Create stylesheet
const sheet = (() => {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(''));
  document.head.appendChild(style);
  return style.sheet;
})();

// Grab widths
const widthEls = document.querySelectorAll('[data-w]');

// Loop through data-w elements, create/insert rulesets
for (let i = 0; i < widthEls.length; i++) {
  const widthEl = widthEls[i];
  const fracs = widthEl.dataset.w.split(' ');

  // Loop over sizes
  for (let x = 0; x < fracs.length; x++) {
    const y = x - 1;

    if (x === 0) {
      // Insert base width
      sheet.insertRule(
        `
[data-w="${widthEl.dataset.w}"] {
  width: calc(100% * ${fracs[x]});
}`,
        sheet.cssRules.length
      );
    } else {
      // Insert media query widths
      sheet.insertRule(
        `
@media (min-width: ${breakpoints[y]}px) {
  [data-w="${widthEl.dataset.w}"] {
    width: calc(100% * ${fracs[x]});
  }
}`,
        sheet.cssRules.length
      );
    }
  }
}
