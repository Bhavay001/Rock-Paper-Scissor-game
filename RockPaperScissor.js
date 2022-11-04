const totalScore = { computerScore: 0, playerScore: 0 }

function getComputerChoice() {
  const randomChoice = (arr) => {
    let randomindex = Math.floor(Math.random() * 3);
    return arr[randomindex];
  }
  const arr = ['Rock', 'Paper', 'Scissors'];

  return randomChoice(arr);
}


function getResult(playerChoice, computerChoice) {

  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  }

  else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1;

  }
  else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1;

  }
  else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1;
  }

  else {
    score = -1;
  }

  return score

}

function showResult(score, playerChoice, computerChoice) {

  let result = document.getElementById('result');
  let hands = document.getElementById('hands');
  let playerscore = document.getElementById('player-score');

  hands.innerText = `👨‍🦰 ${playerChoice} vs 🤖 ${computerChoice}`;

  playerscore.innerText = `Your Score: ${totalScore['playerScore']}`;
  if (score == -1) {
    result.innerText = 'You Lose!'
  }
  else if (score == 1) {
    result.innerText = 'You Win!'
  }
  else if (score == 0) {
    result.innerText = "It's a Draw !"
  }

}

function onClickRPS(playerChoice) {
  let ComputerChoice = getComputerChoice();
  let score = getResult(playerChoice, ComputerChoice);

  totalScore['playerScore'] += score

  showResult(score, playerChoice, ComputerChoice);
}

function playGame() {

  const rpsButton = document.querySelectorAll(".rpsButton");

  rpsButton.forEach(rpsButtons => {
    rpsButtons.onclick = () => {
      onClickRPS(rpsButtons.value);
    }
  });

  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame(totalScore);

}


function endGame(totalScore) {

  totalScore['computerScore'] = 0;
  totalScore['playerScore'] = 0;

  let result = document.getElementById('result');
  let hands = document.getElementById('hands');
  let playerscore = document.getElementById('player-score');

  result.innerText = ""
  hands.innerText = ""
  playerscore.innerText = ""
}

playGame()