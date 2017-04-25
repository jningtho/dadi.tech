// $ = require('jquery');
// domready = require('domready');
// Pattern = require('../lib/dadi-pattern');


// domready(function () {
//   pattern('#pattern');
// });


var els = document.querySelectorAll('.pattern');
Array.prototype.forEach.call(els, function(el) {
  var sizes = getComputedStyle(el);
  var colors = el.getAttribute('data-colors').split(',');
  var drawing = new Pattern(el);
  drawing.init({
    width: parseInt(sizes.width, 10),
    height: parseInt(sizes.height, 10),
    size: 170,
    colors: colors,
    spread: {
      x: 0.8,
      y: 0.8
    }
  });
  el.classList.add('pattern--loaded');
});