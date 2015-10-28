/**
* Created by schandramouli on 10/27/15.
*/

function checkUA() {
  var browserEngines = ['Trident', 'Gecko/', 'Chrome/', 'Safari/'];
  var browsers = ['Internet Explorer', 'Mozilla Firefox', 'Google Chrome', 'Safari', 'Not from a browser'];
  var index = 255;
  var browser;
  var browserIndex = 4;
  if (navigator.userAgent.indexOf('Edge') == -1) {
    //console.log(navigator.userAgent);
    for (var x = 0; x < browserEngines.length; x++) {
      //console.log(x, browserEngines);
      var newIndex = navigator.userAgent.indexOf(browserEngines[x]);
      //console.log(browserEngines[x], ' found at  ', newIndex);
      if (newIndex > -1 && index > newIndex) {
        index = newIndex;
        browserIndex = x;
        //console.log(x, newIndex);
      }
    }
    browser = (browsers[browserIndex]);
  } else {
    browser = ('Microsoft Edge, cool choice');
  }

  var osEngines = ['Mac', 'Windows'];
  var os = ['Mac OS', 'Microsoft Windows', 'A flavor of Linux'];
  var OSIndex = 2;
  index = 255;
  for (var y = 0; y < osEngines.length; y++) {
    var newOSIndex = navigator.userAgent.indexOf(osEngines[y]);
    //console.log(osEngines[y], ' found at  ', newOSIndex);
    if (newOSIndex > -1 && index > newOSIndex) {
      index = newOSIndex;
      OSIndex = y;
    }
  }

  return {'browser': browser, 'os': os[OSIndex]}
}

function selectRedirectLink() {
  var urls = [
    "https://en.wikipedia.org/wiki/Cross-site_scripting",
    "https://en.wikipedia.org/wiki/Cross-site_request_forgery",
    "https://en.wikipedia.org/wiki/SQL_injection",
    "https://en.wikipedia.org/wiki/Denial-of-service_attack",
    "https://en.wikipedia.org/wiki/Gorilla",
    "http://cox.com/",
    "http://godaddy.com/",
    "http://discover.com/",
    "http://chase.com/",
    "http://bankofamerica.com/",
    "http://mail.google.com/",
    "http://localhost/",
    "http://mozilla.org"
  ];
  return urls[Math.floor(Math.random() * urls.length)];
}
