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


// get player selection
function getPlayerSelection(){
    // prompt user for their choice
    let selection = prompt("rock, paper or scissors?").toLowerCase();

    // check if choice is valid
    // if valid return selection
    if (selection == "rock" || selection == "paper" || selection == "scissors") {
        return selection;
    } else {
        // if invalid get another choice and check again
        let invalid = true;

        while (invalid) {
            selection = prompt("Choose: rock, paper, or scissors").toLowerCase();

            if (selection == "rock" || selection == "paper" || selection == "scissors") {
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
    } else if ((playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'rock' && computerSelection == 'scissors')) {
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
        result = playRound(getPlayerSelection(), getComputerSelection());
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

console.log(game());