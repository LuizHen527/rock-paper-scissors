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
    let playerChoice = prompt("Choose rock, paper or scissors:").toLowerCase();
    
}

function playRound(humanChoice, computerChoice) {
    let winner = "none";

    if (humanChoice === "rock" && computerChoice === "scissors") {
        print("You win! Rock beat scissors.");
        winner = "human";
    } else {
        print("You lose! Paper beat rock");
        winner = "computer";
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        print("You win! Paper beat rock.");
        winner = "human";
    } else {
        print("You lose! Scissor beat paper.");
        winner = "computer";
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        print("You win! Scissors beat paper.");
        winner = "human";
    } else {
        print("You lose! Rock beat scissors.");
        winner = "computer";
    }

    return winner;

}


let humanScore = 0;
let computerScore = 0;
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let winner = playRound(humanChoice, computerChoice);