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
    let message = "";
    let para = document.createElement("p");
    let resultsDiv = document.querySelector(".results-div");

    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            message = "You win! Rock beat scissors.";
            winner = "human";

        } else {
            message = "You lose! Paper beat rock";
            winner = "computer";

        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message = "You win! Paper beat rock.";
            winner = "human";

        } else {
            message = "You lose! Scissor beat paper.";
            winner = "computer";

        } 
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            message = "You win! Scissors beat paper.";
            winner = "human";

        } else {
            message = "You lose! Rock beat scissors.";
            winner = "computer";

        }
    }

    para.textContent = message;
    resultsDiv.appendChild(para);

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

