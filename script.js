'use strict';

//interface in HTML

//ID # & . for class
// console.log(document.querySelector('.message').textContent); // element from the page

//what is the DOM: stuctured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them . Each HTML element is 1 object
//document.querySelector() - document is entry point to DOM. HTML is usually the root, head and body two child elements (siblings)
// Whatever is in the HTML document also has to be in the DOM.
// We can manipulate in numerous ways

// DOM Methods and Properties for DOM manipulation is not part of JS
// DOM and DOM Methods are part of webAPI's (application programing interface) - liabraries also written in JS.
// Official DOM manipulation - works in all browsers

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //state variabl
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Whene there is no input
  if (!guess) {
    displayMessage('No Number! 😫');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🥳');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber
      //       ? '⬆️ Your guess is too high!'
      //       : '⬇️ Your guess is too low!';
      displayMessage(
        guess > secretNumber
          ? '⬆️ Your guess is too high!'
          : '⬇️ Your guess is too low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }

    //To reset the game
    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      displayMessage('Start Guessing...');
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    });
  }
});
