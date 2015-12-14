var jQuery = require('jquery');

function hex(x) {
  return ('0' + parseInt(x).toString(16)).slice(-2);
}
function rgb2hex(rgb) {
   if (rgb.search('rgb') == -1 ) {
      return rgb;
   } else {
      rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
      if (rgb) {
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      }
   }
}

function initialize() {
  (function($) {
    $('*').each(function() {
      var bg = $(this).css('background-color');
      var bgHex = rgb2hex(bg);

      if(bgHex && bgHex !== '#000000') {
        $(this).css('position', 'relative');
        $(this).append('<span style="position:absolute; top: 0; left: 0; padding: 0 8px; background-color: #fff; border: 1px solid #e7e7e7; font-family: sans-serif; font-size: 12px; font-weight: bold; color: #000;">' + bgHex + '</span>');
      }
    });
  }(jQuery));
}

window.Kameleon = initialize;
