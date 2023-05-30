let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let randomBtn = document.getElementById('random');
let result = document.getElementsByClassName('result')[0];

let playerScoreUI = document.getElementById('player-score');
playerScoreUI.textContent = 0;

let computerScoreUI = document.getElementById('computer-score');
computerScoreUI.textContent = 0;

let playerScore = 0,
  computerScore = 0;

rockBtn.addEventListener('click', function () {
  result.textContent = playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', function () {
  resetGame();
  result.textContent = playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', function () {
  resetGame();
  result.textContent = playRound('scissors', getComputerChoice());
});

randomBtn.addEventListener('click', function () {
  resetGame();
  let randomChoice = getComputerChoice();
  result.textContent = playRound(randomChoice, getComputerChoice());
});

let choices = ['rock', 'paper', 'scissors'];

function selectRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getComputerChoice() {
  return selectRandom(choices);
}

let computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  let text = '';
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore += 1;
    computerScoreUI.textContent = computerScore;
    text = 'You loose! Paper beats rock';
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore += 1;
    playerScoreUI.textContent = playerScore;
    text = 'You win! Rock breaks scissors';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore += 1;
    playerScoreUI.textContent = playerScore;
    text = 'You win! Paper beats rock';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore += 1;
    computerScoreUI.textContent = computerScore;
    text = 'You loose! Scissors cuts paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    playerScoreUI.textContent = playerScore;
    text = 'You win! Scissors cuts paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore += 1;
    computerScoreUI.textContent = computerScore;
    text = 'You loose! Rock breaks scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore += 1;
    playerScoreUI.textContent = playerScore;
    text = 'You win! Scissors cuts paper';
  } else {
    text = `It's a tie ${playerSelection} vs ${computerSelection}`;
  }
  return text;
}

function checkPlayerInput(playerInput) {
  return playerInput === 'rock' ||
    playerInput === 'paper' ||
    playerInput === 'scissors'
    ? true
    : false;
}

function resetGame() {
  if (playerScore == 2) {
    // console.log('player ' + playerScore);
    alert('You won!');
  }

  if (computerScore == 2) {
    // console.log('computer ' + computerScore);
    alert('Computer won!');
  }

  if (playerScore == 5 || computerScore == 5) {
    playerScoreUI.textContent = playerScore = 0;
    computerScoreUI.textContent = computerScore = 0;
    result.textContent = '';
  }
}
