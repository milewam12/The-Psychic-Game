// GLOBAL VARIABLES
// ---------------------------------------------------------------------------
// Arrays and Variables for holding data

var letters = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "k" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"];

var compuSelect = "";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = "";

document.onkeyup = function game () {
   
    var userGuess = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    console.log("User type:", userGuess);

     var computerRandom = letters[Math.floor(Math.random()* letters.length )];
     console.log("computer", computerRandom);

 
     if (userGuess== letters || userGuess== computerRandom) {
         wins++;
    } else{
        losses++;
    }
    if(userGuess !== letters || userGuess !== computerRandom) {
        for (var i = 0; i < 11; i++) {
            var guessesLeft = i - losses;
            
        }
    }
    if (guessesLeft < 0){
    
        guessesLeft = 9;
        wins = 0;
        losses = 0;
        userGuess = " ";
document.getElementById("youlost").innerHTML = "<p> <strong>You've lost!</strong></p> "
    }

    // if (guessesLeft > 8){
    //      document.getElementById("again").innerHTML = "<p> <strong>Start over</strong></p> "
    // }
    

// changing HTML

document.getElementById("win").innerHTML = "<p>Wins: " + wins + "</p>" 
document.getElementById("losses").innerHTML = "<p>Losses: " + losses + "</p>" 
document.getElementById("left").innerHTML = "<p>Guesses Left: " + guessesLeft + "</p>" 
document.getElementById("guesses").innerHTML = "<p>Your guesses so far: " + userGuess + "</p>" 


    //  if(userGuess !== letters || userGuess== computerRandom){
    //      alert("Please type a LETTER")
    //  }
    // console.log( "computer" ,computerRandom);



}






 