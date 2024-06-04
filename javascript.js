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

// what's the problem?
// i need to get the human choise between rock, paper or scissors, to achive that
// i need to use the prompt method which will return a string that would be
// the user's input. that input can be written in lowercase or uppercase or
// both so i need to transform that input in a string in lowercase in that way
// i can use a if...else statement to return that specific input. if the user
// writes something weird i need to tell to the user that please choose a 
// correct option


// plan

// Does your progrram hace a user interface? no, the program will run on the
// console

// what inputs will your program have? my program will use an user input that
// would be equal to rock, paper or scissors

// what's the desired output? the desired ourput would be a string that would be 
// equal to rock, paper or scissors

// given your inputs, what are the steps necessary to return the desired output?
// i need to verify if the input is equals to rock, papper or scissors string
// in lowercase, so i need to transform that input to a lowercase string to
// use a if...else statement to return the user's input
// if the input is something weird i need to tell the user to write a correct
// option and run the algorithm again,


// pseudocode
// make a variable equal to the user's input
// transfor the user input in a lowercase string
// verify using a if else statement what was the user's input
// if the input isn't either rock, paper or scissors, tell the user to
// chose a valid choise and run this algorithm again

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