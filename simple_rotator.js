// Simple Rotator generic function
(function($) {
$.fn.simpleRotator = function(options) {

  var settings = $.extend({
    // These are the defaults.
    unique_id: 'new123',
    item_class: ".item",
    items_visible: 3,
  }, options );

  var item_wrapper = this;
  var item = item_wrapper.find(settings.item_class);
  var item_width = item.outerWidth(true);

  var rotator_pos = 0;
  var rotator_count = item.length;
  var items_margin = Math.round(rotator_count * (item_width/settings.items_visible));
  var busy = false;

  if (rotator_count > settings.items_visible) {
    // Make the wrapper to contain all the items in one row
    this.css({
      'width': rotator_count * item_width,
      'height': item.outerHeight(true),
      'overflow': 'hidden',
      'clear': 'both',
    });

    // Set the parent of the wrapper css so it doesn't show all items
    this.parent().css({
      'width': items_margin,
      'overflow': 'hidden',
    });

    // Add slider controls
    item_wrapper.before('<div class="slider-controls slider-controls-'+settings.unique_id+'"><span class="navigation go-left" data-dir="left">previous</span><span class="navigation go-right" data-dir="right">next</span></div>');
  }

  $(".slider-controls-"+settings.unique_id+" .navigation").click(function(){
    var dir = $(this).attr("data-dir"),
        limit = 1 - rotator_count/settings.items_visible;

      //console.log("limit: "+limit);
      if (dir == "left" && rotator_pos != 0 && busy == false) {
        //alert("left");
        busy = true;
        item_wrapper.animate({
          'margin-left': "+="+items_margin
        }, 600);
        rotator_pos++;
        busy = false;
        //console.log("rotator_pos: "+rotator_pos);
      }
      if (dir == "right" && rotator_pos > limit && busy == false) {
        //alert("right");
        busy = true;
        item_wrapper.animate({
          'margin-left': "-="+items_margin
        }, 600);
        rotator_pos--;
        busy = false;
        //console.log("rotator_pos: "+rotator_pos);
      }
  });
}
}(jQuery));
