let computerScore = 0;
let humanScore = 0;
const maxRounds = 5;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    let num = Math.floor(Math.random() * 3);
    return choices[num];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissor):").toLowerCase();
    while (!["rock", "paper", "scissor"].includes(choice)) {
        choice = prompt("Invalid input. Please enter rock, paper, or scissor:").toLowerCase();
    }
    return choice;
}

function playRound(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("Draw! It was the same choice:", computerChoice);
    } else {
        if (computerChoice === 'rock') {
            if (humanChoice === 'paper') {
                console.log("Paper beats Rock! You win a point.");
                humanScore++;
            } else if (humanChoice === 'scissor') {
                console.log("Rock beats Scissor! Computer wins a point.");
                computerScore++;
            }
        } else if (computerChoice === 'paper') {
            if (humanChoice === 'scissor') {
                console.log("Scissor beats Paper! You win a point.");
                humanScore++;
            } else if (humanChoice === 'rock') {
                console.log("Paper beats Rock! Computer wins a point.");
                computerScore++;
            }
        } else if (computerChoice === 'scissor') {
            if (humanChoice === 'rock') {
                console.log("Rock beats Scissor! You win a point.");
                humanScore++;
            } else if (humanChoice === 'paper') {
                console.log("Scissor beats Paper! Computer wins a point.");
                computerScore++;
            }
        }
    }

    console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < maxRounds; i++) {
        console.log(`\nRound ${i + 1}`);
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    }

    console.log("\nFinal Score:");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);

    if (computerScore > humanScore) {
        console.log("Computer Wins!");
    } else if (computerScore < humanScore) {
        console.log("You Win!");
    } else {
        console.log("It's a Draw!");
    }

    // Reset scores if you want to play again
    computerScore = 0;
    humanScore = 0;
}

playGame();
