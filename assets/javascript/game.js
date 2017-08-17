    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessCount = 10;
    var userGuess = "";
    var wrongGuesses = "";
    var letter = "";
    var newGuess = true;
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var words = ["aa", "eef", "ijk", "mmnop"];
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
      }

      // Makes sure letter hasnt been tried before
      for (var i = 0; i < wrongGuesses.length; i++) {
        if ( userGuess === wrongGuesses[i]){
          newGuess = false;
        } 
      }

      // Randomly chooses a word from the words[] array for hangman.
      if (wordSelected === false){
        keyWord = words[Math.floor(Math.random() * words.length)];
        for (var i = keyWord.length - 1; i >= 0; i--) {
          blockedWord += "_";
        }
        wordSelected = true;
      };

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
        } else if (correctGuess === true && blockedWord.toLowerCase() == keyWord.toLowerCase()) {
            wins++;
            guessCount = 10;
            wrongGuesses = "";
            userGuess = "";
            keyWord = "";
            blockedWord = ""
            wordSelected = false;
            correctGuess = false;
        } else if (correctGuess === true) {
            correctGuess = false;
          }
      } else {
        newGuess = true;
      };

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<h1>Hangman</h1>" +
          "<p>Press any key to get started!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Current Word: " + blockedWord + "</p>" +
          "<p>Guesses Left: " + guessCount + "</p>" +
          "<p>Letters already guessed: " + wrongGuesses + "</p>" +
          "<p>" + keyWord + "</p>" +
          "<p>" + letter + "</p>"+
          "<p>" + userGuess + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
      
    };