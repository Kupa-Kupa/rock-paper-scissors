/*  Rock Paper Scissors with buttons ui */

/*  Requirements */
/*
    Player should be able to play the game by clicking on buttons
    Button for each option - rock, paper, scissors
    Display results on screen
    Display running score and announce winner of the game when
    one player reaches 5 points
*/


// get reference to buttons
let rock = document.getElementById("Rock");

let paper = document.getElementById("Paper");

let scissors = document.getElementById("Scissors");

let gameResult = document.getElementById("score");

let newGame = document.getElementById("start-new-game");

let wins = document.getElementById("wins");

let loses = document.getElementById("loses");

let round = document.getElementById("rounds");

let result = document.querySelector("div.result");

let container = document.querySelector("div.container");

let newGameContainer = document.querySelector("div.new-game-container");

// play round on button click
rock.addEventListener("click", playRound);

paper.addEventListener("click", playRound);

scissors.addEventListener("click", playRound);

newGame.addEventListener("click", startNewGame);





// computer gets choice of rock, paper, or scissors from an array
function getComputerSelection(){

    // declare array variable with choices
    // I want them capitalized for the win, lose, draw message
    const computerChoices = [`Rock`, `Paper`, `Scissors`];

    // randomly choose array index between 0 and array length
    const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //this could also be done with ">> 0" "<< 0" ">>> 0" or "| 0"
    //const computerSelection = computerChoices[Math.random() * computerChoices.length >> 0];

    return computerSelection;
}


// play a round
function playRound(event) {
    let result;

    // get computer selection
    let computerSelection = getComputerSelection();

    // get player selection from button id
    let playerSelection = event.target.id;

    // determine the winner and return the result
    if (playerSelection == computerSelection) {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        result = `Draw! ${playerSelection} draws ${computerSelection}`;
        return console.log(result);
    } else if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Scissors')) {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        win += 1;
        wins.textContent = `Wins: ${win}`;

        if(win === 5) {endGame()};
        
        
        // gameResult.textContent = result;
        

        result = `You Win! ${playerSelection} beats ${computerSelection}`;
        return "win";
    } else {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        lose += 1;
        loses.textContent = `Loses: ${lose}`;
        if(lose === 5) {endGame()};

        // gameResult.textContent = result;

        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
        return "lose";
    }

}



//game:
let win = 0;
let lose = 0;
let rounds = 0;

// end the game when 5 rounds are won or lost
function endGame() {

    rock.removeEventListener("click", playRound);
    paper.removeEventListener("click", playRound);
    scissors.removeEventListener("click", playRound);

    if (win === 5) {
        result.textContent = `You Won! ${win} - ${lose}`;
        console.log("You Win!");
    } else if (lose === 5) {
        result.textContent = `You Lose-r! ${lose} - ${win}`;
        console.log("You Lose-r!")
    }

    result.classList.toggle('hidden');
    container.classList.toggle('hidden');
    newGameContainer.classList.toggle('hidden');
}


// reset game
function startNewGame() {
    console.log("new game start")
    rock.addEventListener("click", playRound);
    paper.addEventListener("click", playRound);
    scissors.addEventListener("click", playRound);

    win = 0;
    lose = 0;
    rounds = 0;

    wins.textContent = `Wins: ${win}`;
    loses.textContent = `Loses: ${lose}`;
    round.textContent = `Round: ${rounds}`;

    result.classList.toggle('hidden');
    container.classList.toggle('hidden');
    newGameContainer.classList.toggle('hidden');
}
