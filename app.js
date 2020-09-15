const beatsMap = {
  'Rock': 'Scissors',
  'Paper': 'Rock',
  'Scissors': 'Paper'
};

const scoreBoard = {
  'rounds': 0,
  'player': 0,
  'cpu': 0
};


const options = document.querySelectorAll('.option')
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
  scoreBoard.rounds = 0;
  scoreBoard.player = 0;
  scoreBoard.cpu = 0;
  updateGameStats();
});

options.forEach((div) => {
  div.addEventListener('click', buttonEventListener);
});


function buttonEventListener(e) {
  if (this.classList.contains('option')) {
    const result = playRound(this.id, computerPlay());
    const resultDiv = document.querySelector('#game-result');
    resultDiv.innerHTML = result.result;
    resultDiv.style.color = result.color;

    document.querySelector('#game-message').textContent = result.msg;
    updateGameStats();
  }
}

function updateGameStats() {
    document.querySelector('#display-title').firstElementChild.textContent = `Round ${scoreBoard.rounds}`;
    document.querySelector('#player-score').textContent = scoreBoard.player;
    document.querySelector('#cpu-score').textContent = scoreBoard.cpu;
}


function computerPlay() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  // Reformat player selection.
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  let result = 'You tied!';
  let msg = `You both threw ${playerSelection}.`;
  let color = 'black';
  if (beatsMap[playerSelection] == computerSelection) {
    result = `You win!`;
    msg = `${playerSelection} beats ${computerSelection}!`;
    color = 'green';
    scoreBoard.player += 1;
  } else if (beatsMap[computerSelection] == playerSelection) {
    result = `You lose!`;
    msg = `${computerSelection} beats ${playerSelection}.`;
    color = 'red';
    scoreBoard.cpu += 1;
  } 

  scoreBoard.rounds += 1;

  return {
    'result': result,
    'msg': msg,
    'color': color
  };
}
