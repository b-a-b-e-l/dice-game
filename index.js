let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const scoreBoard1 = document.getElementById("player1Scoreboard");
const scoreBoard2 = document.getElementById("player2Scoreboard");
const dices = document.getElementById("dice-box");
const gameMessage = document.getElementById("message");
const rollButton = document.getElementById("rollBtn");
const resetButton = document.getElementById("resetBtn");
const container = document.getElementById("container");

function endGame() {
  rollButton.style.display = "none";
  resetButton.style.display = "block";
  container.classList.add("glowreset");
  resetButton.classList.add("glowreset");
}

function displayDice(diceValue) {
  let diceImage = "images/" + diceValue + ".png";
  dices.innerHTML = `<img src=${diceImage} class="dice" alt="dice number ${diceValue}" />`;
}

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  if (player1Turn) {
    player1Score += diceValue;
    scoreBoard1.textContent = player1Score;
    displayDice(diceValue);
    gameMessage.textContent = "TURN: Player 2";
    gameMessage.classList.remove("player1");
    gameMessage.classList.add("player2");
  } else {
    player2Score += diceValue;
    scoreBoard2.textContent = player2Score;
    displayDice(diceValue);
    gameMessage.textContent = "TURN: Player 1";
    gameMessage.classList.remove("player2");
    gameMessage.classList.add("player1");
  }

  if (player1Score >= 20) {
    gameMessage.textContent = "WINNER: Player 1!";
    gameMessage.classList.remove("player1");
    gameMessage.classList.add("player2");
    endGame();
  } else if (player2Score >= 20) {
    gameMessage.textContent = "WINNER: Player 2!";
    gameMessage.classList.remove("player2");
    gameMessage.classList.add("player1");
    endGame();
  }
  player1Turn = !player1Turn;
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  gameMessage.textContent = "START: Player 1";
  rollButton.style.display = "block";
  resetButton.style.display = "none";
  container.classList.remove("glowreset");
}

rollButton.addEventListener("click", rollDice);

resetButton.addEventListener("click", resetGame);
