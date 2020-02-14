console.log("Running")

let wordInPlay = document.querySelector("#wordInPlay");
let wrongLetterAudio = document.querySelector('#wrongLetterAudio')
let wordInFullAudio = document.querySelector('#wordInFullAudio')
let lettersGuessed = document.querySelector('#wrongGuess')
let guessCountRemaining = document.querySelector('#guessCountRemaining')

let sportsToGuess = ['football', "basketball", "soccer", "golf", "tennis", "vollyball", "baseball"]

let randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)]

let allLetterGuesses = [];
const maxGuessAttempts = 6;
let letterGuessCount = [];
let guessCount = 0;

function createSportGuessBoard() {
	let guessSport = " ";
	for(let i = 0; i < randomSport.length; i++) {
		if(allLetterGuesses.indexOf(randomSport[i]) !== -1 || randomSport[i] === " ") {
			guessSport += randomSport[i];
		} else {
			guessSport += "_";
		}
	}
	wordInPlay.innerHTML = guessSport;
}
createSportGuessBoard();

//Capture letters entered on keyboard

document.onkeydown = function(enterLetters) {
    let keyCodePressed = enterLetters.keyCode;
    let keyPressed = enterLetters.key;

	if(keyCodePressed >= 65 && keyCodePressed <= 90 && allLetterGuesses.indexOf(keyPressed) === -1){
        allLetterGuesses.push(keyPressed);
        }
		if(randomSport.indexOf(keyPressed) === -1) {
			letterGuessCount++;
			// wordInFullAudio.currentTime = 0;
			// wordInFullAudio.pause();
			// wrongLetterAudio.currentTime = 0;
			// wrongLetterAudio.play();
		    }
    console.log(keyPressed)
    console.log(keyCodePressed)

	guessesRemaining = maxGuessAttempts - letterGuessCount;

		if(guessesRemaining === 0) {
            clearBoard();
            randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)];
            window.alert("Game Over")
		} else {
            guessCountRemaining.innerHTML = guessesRemaining;  
		}
    
		var guessSport = " ";
		for(var i = 0; i < allLetterGuesses.length; i++) {
			if(randomSport.indexOf(allLetterGuesses[i]) === -1) {
				guessSport += allLetterGuesses[i];
			    }
		    }
        lettersGuessed.innerHTML = guessSport;
        }

//New Game
function clearBoard() {
    guessCountRemaining.innerHTML = maxGuessAttempts;
    guessCount = 0;
    guessCountRemaining = maxGuessAttempts - letterGuessCount;
    allLettersGuessed = [];
    lettersGuessed.innerHTML = "";
}
    
