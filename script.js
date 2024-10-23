const humanScore = 0;
const computerScore = 0;

const options = ['rock', 'paper', 'scissors'];

function getComputerChoice(options) {
  return Math.floor(Math.random() * options);
}

console.log(getComputerChoice(3));

function getHumanChoice() {
  const prompt = prompt('Rock, Paper, Scissors');
}

console.log(prompt);

function playRound(humanChoice, computerChoice) {
  // code here
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

// function playGame() {}
