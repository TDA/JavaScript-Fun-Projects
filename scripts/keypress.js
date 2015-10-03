/**
 * Created by schandramouli on 10/1/15.
 */


Object.aliasMethod = function(object, newMethodName, oldMethodName) { object[newMethodName] = object[oldMethodName]; };
String.prototype.tS = String.prototype.toString;

var dict = ['a', 'b', 'c'];

function random(x) {
  var rand = Math.random();
  return rand.tS();
}

$(document).ready(function () {
  var name = $('#name');
  name.on("keypress", function (e) {
    var self = this;
    var code = (e.keyCode ? e.keyCode : e.which);

    // (code > 33 && code <= 47) || (code > 57 && code <= 63) || code == 17
    // if not an alphabet, letter or number, reject the key, lets irritate them, switch up the key mappings, BURN.
    // this basically kills automated tests :D :D

    switch (true) {
      // let these fall through, these are ok
      // js only lang to allow this <3
      case (code >= 65 && code <= 90):
      case (code >= 48  && code <= 57):
      case (code >= 97  && code <= 122):
      case (code === 32 || code === 13 || code === 9 || code === 27):
        // do nothing and return
        return;
        // break unnecessary, but lets complicate the code
        break;
      case (code > 33 && code <= 47):
      case (code > 57 && code <= 63):
      case (code > 122):
        // these need morphing
        var value = $(self).val();
        value += random(dict);
        $(self).val(value);
        e.preventDefault();
        break;

    }
    //console.log(e, "pressed");
  });
});