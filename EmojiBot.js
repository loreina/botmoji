var emoji = require("emojilib/emojis.json")

var EmojiBot = (function () {
    function EmojiBot() {
    }
    EmojiBot.main = function (args) {
        console.info(EmojiBot.emoji("oh joy"));
    };
    EmojiBot.emoji = function (phrase) {
        var newPhrase = phrase.split(" ");
        var builder = { str: "", toString: function () { return this.str; } };
        for (var i = 0; i < newPhrase.length; i++) {
            if (emoji[newPhrase[i]]) {
                newPhrase[i] += emoji[newPhrase[i]].char;
            }
           
        }
        return newPhrase.join(" ");
    };
    return EmojiBot;
}());
EmojiBot["__class"] = "EmojiBot";
EmojiBot.main(null);
