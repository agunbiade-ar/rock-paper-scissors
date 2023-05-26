const selectRandom = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
};

let choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return selectRandom(choices);
}

let computerChoice = getComputerChoice();
console.log("computer's selection is " + computerChoice);

function playRound(playerSelection, computerSelection) {
  // console.log('you chose ' + playerSelection);

  if (playerSelection === 'rock' && computerSelection == 'paper') {
    return 'You loose! Paper beats rock';
  } else if (playerSelection === 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock breaks scissors';
  } else if (playerSelection === 'paper' && computerSelection == 'rock') {
    return 'You win! Paper beats rock';
  } else if (playerSelection === 'paper' && computerSelection == 'scissors') {
    return 'You loose! Scissors cuts paper';
  } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
    return 'You win! Scissors cuts paper';
  } else if (playerSelection === 'scissors' && computerSelection == 'rock') {
    return 'You loose! Rock breaks scissors';
  } else if (playerSelection === 'scissors' && computerSelection == 'paper') {
    return 'You win! Scissors cuts paper';
  } else {
    return "It's a tie";
  }
}

let playerSelection;

function checkPlayerInput(playerInput) {
  return playerInput === 'rock' ||
    playerInput === 'paper' ||
    playerInput === 'scissors'
    ? true
    : false;
}

function game() {
  for (let i = 0; i < 5; i++) {
    do {
      playerSelection = prompt(
        'Enter your choice among rock, paper or scissors'
      ).toLowerCase();
    } while (!checkPlayerInput(playerSelection));
    console.log(playRound(playerSelection, computerChoice));
  }
}
game();
