
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
    let playerChoice = prompt("Choose rock, paper or scissors:")
    
}

function playRound(humanChoice, computerChoice) {
    
}