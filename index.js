let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const scoreBoard1 = document.getElementById("player1Scoreboard");
const scoreBoard2 = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const gameMessage = document.getElementById("message");
const rollButton = document.getElementById("rollBtn");
const resetButton = document.getElementById("resetBtn");

function endGame() {
  rollButton.style.display = "none";
  resetButton.style.display = "block";
}

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += diceValue;
    scoreBoard1.textContent = player1Score;
    player1Dice.textContent = diceValue;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    gameMessage.textContent = "TURN: Player 2";
  } else {
    player2Score += diceValue;
    scoreBoard2.textContent = player2Score;
    player2Dice.textContent = diceValue;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    gameMessage.textContent = "TURN: Player 1";
  }

  if (player1Score >= 20) {
    gameMessage.textContent = "WINNER: Player 1!";
    endGame();
  } else if (player2Score >= 20) {
    gameMessage.textContent = "WINNER: Player 2!";
    endGame();
  }
  player1Turn = !player1Turn;
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  player1Dice.textContent = "-";
  player2Dice.textContent = "-";
  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  gameMessage.textContent = "START: Player 1";
  rollButton.style.display = "block";
  resetButton.style.display = "none";
}

rollButton.addEventListener("click", rollDice);

resetButton.addEventListener("click", resetGame);
