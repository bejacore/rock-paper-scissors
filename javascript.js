function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt('Choose rock, paper or scissors');
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice) {
        case 'rock':
            return 'rock';
            break;
        case 'paper':
            return 'paper';
            break;
        case 'scissors':
            return 'scissors';
            break;
        default:
            console.log('Choose a valid option!');
            return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'rock') {
                console.log('It\'s a tie!');
            } else if (computerChoice === 'paper') {
                console.log('You lose! Paper beats Rock.');
                computerScore++;
            } else {
                console.log('You won! Rock beats Scissors.')
                humanScore++;
            }
            break;

        case 'paper':
            if (computerChoice === 'paper') {
                console.log('It\'s a tie!');
            } else if (computerChoice === 'scissors') {
                console.log('You lose! Scissors beats Paper.');
                computerScore++;
            } else {
                console.log('You won! Paper beats Rock.');
                humanScore++;
            }
            break;

        case 'scissors':
            if (computerChoice === 'scissors') {
                console.log('It\'s a tie!');
            } else if (computerChoice === 'rock') {
                console.log('You lose! Rock beats Scissors.');
                computerScore++;
            } else {
                console.log('You won! Scissors beats Paper.')
                humanScore++;
            }
            break;
    }
}