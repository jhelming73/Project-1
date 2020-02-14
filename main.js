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

document.onkeydown = function(e) {
	var theKey = e.key.toLowerCase();
	var theKeyCode = e.keyCode;

	if(theKeyCode >= 65 && theKeyCode <= 90 && allLettersGuessed.indexOf(theKey) === -1){
        allLettersGuessed.push(theKey);
     }
    }
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
			// clearWordAndGuesses();
			randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)];
		} else {
			guessCountRemaining.innerHTML = guessesRemaining;
		}
    }
		// var html = "";
		// for(var i = 0; i < allLettersGuessed.length; i++) {
		// 	if(randomWord.indexOf(allLettersGuessed[i]) === -1) {
		// 		html += allLettersGuessed[i];
		// 	}
		// }
        // lettersGuessed.innerHTML = html;
        // }
    
