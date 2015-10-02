/**
 * Created by schandramouli on 10/1/15.
 */

$(document).ready(function () {
  var name = $('#name');
  name.on("keypress", function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);

    // (code > 33 && code <= 47) || (code > 57 && code <= 63) || code == 17
    if (! ()) {
      // if not an alphabet letter or number, reject the key, lets irritate them, switch up the key mappings, BURN.
      console.log(e);
    }
    //console.log(e, "pressed");
  });
});