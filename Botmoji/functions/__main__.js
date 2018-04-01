var emoji = require("../emojis.js")
/**
* A basic Hello World function
* @param {string} phrase Who you're saying hello to
* @returns {any}
*/
module.exports = (phrase = 'happy', context, callback) => {

  var newPhrase = phrase.split(" ");
  for (var i = 0; i < newPhrase.length; i++) {
    if (emoji[newPhrase[i]]) {
      newPhrase[i] += emoji[newPhrase[i]].char;
    }
  }
  newPhrase = newPhrase.join(" ");
  return callback(null, newPhrase);

};
