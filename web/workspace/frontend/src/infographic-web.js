domready = require('domready');

var tab = function(event) {
  event.preventDefault();

  var actives = document.querySelectorAll('.u-active');

  // deactivate existing active tab and panel
  for (var i=0; i < actives.length; i++){
    actives[i].className = actives[i].className.replace('u-active', '');
  }

  // activate new tab and panel
  event.target.className += ' u-active';
  document.getElementById(event.target.href.split('#')[1]).className += ' u-active';

  return false;
};

domready(function () {
  var tabs = document.getElementById('tabs');

  if (tabs) {
    tabs.addEventListener('click', tab, false);
  }
});