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