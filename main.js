console.log("Running")

let wordInPlay = document.querySelector('#wordInPlay');
let wrongLetterAudio = document.querySelector('#wrongLetterAudio')
let wordInFullAudio = document.querySelector('#wordInFullAudio')
let lettersGuessed = document.querySelector('#wrongGuess')
let guessCountElement = document.querySelector('#guessCount')

let sportsToGuess = ["football", "basketball", "soccer", "golf", "tennis", "volleyball", "baseball"]

let randomSport = sportsToGuess[Math.floor(Math.random() * sportsToGuess.length)];

let allLetterGuesses = [];
let maxGuessAttempts = 4;
let letterGuessCount = [];
let guessCount = 0;
let sportGuessed = false;
let correctLetters = 0;

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
    guessCountRemaining.innerHTML = maxGuessAttempts;
}

//New Game
function resetBoard() {
    location.reload()
}

createSportGuessBoard();

//Capture letters entered on keyboard

document.onkeydown = function(enterLetters) {
    let keyCodePressed = enterLetters.keyCode;
    let keyPressed = enterLetters.key;

	if(keyCodePressed >= 65 && keyCodePressed <= 90 && allLetterGuesses.indexOf(keyPressed) === -1){
        allLetterGuesses.push(keyPressed)
        
		if(randomSport.indexOf(keyPressed) === -1) {
            //letterGuessCount++;
            maxGuessAttempts--;
		    } else {
                correctLetters++
            }
    console.log(keyPressed)
    console.log(keyCodePressed)

                //Shows letters guessed on screen
                let guessSport = "";
                for(let i = 0; i < allLetterGuesses.length; i++) {
                    if(randomSport.indexOf(allLetterGuesses[i]) === -1) {
                        guessSport += allLetterGuesses[i];
                        // correctLetters++;
                        }
                    }
                    lettersGuessed.innerHTML = guessSport;
                    console.log(guessSport)
                }

        createSportGuessBoard();
        winCheck();
    }
        console.log(correctLetters)
	//guessesRemaining = maxGuessAttempts - letterGuessCount;


//If guessed correct word, show confetti animation"
function winCheck(){
    //if(guessesRemaining === 0)
    if(maxGuessAttempts === 0){
        //Bring's up pop-up
        window.alert("Game Over. Please select the Reset Board button to play again.")
    //Shows number of guesses remaining:
    } else {
        guessCountRemaining.innerHTML = maxGuessAttempts;  
    }
    let fullSportWord = document.querySelector("#wordInPlay").innerHTML;
    if (fullSportWord.indexOf("_") === -1) {
        confetti({
            particleCount: 300,
            startVelocity: 25,
            spread: 360,
            origin: {
              x: Math.random(),
              // since they fall down, start a bit higher than random
              y: Math.random() - 0.2
            }
          });
        //window.alert("You Won!");
        // window.alert("Win! Please reload the page to play again.");
        }
    }
   
