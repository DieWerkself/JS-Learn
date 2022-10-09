'use strict';

/*

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

document.querySelector('.guess').value = 21;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number, or number = 0');
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
    downscoreFunc();
  } else if (guess === secretNumber) {
    displayMessage('Correct!');
    winningGame();
  }
});

function downscoreFunc() {
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lose!');
    document.querySelector('.score').textContent = 0;
  }
}

function winningGame() {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else {
    document.querySelector('.highscore').textContent = highscore;
  }
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '100%';
  document.querySelector('.number').textContent = secretNumber;
}
