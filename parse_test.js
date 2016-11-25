var Parse = require('parse/node');
Parse.initialize("SAI_TEST");
Parse.serverURL = 'http://localhost:1337/parse'

var GameScore = Parse.Object.extend("GameScore");
var gameScore = new GameScore();

gameScore.set("score", 9999);
gameScore.set("playerName", "Sai Pc");

gameScore.save(null, {
  success: function(gameScore) {
    // Execute any logic that should take place after the object is saved.
    console.log('New object created with objectId: ' + gameScore.id);
  },
  error: function(gameScore, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    console.log('Failed to create new object, with error code: ' + error.message);
  }
});

