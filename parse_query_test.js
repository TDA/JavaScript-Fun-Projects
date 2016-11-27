var Parse = require('parse/node');
Parse.initialize("SAI_TEST");
Parse.serverURL = 'http://localhost:1337/parse'

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
var tableName = process.argv[2];

var GameScore = Parse.Object.extend(tableName);
var query = new Parse.Query(GameScore);

var params = process.argv.slice(3)

query.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      var consoleString = '';
      params.forEach((val, index) => {
        consoleString += ' - ' + object.get(val);
      });
      console.log(object.id + consoleString);
    }
  },
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
});
