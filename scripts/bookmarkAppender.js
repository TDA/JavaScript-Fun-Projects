/**
 * Created by schandramouli on 11/4/15.
 */


window.onload = function() {
  var appendString = '.ezproxy1.lib.asu.edu';
  var extensionsRegex = /(.*)(com|org|net)(.*)/i;

  var loc = window.location;
  console.log(loc);
  var matches = loc.toString().match(extensionsRegex);
  window.location = (matches[1] + matches[2] + appendString + matches[3]);
};