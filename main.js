console.log("Running")

let wordInPlay = document.querySelector('#wordInPlay');
let wrongLetterAudio = document.querySelector('#wrongLetterAudio')
let wordInFullAudio = document.querySelector('#wordInFullAudio')
let lettersGuessed = document.querySelector('#wrongGuess')
let guessCountElement = document.querySelector('#guessCount')

let sportsToGuess = ["football", "basketball", "soccer", "golf", "tennis", "vollyball", "baseball"]

let randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)];

let allLetterGuesses = [];
const maxGuessAttempts = 4;
let letterGuessCount = [];
let guessCount = 0;
// let sportGuessed = false;

//Add correct guess letters to current sport to guess
function createSportGuessBoard() {
	let guessSports = "";
	for(let i = 0; i < randomSport.length; i++) {        
		if(allLetterGuesses.indexOf(randomSport[i]) !== -1 || randomSport[i] === " ") {
			guessSports += randomSport[i];
		} else {
			guessSports += "_";
		}
    }
    wordInPlay.innerHTML = guessSports;
}

//New Game
// function clearBoard() {
   
// }

createSportGuessBoard();

//Capture letters entered on keyboard

document.onkeydown = function(enterLetters) {
    let keyCodePressed = enterLetters.keyCode;
    let keyPressed = enterLetters.key;

	if(keyCodePressed >= 65 && keyCodePressed <= 90 && allLetterGuesses.indexOf(keyPressed) === -1){
        allLetterGuesses.push(keyPressed)//.toLowerCase();
        
		if(randomSport.indexOf(keyPressed) === -1) {
			letterGuessCount++;
		    }
    console.log(keyPressed)
    console.log(keyCodePressed)

	guessesRemaining = maxGuessAttempts - letterGuessCount;

                if(guessesRemaining === -1) {
                    //clearBoard();
                    randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)].toLowerCase();
                    //Bring's up pop-up
                    window.alert("Game Over")
               //Shows number of guesses remaining:
                } else {
                    guessCountRemaining.innerHTML = guessesRemaining;  
                }
        //Shows letters guessed on screen
		let guessSport = "";
            for(let i = 0; i < allLetterGuesses.length; i++) {
                if(randomSport.indexOf(allLetterGuesses[i]) === -1) {
                    guessSport += allLetterGuesses[i].toUpperCase();
                    }
                }
                lettersGuessed.innerHTML = guessSport;
             }

        //If guessed correct word, show alert "You Won!"

        createSportGuessBoard();

//         let fullSportWord = document.querySelector("#wordInPlay").innerHTML;
//             if (fullSportWord.indexOf("_") === -1) {
//                 sportGuessed = true;
//         }
// }
        
//         if(sportGuessed) {
//             // wordInFullAudio.currentTime = 0;
//             // wordInFullAudio.play();
//             sportGuessed= false;
//             randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)].toLowerCase();
//             createSportGuessBoard();
        }
