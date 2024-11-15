// elements for user input and result display
let userScore = 0;
let computerScore = 0;

let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissors = document.getElementById("scissors");
let Result = document.getElementById("result");
let Reset = document.getElementById("reset");
let Score = document.getElementById("score-text");

// function to generate computer's choice
function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// function to handle user choice
function userChoice(choice) {
  const compChoice = computerChoice();
  const winner = determineWinner(choice, compChoice);
  updateScore(winner);

  // function to determine the winner
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      document.getElementById("result-text").innerText = "Its a Tie";
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      document.getElementById("result-text").innerText = "User Wins!";
      return "User wins!";
    } else {
      document.getElementById("result-text").innerText = "Computer Wins!";
      return "Computer wins!";
    }
  }

  // function to update score
  function updateScore(winner) {
    if (winner === "User wins!") {
      userScore++;
    } else if (winner === "Computer wins!") {
      computerScore++;
    }
    Score.textContent = `Score: ${userScore} - ${computerScore}`;
  }
}

// add event listeners to each choice
Rock.addEventListener("click", function () {
  userChoice("rock");
});

Paper.addEventListener("click", function () {
  userChoice("paper");
});

Scissors.addEventListener("click", function () {
  userChoice("scissors");
});

// reset button functionality
Reset.addEventListener("click", function () {
  Score.textContent = "Resetting...";
  Reset.disabled = true; // Disable the reset button during loading

  setTimeout(function () {
    userScore = 0;
    computerScore = 0;
    Score.textContent = "Score: 0 - 0";
    Reset.disabled = false; // Re-enable the reset button
  }, 1500); // 1.5 seconds loading time
});
