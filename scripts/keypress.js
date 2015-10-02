/**
 * Created by schandramouli on 10/1/15.
 */

$(document).ready(function () {
  var name = $('#name');
  name.on("keypress", function (e) {
    var code = (e.keyCode ? e.keyCode : e.which);

    // (code > 33 && code <= 47) || (code > 57 && code <= 63) || code == 17
    // if not an alphabet, letter or number, reject the key, lets irritate them, switch up the key mappings, BURN.

    switch (true) {
      // let these fall through, these are ok
      // js only lang to allow this <3
      case (code >= 65 && code <= 90):
      case (code >= 48  && code <= 57):
      case (code >= 97  && code <= 122):
      case (code === 32):
        console.log("legal");
        break;
      case

    }
    //console.log(e, "pressed");
  });
});