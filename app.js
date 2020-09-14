const beatsMap = {
  'Rock': 'Scissors',
  'Paper': 'Rock',
  'Scissors': 'Paper'
};

function computerPlay() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  // Reformat player selection.
  playerSelection = playerSelection.toLowerCase();
  playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  let result = "";
  if (beatsMap[playerSelection] == computerSelection) {
    result = `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (beatsMap[computerSelection] == playerSelection) {
    result = `You lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    result = `Tie! You both threw ${playerSelection}`;
  }

  return result;
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(prompt(), computerPlay()));
  }
}

game();
