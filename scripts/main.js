/**
 * Created by schandramouli on 10/5/15.
 */
  // Closes the sidebar menu
// Scrolls to the selected menu item on the page

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function() {
  var name = getParameterByName("name");
  var options = {
    stripIgnoreTag: true
  };
  name = filterXSS(name, options);
  $('#xss-play').html("hello" + name);


});
