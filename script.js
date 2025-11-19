
let humanScore = 0;
let computerScore = 0;


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

    if (humanChoice === "rock" && computerChoice === "scissors") {
        print("You win! Rock beat scissors.");
    } else {
        print("You lose! Paper beat rock");
    }

    if (humanChoice === "paper" && computerChoice === "rock") {
        print("You win! Paper beat rock.");
    } else {
        print("You lose! Scissor beat paper.");
    }

    if (humanChoice === "scissors" && computerChoice === "paper") {
        print("You win! Scissors beat paper.");
    } else {
        print("You lose! Rock beat scissors.");
    }


}