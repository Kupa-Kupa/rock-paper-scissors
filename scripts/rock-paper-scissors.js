// Rock Paper Scissors

// don't really need to store the results at all since the result is returned
// const computerSelection = getComputerSelection();

// const playerSelection = getPlayerSelection();


// computer gets choice of rock, paper, or scissors
function getComputerSelection(){
    let computerSelection;
    const num = Math.floor((Math.random() * 3) + 1);
    //console.log(num);

    if (num === 1) {
        return computerSelection = "rock";
    } else if (num === 2) {
        return computerSelection = "paper";
    } else if (num === 3) {
        return computerSelection = "scissors";
    }
}
//console.log(getComputerSelection());

// could also get computer selection using an array
function getComputerSelectionArray(){
    // declare array variable with choices
    // I want them capitalized for the win, lose, draw message
    const computerChoices = [`Rock`, `Paper`, `Scissors`]
    // randomly choose array index between 0 and array length
    const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //this could also be done with ">> 0" "<< 0" ">>> 0" or "| 0"
    //const computerSelection = computerChoices[Math.random() * computerChoices.length >> 0];

    return computerSelection;
}
//console.log(getComputerSelectionArray());


// Capitalize word with array conversion
function capitalize2(word) {
    // split selection into an array
    let wordArray = word.split('');
    // Change the first array index to upper case and concatenate the rest of the selection string back on
    word = `${wordArray[0].toUpperCase()}${word.slice(1)}`;
    return word;
}

//console.log(capitalize2('ello'));


// Capitalize word with .replace - superior to using an array
function capitalize(word) {
    // don't actually need regex
    // word = word.replace(/^[a-z]/,word.charAt(0).toUpperCase());
    word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
    return word;
}

//console.log(capitalize('hello'));


// get player selection
function getPlayerSelection(){
    // prompt user for their choice
    let selection = prompt("rock, paper or scissors?").toLowerCase();

    // check if choice is valid
    // if valid return selection
    if (selection == "rock" || selection == "paper" || selection == "scissors") {
        // split selection into an array
        let selectionArray = selection.split('');
        // Change the first array index to upper case and concatenate the rest of the selection string back on
        selection = `${selectionArray[0].toUpperCase()}${selection.slice(1)}`;
        return selection;
    } else {
        // if invalid get another choice and check again
        let invalid = true;

        while (invalid) {
            selection = prompt("Choose: rock, paper, or scissors").toLowerCase();

            if (selection == "rock" || selection == "paper" || selection == "scissors") {
                // split selection into an array
                let selectionArray = selection.split('');
                // Change the first array index to upper case and concatenate the rest of the selection string back on
                selection = `${selectionArray[0].toUpperCase()}${selection.slice(1)}`;
                return selection;
                invalid = false;
            }
        }

        return selection;
    }
}

//console.log(getPlayerSelection());


// compare answers and determine winner



// play a round
function playRound(playerSelection, computerSelection) {
    let result;

    // determine the winner and return the result
    if (playerSelection == computerSelection) {
        result = `Draw! ${playerSelection} draws ${computerSelection}`;
        return result;
    } else if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Scissors')) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        return result;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return result;
    }
}

//console.log(playRound(getPlayerSelection(), getComputerSelection()));


// Play 5 round game - could pass a const of round into game if I wanted
function game() {
    // result of game
    let result;
    // for tracking result of rounds
    let win = 0;
    let lose = 0;
    let draw = 0;

    // loop through 5 rounds
    for (let i = 0; i < 5; i++) {
        // get result of the round
        result = playRound(getPlayerSelection(), getComputerSelectionArray());
        console.log(result);

        //check if returned result message includes lose win or draw and increment
        if (result.includes(`Lose!`)) {
            lose += 1;
            console.log(`wins: ${win}, loses ${lose}, draws: ${draw}`);
        } else if (result.includes(`Win!`)) {
            win += 1;
            console.log(`wins: ${win}, loses ${lose}, draws: ${draw}`);
        } else if (result.includes(`Draw!`)) {
            draw += 1;
            console.log(`wins: ${win}, loses ${lose}, draws: ${draw}`);
        }
    }

    if (win > lose) {
        result = `You Win!`;
        return result;
    } else if (win == lose) {
        result = `It's a Draw!`;
        return result;
    } else {
        result = `You Lose!`
        return result;
    }

}

//console.log(game());