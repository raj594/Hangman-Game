    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessCount = 10;
    var userGuess = "";
    var wrongGuesses = "";
    var letter = "";
    var newGuess = true;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var words = ["cowboys", "redskins", "giants", "eagles", "texans", "colts", "jaguars", "titans", "packers", "lions", "bears", "vikings", "ravens", "steelers", "browns", "bengals", "falcons", "saints", "buccaneers", "panthers", "jets", "dolphins", "patriots", "bills", "fourtyniners", "seahawks", "raiders", "chargers", "chiefs", "broncos", "rams", "cardinals"];
    var keyWord = "";
    var blockedWord = "";
    var wordSelected = false;
    var correctGuess = false;
    var letter = "";

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed. Makes sure it is a letter.
      for (var i = 0; i < letters.length; i++) {
        if (event.key === letters[i]) {
          var userGuess = event.key;
        };
        if (event.key.toLowerCase() === letters[i]) {
          var userGuess = event.key.toLowerCase();
        };
      }


      checkForDuplicateGuesses(wrongGuesses, userGuess);
      chooseWord();

      // This logic determines the outcome of the game (win/loss), and increments the appropriate number, clears guessed letters, resets guess count.
      if(newGuess) {
        for (var i = 0; i < keyWord.length; i++) {
            if (userGuess.toLowerCase() == keyWord[i].toLowerCase()) {
              blockedWord = blockedWord.substr(0, i) + userGuess + blockedWord.substr(i + 1);
              correctGuess = true;
            }
          }
        if (guessCount > 1 && correctGuess === false){
            wrongGuesses += userGuess;
            guessCount--;
        } else if (guessCount === 1 && correctGuess === false) {
            losses++;
            guessCount = 10;
            wrongGuesses = "";
            userGuess = "";
            keyWord = "";
            blockedWord = "";
            wordSelected = false;
            chooseWord();
        } else if (correctGuess === true && blockedWord.toLowerCase() == keyWord.toLowerCase()) {
            wins++;
            guessCount = 10;
            wrongGuesses = "";
            userGuess = "";
            blockedWord = "";
            wordSelected = false;
            chooseWord();
            correctGuess = false;
        } else if (correctGuess === true) {
            correctGuess = false;
          }
      } else {
        newGuess = true;
      };

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<h1>NFL Hangman</h1>" +
          "<p>Press any key to get started!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Current Word: " + blockedWord.split('').join(' ') + "</p>" +
          "<p>Guesses Left: " + guessCount + "</p>" +
          "<p>Letters already guessed: " + wrongGuesses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      
    };

function checkForDuplicateGuesses(wrong, guess) {

      // Makes sure letter hasnt been tried before
      for (var i = 0; i < wrong.length; i++) {
        if (guess === wrong[i]){
          newGuess = false;
        } 
      };
};
function chooseWord() {
      // Randomly chooses a word from the words[] array for hangman.
      if (wordSelected === false){
        keyWord = words[Math.floor(Math.random() * words.length)];
        for (var i = keyWord.length - 1; i >= 0; i--) {
          blockedWord += "_";
        }
        wordSelected = true;
      };
};



function retrieveUserGuess() {


};

