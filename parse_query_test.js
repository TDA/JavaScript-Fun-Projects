var Parse = require('parse/node');
Parse.initialize("SAI_TEST");
Parse.serverURL = 'http://localhost:1337/parse'

var GameScore = Parse.Object.extend("Survey");
var query = new Parse.Query(GameScore);

query.find({
  success: function(results) {
    console.log("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      console.log(object.id + ' - ' + object.get('name') + ' - ' + object.get('mail') + ' - ' + object.get('playerName'));
    }
  },
  error: function(error) {
    console.log("Error: " + error.code + " " + error.message);
  }
});
