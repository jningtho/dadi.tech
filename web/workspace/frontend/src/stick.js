window.jQuery = $ = require('jquery');
stick_in_parent = require('sticky-kit');
domready = require('domready');

domready(function () {
  $('.stick').each(function () {   
    var $el = $(this),
        options = {};

    // Passed options from the markup
    options.parent          = $el.attr('stick-parent') ? $($el.attr('stick-parent')) : null;
    options.inner_scrolling = $el.attr('stick-scrolling') ? false : null;
    options.timeout         = $el.attr('stick-timeout') ? parseInt($el.attr('stick-timeout')) : null;
    options.timeout_after   = $el.attr('stick-timeout-after') ? $($el.attr('stick-timeout-after')) : null;
    options.spacer          = $el.attr('stick-spacer') ? false : null;

    $(document.body).one('sticky_kit:recalc');

    // Execute the sticky code
    $el.stick_in_parent(options)
      .on("sticky_kit:stick", function(e) {
        //console.log("has stuck!", e.target);

        // Set how long something is sticky for
        if (options.timeout) { 
          setTimeout(function(){
            $(e.target).trigger("sticky_kit:detach");

            // Allow chained sticks, i.e., one only allowed after another
            if (options.timeout_after) stickElement(options.timeout_after);

            $(document.body).one('sticky_kit:recalc');

          }, parseInt(options.timeout));
        }
      })
      .on("sticky_kit:unstick", function(e) {
        //console.log("has unstuck!", e.target);
      });
  });
});