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
            message = "You win! You: Rock; Computer: Scissors.";
            winner = "human";

        } else {
            message = "You lose! You: Rock; Computer: Paper.";
            winner = "computer";

        }
    }

    if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message = "You win! You: Paper; Computer: Rock.";
            winner = "human";

        } else {
            message = "You lose! You: Paper; Computer: Scissor.";
            winner = "computer";

        } 
    }

    if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            message = "You win! You: Scissors; Computer: Paper.";
            winner = "human";

        } else {
            message = "You lose! You: Scissors; Computer: Rock.";
            winner = "computer";

        }
    }

    para.textContent = message;
    resultsDiv.appendChild(para);

    return winner;

}

function playGame(playerChoice) {
    const roundsLimit = 5;
    let humanChoice = playerChoice;
    let computerChoice = getComputerChoice();
    let resultsDiv = document.querySelector(".results-div");

    let winner = playRound(humanChoice, computerChoice);

    if (winner === "human") {
        humanScore++;
    } else {
        computerScore++;
    }

    currentRound++;

    if (currentRound === roundsLimit) {
        // Delete old paragraphs
        while (resultsDiv.firstChild) {
            resultsDiv.removeChild(resultsDiv.firstChild);
        }

        // Create end message

        let para = document.createElement("p");

        let winnerMessage = humanScore > computerScore ? "You won the game!" : "You lost the game!"

        para.textContent = `${winnerMessage} Your points: ${humanScore} Computer points: ${computerScore}`;
        
        resultsDiv.appendChild(para);

        // Reset variables
        humanScore = 0;
        computerScore = 0;
        currentRound = 0;
    }

}


const rockButton = document.querySelector(".button-rock");
const paperButton = document.querySelector(".button-paper");
const scissorsButton = document.querySelector(".button-scissors");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;

rockButton.addEventListener('click', () => playGame("rock"));

paperButton.addEventListener('click', () => playGame("paper"));

scissorsButton.addEventListener('click', () => playGame("scissors"));
