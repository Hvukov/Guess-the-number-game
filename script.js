//Declaring state variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
console.log(secretNum);
let score = 20;
let highscore = 0;

//Selecting html elements
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let scoreText = document.querySelector('.score');
let guess = document.querySelector('.guess');
let body = document.querySelector('body');
let highscoreText = document.querySelector('.highscore');

//Random color function
let randColor = function () {
  let r = Math.trunc(Math.random() * 256);
  let g = Math.trunc(Math.random() * 256);
  let b = Math.trunc(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

let displayMessage = function (msg) {
  message.textContent = msg;
};

//Implementing game logic & DOM manipulation
document.querySelector('.check').addEventListener('click', function () {
  let guessNum = Number(document.querySelector('.guess').value);

  //When there is no input!
  if (!guessNum) {
    // message.textContent = 'Enter a number!';
    displayMessage('Enter a number!');

    //When player wins!
  } else if (guessNum === secretNum) {
    displayMessage('🎈 You won the game! 🏆');

    number.textContent = secretNum;
    scoreText.textContent = ` ${score}`;

    body.style.backgroundColor = randColor();

    number.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreText.textContent = highscore;
    }
    //When guess is wrong!
  } else if (guessNum !== secretNum) {
    if (score > 1) {
      displayMessage(guessNum > secretNum ? '📈 Too High!' : '📉 Too Low!');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreText.textContent = 0;
    }
  }
});
//Implementing Again button which resets the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scoreText.textContent = score;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  guess.value = '';
  number.textContent = '?';
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
});