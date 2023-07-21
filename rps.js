let playerSelection
let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") {
    const outcome = `It's a tie D:`
    return outcome
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    const outcome = "Sorry but you lost D:"
    computerScore++
    return outcome
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    const outcome = "Congrats you won!"
    return outcome
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    const outcome = `Dang you lost D:`
    computerScore++
    return outcome
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    const outcome = `Congrats You Win!`
    return outcome
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    const outcome = `it's a tie D:`
    return outcome
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    const outcome = `Dang you lost  D:`
    computerScore++
    return outcome
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    const outcome = `Congrats you won!`
    return outcome
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    const outcome = `it's a tie  D:`
    return outcome
  }
}
const compArray = ["rock", "paper", "scissors"]

function computerPlay() {
  return `${compArray[Math.floor(Math.random() * compArray.length)]}`
}
//remember to readd commputerPlay
const computerSelection = computerPlay()
const gameRound = playRound(playerSelection, computerSelection)

let playerSide = document.querySelector(".playerSide")
console.log(playerSide)
let computerSide = document.querySelector(".computerSide")
let resultScreen = document.querySelector(".resultScreen")

let rockSelection = document.querySelector(".rockbutton")

let paperSelection = document.querySelector(".paperbutton")

let scissorsSelection = document.querySelector(".scissorsbutton")
rockSelection.addEventListener("click", function () {
  playerSide.innerHTML = "rock"
  computerSide.innerHTML = computerPlay()
})
paperSelection.addEventListener("click", function () {
  playerSide.innerHTML = "paper"
})

scissorsSelection.addEventListener("click", function () {
  playerSide.innerHTML = "scissors"
})
