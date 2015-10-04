// Items rotator - slider
// General settings per slider
var $item_grapper = $("#block-views-photos-block");
var $item = $('.item');
var $items_visible = 3;
var $item_width = 240;

var $photo_pos = 0;
var $photo_count = $item.length;
var $items_margin = $photo_count*($item_width/$items_visible);
var $busy = false;

if (photo_count > 1) {
  // Add slider controls
  $item_wrapper.before('<div class="slider-controls"><span class="nav go-left" data-dir="left">previous</span><span class="nav go-right" data-dir="right">next</span></div>');
}

$(".slider-controls .nav").click(function(){
  var $dir = $(this).attr("data-dir"),
      $margin = $items_margin,
      $limit = 1 - $photo_count/$items_visible;
      
    //console.log("limit: "+limit);
    if ($dir == "left" && $photo_pos != 0 && $busy == false) {
      //alert("left");
      $busy = true;
      $item_wrapper.animate({
        'margin-left': "+="+$margin
      }, 1000);
      $photo_pos++;
      $busy = false;
      //console.log("photo_pos: "+photo_pos);
    }
    if ($dir == "right" && $photo_pos > limit && $busy == false) {
      //alert("right");
      $busy = true;
      $item_wrapper.animate({
        'margin-left': "-="+$margin
      }, 1000);
      $photo_pos--;
      $busy = false;
      //console.log("photo_pos: "+photo_pos);
    }
    
});
