//word that can be guessed
var word = ["leonardo", "michelangelo", "donatelo", "raphael", "splinter", "schredder", "bebop", "rocksteady", "april", "thefoot", "karai"]

//computer chooses a word from the word array and save it as a variable
    //word choosen at random 
    function pickrandomword() {
        return Math.floor(Math.random() * Math.floor(11));
      }
      console.log(pickrandomword());

      console.log(word[4]);
      var randomWord = word[Math.floor(Math.random() * Math.floor(11))];
      console.log(randomWord);

//compare keys pressed to letter in the stored word (var)

//display letter that the user has guessed correctly and incorrectly 

//user has 15 guesses

//if no more guesses you lose the round and display you lose. point count

//gamne resrtarts

//



//function that collects key strokes
document.onkeyup = function(event) {
    var userGuess = event.key.toLocaleLowerCase();
console.log(userGuess);
}