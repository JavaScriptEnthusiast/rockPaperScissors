function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    const outcome = `It's a tie D:`;
    return outcome;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    const outcome = "Sorry but you lost D:";
    return outcome;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    const outcome = "Congrats you won!";
    return outcome;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    const outcome = `Dang you lost D:`;
    return outcome;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    const outcome = `Congrats You Win!`;
    return outcome;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    const outcome = `it's a tie D:`;
    return outcome;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    const outcome = `Dang you lost  D:`;
    return outcome;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    const outcome = `Congrats you won!`;
    return outcome;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    const outcome = `it's a tie  D:`;
    return outcome;
  }
}
const compArray = ["rock", "paper", "scissors"];
function playerPlay(input) {
  return input.toLowerCase();
}
for (let i = 0; i < 5; i++) {
  const inputOne = prompt("What is your choice? Rock, Paper, or Scissors?");
  function computerPlay() {
    return compArray[Math.floor(Math.random() * compArray.length)];
  }

  const playerSelection = playerPlay(inputOne);
  const computerSelection = computerPlay();
  const gameRound = playRound(playerSelection, computerSelection);

  function game() {
    console.log(`Round ${i + 1}: ${gameRound}`);
  }
  game();
  computerPlay();
}
