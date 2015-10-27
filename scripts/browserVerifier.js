/**
* Created by schandramouli on 10/27/15.
*/

window.onload = function() {
  var browserEngines = ['Trident', 'Gecko/', 'Chrome/', 'Safari/'];
  var browsers = ['Internet Explorer', 'Mozilla Firefox', 'Google Chrome', 'Safari', 'Not from a browser'];
  var index = 255;
  var browserIndex = 0;
  if (navigator.userAgent.indexOf('Edge') == -1) {
    console.log(navigator.userAgent);
    for (var x = 0; x < browserEngines.length; x++) {
      console.log(x, browserEngines);
      var newIndex = navigator.userAgent.indexOf(browserEngines[x]);
      console.log(browserEngines[x], ' found at  ', newIndex);
      if (newIndex > -1 && index > newIndex) {
        index = newIndex;
        browserIndex = x;
        console.log(x, newIndex);
      }
    }
    console.log(browsers[browserIndex]);
  } else {
    console.log('Microsoft Edge, cool choice');
  }
};