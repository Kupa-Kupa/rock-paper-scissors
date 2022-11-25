/*  Rock Paper Scissors with buttons ui */

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



let rpsButtons = document.querySelector("div.rps-buttons");

let matchHistory = document.querySelector("div.match-history");

let computer = document.querySelector("div.computer-selection");

let player = document.querySelector("div.player-selection");

let selections = document.querySelector("div.selections");





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
    computer.innerText = getEmoji(computerSelection);

    if(computer.textContent === `${String.fromCodePoint(0x2702)}`) {
        computer.classList.add("scissor-resize");
    } else {
        computer.classList.remove("scissor-resize");
    }

    // get player selection from button id
    let playerSelection = event.target.id;
    player.textContent = getEmoji(playerSelection);

    if(player.textContent === `${String.fromCodePoint(0x2702)}`) {
        player.classList.add("scissor-resize");
    } else {
        player.classList.remove("scissor-resize");
    }


    // determine the winner and return the result
    if (playerSelection == computerSelection) {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        result = `Round ${rounds}: Draw! ${playerSelection} draws ${computerSelection}`;
        displayMatchHistory(result);
        colorSelection(result);

        return;
    } else if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Scissors')) {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        win += 1;
        wins.textContent = `Wins: ${win}`;

        if(win === 5) {endGame()};
        
        
        // gameResult.textContent = result;
        

        result = `Round ${rounds}: You Win! ${playerSelection} beats ${computerSelection}`;
        displayMatchHistory(result);
        colorSelection(result);

        return "win";
    } else {
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        lose += 1;
        loses.textContent = `Loses: ${lose}`;
        if(lose === 5) {endGame()};

        // gameResult.textContent = result;

        result = `Round ${rounds}: You Lose! ${computerSelection} beats ${playerSelection}`;
        displayMatchHistory(result);
        colorSelection(result);
        
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
        result.style.color = `var(--dark-green)`;
        console.log("You Win!");
    } else if (lose === 5) {
        result.textContent = `You Lose-r! ${lose} - ${win}`;
        result.style.color = `var(--dark-red)`;
        console.log("You Lose-r!")
    }

    // container.classList.toggle('hidden');
    rpsButtons.classList.toggle('hidden');
    result.classList.toggle('hidden');
    newGameContainer.classList.toggle('hidden');
    // selections.classList.toggle('hidden');
}


// reset game
function startNewGame() {
    console.log("New Game Started")
    rock.addEventListener("click", playRound);
    paper.addEventListener("click", playRound);
    scissors.addEventListener("click", playRound);

    win = 0;
    lose = 0;
    rounds = 0;

    wins.textContent = `Wins: ${win}`;
    loses.textContent = `Loses: ${lose}`;
    round.textContent = `Round: ${rounds}`;

    // container.classList.toggle('hidden');
    rpsButtons.classList.toggle('hidden');
    result.classList.toggle('hidden');
    newGameContainer.classList.toggle('hidden');
    // selections.classList.toggle('hidden');

    // remove match history for previous game
    Array.from(matchHistory.children).forEach(child => {
        matchHistory.removeChild(child);
    });

    // reset selections
    computer.innerText = "-";
    player.innerText = "-";
    player.classList.remove("selection-win");
    player.classList.remove("selection-lose");
    computer.classList.remove("selection-win");
    computer.classList.remove("selection-lose");

    player.classList.remove("scissor-resize");
    computer.classList.remove("scissor-resize");
}


function displayMatchHistory(result) {
    let p = document.createElement("p");

    if(result.indexOf('Win') !== -1) {
        p.style.color = "var(--dark-green)";
    } else if (result.indexOf('Lose') !== -1) {
        p.style.color = "var(--dark-red)";
    }

    p.textContent = result;
    matchHistory.insertBefore(p, matchHistory.children[0]);
}


// add filter drop shadow on selection
function colorSelection(result) {
    if( (result.indexOf('Win') !== -1) && (!(player.classList.contains("selection-win"))) ) {
        player.classList.toggle("selection-win");
        computer.classList.toggle("selection-lose");

        player.classList.remove("selection-lose");
        computer.classList.remove("selection-win");
        
    } else if ( (result.indexOf('Lose') !== -1) && (!(player.classList.contains("selection-lose"))) ) {
        player.classList.toggle("selection-lose");
        computer.classList.toggle("selection-win");

        player.classList.remove("selection-win");
        computer.classList.remove("selection-lose");

    } else if (result.indexOf('Draw') !== -1) {
        player.classList.remove("selection-win");
        player.classList.remove("selection-lose");
        computer.classList.remove("selection-win");
        computer.classList.remove("selection-lose");
    }
}

function getEmoji(selection) {
    if(selection === "Rock") {
        return String.fromCodePoint(0x1FAA8);
    } else if (selection === "Paper") {
        return String.fromCodePoint(0x1F4C4);
    } else {
        return String.fromCodePoint(0x2702);
    }
}