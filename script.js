'use strict';
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'You win!!';
//document.querySelector('.guess').value = 23;
//document.querySelector('.score').textContent = 'You win!!';
//document.querySelector('.score').textContent = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//document.querySelector('.number').textContent = secretNumber;

//For making our code DRY. Refactoring the code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If nothing or 0 is entered as input and checked
  if (!guess) {
    //document.querySelector('.message').textContent ='No number or you have entered 0! 😉';
    displayMessage('No number or you have entered 0! 😉');
  }
  //Correct number guess
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!🎉✨';
    displayMessage('Correct Number!🎉✨');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //green
    document.querySelector('.number').style.width = '30rem';
    // if (
    //   document.querySelector('.score').textContent >
    //   document.querySelector('.highscore').textContent
    // )
    //   document.querySelector('.highscore').textContent =
    //     document.querySelector('.score').textContent;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber + 2) {
    // document.querySelector('.message').textContent = 'Too High!';
    displayMessage('Too High!');
    // document.querySelector('.score').textContent--;
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lose the game!.😢😢';
      displayMessage('You lose the game!.😢😢');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber - 2) {
    //  document.querySelector('.message').textContent = 'Too Low!';
    displayMessage('Too Low!');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent ='You lose the game!.😢😢';
      displayMessage('You lose the game!.😢😢');
      document.querySelector('.score').textContent = 0;
    }
    // document.querySelector('.score').textContent--;
  } else {
    //document.querySelector('.message').textContent = 'You are near dear😍';
    displayMessage('You are near dear😍');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //  document.querySelector('.message').textContent = 'You lose the game!.😢😢';
      displayMessage('You lose the game!.😢😢');
      document.querySelector('.score').textContent = 0;
    }
    //document.querySelector('.score').textContent--;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#171817';
  document.querySelector('.number').style.width = '15rem';
  // score = 20;
  // document.querySelector('score').textContent = 20;
});
