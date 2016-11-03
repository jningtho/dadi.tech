(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// $ = require('jquery');
// domready = require('domready');

// var target = '.normalise .normalise--item';

// domready(function () {

//   equalheight = function(container){
//     var currentTallest = 0,
//         currentRowStart = 0,
//         rowDivs = [],
//         $el,
//         topPosition = 0;

//     $(container).each(function() {
//       $el = $(this);
//       $el.height('auto');
//       topPostion = $el.position().top;

//       if (currentRowStart != topPostion) {
//         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//           rowDivs[currentDiv].height(currentTallest);
//         }
//         rowDivs.length = 0; // empty the array
//         currentRowStart = topPostion;
//         currentTallest = $el.height();
//         rowDivs.push($el);
//       } else {
//         rowDivs.push($el);
//         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
//       }
//       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//         rowDivs[currentDiv].height(currentTallest);
//       }
//     });
//   };

//   $(window).on('load', function() {
//     equalheight(target);
//   });

//   $(window).on('resize', function(){
//     equalheight(target);
//   });
// });
},{}],2:[function(require,module,exports){
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
},{}]},{},[1,2])
//# sourceMappingURL=main.js.map
