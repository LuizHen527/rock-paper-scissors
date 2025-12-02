function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber <= 3) {
        return "rock";
    } else if (randomNumber <= 6) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper or scissors:").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let winner = "none";

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("You win! Rock beat scissors.");
            winner = "human";
        } else {
            alert("You lose! Paper beat rock");
            winner = "computer";
        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert("You win! Paper beat rock.");
            winner = "human";
        } else {
            alert("You lose! Scissor beat paper.");
            winner = "computer";
        } 
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            alert("You win! Scissors beat paper.");
            winner = "human";
        } else {
            alert("You lose! Rock beat scissors.");
            winner = "computer";
        }
    }


    return winner;

}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        let winner = playRound(humanChoice, computerChoice);

        if (winner === "human") {
            humanScore++;
        } else {
            computerScore++;
        }
    }

    let winnerMessage = humanScore > computerScore ? "You won the game!" : "You lost the game!"

    alert(`${winnerMessage} Your points: ${humanScore} Computer points: ${computerScore}`);
}


const rockButton = document.querySelector(".button-rock");
const paperButton = document.querySelector(".button-paper");
const scissorsButton = document.querySelector(".button-scissors");

rockButton.addEventListener('click', () => playRound("rock", getComputerChoice()));
paperButton.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener('click', () => playRound("scissors", getComputerChoice()));

