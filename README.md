

# Let's Play Hangman - The Sports Edition!


## Instructions how to play:
From the pieces of sport equipment pictured, review the number of missing letters to correctly guess the sport in question. Guess correctly, that letter is shown in the correct place on the word in question. Guess incorrectly, then that letter is shown under the "Letters Already Guessed" location to try another guessed letter. If you are able to guess the sport word in question - watch the confetti fly!

## Technologies Used in making this game:
- **Command Line**: used for interacting with the computer, navigating the filesystem.
- **Source Control**: used for interaction, management and upload changes on code to Git repository
- **Visual Studio Code**: used for coding with Html, CSS, JQuery and JavaScript
- **Google Chrome Web Browser**: used for launching the website
- **Google Chrome Developer Tools**: used to debug and solve problems in the code


### Technical Requirements

The hangman game full-fill's the following requirements:

- Renders in the browser ✔
- Includes separate HTML / CSS / JavaScript files ✔
- Uses Javascript for DOM manipulation ✔
- Be deployed online, using [Github Project pages](https://pages.github.com)
  and/or to a custom domain. ✔
- Uses semantic markup for HTML and CSS (adhere to best practices) ✔
- HTML/CSS passes the [HTML5 Validator](https://html5.validator.nu)✔
  and [CSS Validator](https://jigsaw.w3.org/css-validator/)✔
- The git repository hosted on Github with frequent commits dating back to the
  very beginning of the project ✔

### Approach Taken:
 - I decided to go with a hangman game with a version of guessing the name of the sport equipment in the shown picture. I started out drawing a wireframe to map out the screen design. I believed the game would be easy to understand by showing a picture of the sport equipment and then show an underscore for the number of letters for the word to guess. As each correct or incorrect letter is guessed, the guessed letter would appear in the appropriate location. If the user guesses the work incorrectly and using all guesses remaining they are presented a pop-up alert indicating their game is over. If the user guesses corretly, they get a shower of confetti on the screen! 

### Unsolved Problems:
- Pop-up window displaying "Game Over" alert showing before last letter is populated in word to guess.


#### Future Plans:

- Add winning and loosing scoring logic.
- Remove pop-up for displaying "Game Over".

Play the game here from the Github repo:
[Play now!](https://jhelming73.github.io/Project-1/)