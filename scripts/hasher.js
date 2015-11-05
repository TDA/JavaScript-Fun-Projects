/**
 * Created by schandramouli on 11/5/15.
 */

function hashCode(str) {
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    //hash = ((hash << 5) - hash) + char; /* hash * 31 + char */
    hash = hash * 31 + char;
    //hash = hash & hash; // Convert to 32bit integer
    console.log(hash);
  }
  return hash;
}

console.log(hashCode("Dragon123@"));
console.log("------------------------");
//var string = "Dragon123@";
//var sum = 0;
//for (var x = 0; x < string.length; x++) {
//  sum += string.charCodeAt(x);
//}
//console.log(sum);
function reverseHashCode(str) {
  var hash = str;
  var length = 0;
  if (str.length == 0) return 0;
  else length = str.length;

  hash = hash % (31 * length);
  return hash;
}

console.log(reverseHashCode("-2910953215"));