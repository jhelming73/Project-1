console.log("Running")

let wordInPlay = document.querySelector("#wordInPlay");
let wrongLetterAudio = document.querySelector('#wwrongLetterAudio')
let wordInFullAudio = document.querySelector('#wordInFullAudio')
let lettersGuessed = document.querySelector('#wrongGuess')

let sportsToGuess = ['football', "basketball", "soccer", "golf", "tennis", "vollyball", "baseball"]

let randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)]

var allLettersGuessed = [];


function createSportGuess() {
	let guessSport = "";
	for(let i = 0; i < randomSport.length; i++) {
		if(allLettersGuessed.indexOf(randomSport[i]) !== -1 || randomSport[i] === " ") {
			guessSport += randomWord[i];
		} else {
			guessSport += "_";
		}
	}
	wordInPlay.innerHTML = guessSport;
}

createSportGuess();