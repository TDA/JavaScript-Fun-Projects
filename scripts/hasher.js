/**
 * Created by schandramouli on 11/5/15.
 */

function hashCode(str) {
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    //hash = ((hash << 5) - hash) + char; /* is the same as hash * 31 + char */
    hash = hash * 31 + char;
    hash = hash & hash; // this has destructive nature, and we can avoid it for local testing
    console.log(hash);
  }
  return hash;
}

hashCode("Dragon123@");
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
  else length = str.toString().length;
  var arrayValues = [];
  for (var i = 0; i < length - 1 && hash > 31; i++) {
    hash = hash / (31);
    arrayValues.push(hash);
    console.log(hash);
  }
  firstLetter = Math.floor(Math.floor(arrayValues[arrayValues.length - 2]) - arrayValues[arrayValues.length - 1]);
  console.log(String.fromCharCode(firstLetter));
  secondLetter = Math.floor(arrayValues[arrayValues.length - 3]) - Math.ceil(arrayValues[arrayValues.length - 1]) - firstLetter * 31;
  console.log(String.fromCharCode(secondLetter));
  thirdLetter = Math.floor(arrayValues[arrayValues.length - 4]) - Math.ceil(arrayValues[arrayValues.length - 1]) - Math.floor(arrayValues[arrayValues.length - 3] - Math.ceil(arrayValues[arrayValues.length - 1])) * 31;
  console.log(String.fromCharCode(thirdLetter));
  return hash;
}

reverseHashCode("1384014081");