    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessCount = 10;
    var userGuess = "";
    var wrongGuesses = "";
    var keyWord = "";
    var newGuess = true;
    var words = ["abcd", "efgh", "ijkl", "mnop", "qrst", "uvw", "xy", "z"];
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wordSelected = false;

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {
      // Determines which key was pressed.  Make sure it is a letter.
      // for (var i = letters.length - 1; i >= 0; i--) {
        // if (event.key === letters[i]) {
          var userGuess = event.key;
        // }
      // }


      // Randomly select new word from the words[] array
      // if (wordSelected === false) {
        // keyWord = words[Math.floor(Math.random() * words.length)];
        // wordSelected = true;
      // }

      // Make sure the letter hasnt been guessed before.
      // for (var i = 0; i < wrongGuesses.length; i++) {
        // if ( userGuess === wrongGuesses[i]){
          // newGuess = false;
        // } 
      // }

      // This logic determines the outcome of the game (win/loss), and increments the appropriate number, clears guessed letters, resets guess count.
      // if(newGuess) {
        // for (var i = keyWord.length - 1; i >= 0; i--) {
          // if (userGuess.toLowerCase() === keyWord[i]) {
            //insert correct guess logic
          // } else if (guessCount > 1){
          	// wrongGuesses += userGuess;
          	// guessCount--;

        //   } else {
        //   	losses++;
        //   	guessCount = 10;
        //   	wrongGuesses = "";
        //   	userGuess = "";
        //   	keyWord = "";
        //   }
        // }
      // } else {
      //   newGuess = true;
      // }

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<h1>Hangman</h1>" +
          "<p>Press any key to get started!</p>" +
          "<p>Wins: " + userGuess + "</p>" +
          "<p>Current Word</p>" +
          "<p>" + currentWord + "</p>" +
          "<p>Guesses Left: " + guessCount + "</p>" +
          "<p>Letters already guessed: " + wrongGuesses + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    };