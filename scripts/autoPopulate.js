/**
 * Created by schandramouli on 10/10/15.
 */

var names = ['sai', 'swetha', 'shravan', 'dilip'];
var clubNames = ['Activities', 'Arts', 'Science', 'Robotics'];
var schoolNames = ['Central High', 'Central Low', 'Central Mid', 'Central down'];
var itemNames = ['Embroidery Machine', 'Sewing Machine', 'T-Shirts'];
var message = "Hey, Thanks a lot, Much wow, such great";

function randID() {
  return "#" + Math.floor(Math.random() * 9999);
}

function rand(names) {
  return names[Math.floor(Math.random() * names.length)];
}

document.querySelector("#field11").value = rand(schoolNames);
document.querySelector("#field13").value = rand(clubNames);
document.querySelector("#field15").value = rand(itemNames);
document.querySelector("#field21").value = randID();
document.querySelector("#field1").value = message;

//document.querySelector("#saveForm");
