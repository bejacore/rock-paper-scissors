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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case 'rock':
            if (computerChoice === 'rock') {
                dialogPara.textContent = 'It\'s a tie!';
            } else if (computerChoice === 'paper') {
                dialogPara.textContent = 'You lose! Paper beats Rock.';
                computerScore++;
            } else {
                dialogPara.textContent = 'You won! Rock beats Scissors.';
                humanScore++;
            }
            break;

        case 'paper':
            if (computerChoice === 'paper') {
                dialogPara.textContent = 'It\'s a tie!';
            } else if (computerChoice === 'scissors') {
                dialogPara.textContent = 'You lose! Scissors beats Paper.';
                computerScore++;
            } else {
                dialogPara.textContent = 'You won! Paper beats Rock.';
                humanScore++;
            }
            break;

        case 'scissors':
            if (computerChoice === 'scissors') {
                dialogPara.textContent = 'It\'s a tie!';
            } else if (computerChoice === 'rock') {
                dialogPara.textContent = 'You lose! Rock beats Scissors.';
                computerScore++;
            } else {
                dialogPara.textContent = 'You won! Scissors beats Paper.';
                humanScore++;
            }
            break;
    }
}

let humanScore = 0;
let computerScore = 0;

const dialogPara = document.querySelector('.dialog');
const humanScoreDialog = document.querySelector('.human-score');
const computerScoreDialog = document.querySelector('.computer-score');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const humanChoice = button.id;
      const computerChoice = getComputerChoice();

      if (humanScore < 5 && computerScore < 5) {
        playRound(humanChoice, computerChoice);
        humanScoreDialog.textContent = `Your score: ${humanScore}`;
        computerScoreDialog.textContent = `Computer score: ${computerScore}`;
      } else if (humanScore === 5 && computerScore < 5) {
        dialogPara.textContent = 'You won! Play again.'
        humanScore = 0;
        computerScore = 0;
      } else if (computerScore === 5 && humanScore < 5) {
        dialogPara.textContent = 'You lose, play again.'
        humanScore = 0;
        computerScore = 0;
      } else {
        dialogPara.textContent = 'It\'s a tie, play again.';
        humanScore = 0;
        computerScore = 0;
      }
    });
  });