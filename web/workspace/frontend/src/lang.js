domready = require('domready');

domready(function () {
  var dd = document.getElementById('lang');
  dd.addEventListener('change', function() { window.open(dd.options[dd.selectedIndex].value, '_self'); }, false);
});