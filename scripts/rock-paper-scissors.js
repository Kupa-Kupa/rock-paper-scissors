/*  Rock Paper Scissors with buttons ui */

/*--- Global Variables ---*/ 
// set wins, loses and rounds to zero
let win = 0;
let lose = 0;
let rounds = 0;


/*--- Element variables ---*/
// get reference to player and computer selection divs
let computer = document.querySelector("div.computer-selection");
let player = document.querySelector("div.player-selection");

//get reference to rounds div
let round = document.getElementById("rounds");

// get reference to wins and loses divs
let wins = document.getElementById("wins");
let loses = document.getElementById("loses");

// get reference to match history div
let matchHistory = document.querySelector("div.match-history");

// get reference to rps buttons container
let rpsButtons = document.querySelector("div.rps-buttons");

// get reference to new game container
let newGameContainer = document.querySelector("div.new-game-container");

// get reference to post game result div
let gameResult = document.querySelector("div.game-result");

// get reference to buttons
let rock = document.getElementById("Rock");
let paper = document.getElementById("Paper");
let scissors = document.getElementById("Scissors");
let newGame = document.getElementById("start-new-game");


/*--- Add event listeners to buttons ---*/
// play round on button click
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

// start new game on button click
newGame.addEventListener("click", startNewGame);


/*--- Functions ---*/

// play a round
function playRound(event) {
    // declare roundResult variable to hold round result string later
    let roundResult;

    // get computer selection
    let computerSelection = getComputerSelection();

    // display computer selection as emoji
    computer.innerText = getEmoji(computerSelection);

    // if selection is scissors then add class to resize emoji
    if(computer.textContent === `${String.fromCodePoint(0x2702)}`) {
        computer.classList.add("scissor-resize");
    } else {
        computer.classList.remove("scissor-resize");
    }

    // get player selection from button id
    let playerSelection = event.target.id;

    // display player selection as emoji
    player.textContent = getEmoji(playerSelection);

    // if selection is scissors then add class to resize emoji
    if(player.textContent === `${String.fromCodePoint(0x2702)}`) {
        player.classList.add("scissor-resize");
    } else {
        player.classList.remove("scissor-resize");
    }

    // determine the winner of the round
    if (playerSelection == computerSelection) {
        // increment and display round
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        // set round result message
        roundResult = `Round ${rounds}: Draw! ${playerSelection} draws ${computerSelection}`;
        
        // display round result message in match history
        displayMatchHistory(roundResult);

        // remove background colour and drop shadows from selections
        colorSelection(roundResult);

        return;

    } else if ((playerSelection == 'Scissors' && computerSelection == 'Paper') || (playerSelection == 'Paper' && computerSelection == 'Rock') || (playerSelection == 'Rock' && computerSelection == 'Scissors')) {
        // increment and display round
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        // increment and display wins
        win += 1;
        wins.textContent = `Wins: ${win}`;

        // set round result message
        roundResult = `Round ${rounds}: You Win! ${playerSelection} beats ${computerSelection}`;
        
        // display round result message in match history
        displayMatchHistory(roundResult);
        
        // add background colour and drop shadows to selections
        colorSelection(roundResult);

        // check if game should end
        if(win === 5) {endGame()};

        return;

    } else {
        // increment and display round
        rounds += 1;
        round.textContent = `Round: ${rounds}`;

        // increment and display loses
        lose += 1;
        loses.textContent = `Loses: ${lose}`;

        // set round result message
        roundResult = `Round ${rounds}: You Lose! ${computerSelection} beats ${playerSelection}`;
        
        // display round result message in match history
        displayMatchHistory(roundResult);
        
        // add background colour and drop shadows to selections
        colorSelection(roundResult);

        // check if game should end
        if(lose === 5) {endGame()};
        
        return;
    }
}


// computer gets choice of rock, paper, or scissors from an array
function getComputerSelection(){
    // declare array variable with choices
    const computerChoices = [`Rock`, `Paper`, `Scissors`];

    // randomly choose array index between 0 and array length
    const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // this could also be done with ">> 0" "<< 0" ">>> 0" or "| 0"
    // const computerSelection = computerChoices[Math.random() * computerChoices.length >> 0];

    return computerSelection;
}


// check is selection is rock, paper or scissor and return emoji
function getEmoji(selection) {
    if(selection === "Rock") {
        // convert emoji hex codepoint to string so it displays as emoji not hex on screen
        return String.fromCodePoint(0x1FAA8);
    } else if (selection === "Paper") {
        return String.fromCodePoint(0x1F4C4);
    } else {
        return String.fromCodePoint(0x2702);
    }
}


// insert round result message into match history
function displayMatchHistory(result) {
    // create paragraph element
    let p = document.createElement("p");

    // check if round was a win or a lose and set message colour
    if(result.indexOf('Win') !== -1) {
        p.style.color = "var(--dark-green)";
    } else if (result.indexOf('Lose') !== -1) {
        p.style.color = "var(--dark-red)";
    }

    // add round result message to paragraph
    p.textContent = result;

    // insert paragraph to top of match history
    matchHistory.insertBefore(p, matchHistory.children[0]);
}


// add or remove class for selection styling
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


// end the game when 5 rounds are won or lost
function endGame() {
    /* this is unnecessary since I decided to hide buttons at game end */
    // remove event listeners from buttons
    // rock.removeEventListener("click", playRound);
    // paper.removeEventListener("click", playRound);
    // scissors.removeEventListener("click", playRound);

    // set and display win or lose message
    if (win === 5) {
        gameResult.textContent = `You Won! ${win} - ${lose}`;
        gameResult.style.color = `var(--dark-green)`;
        console.log("You Win!");
    } else if (lose === 5) {
        gameResult.textContent = `You Lose-r! ${lose} - ${win}`;
        gameResult.style.color = `var(--dark-red)`;
        console.log("You Lose-r!")
    }

    // hide buttons and show game result message and new game button
    rpsButtons.classList.toggle('hidden');
    gameResult.classList.toggle('hidden');
    newGameContainer.classList.toggle('hidden');
}


// reset game
function startNewGame() {
    /* this is unnecessary since I decided to hide buttons at game end */
    // add back event listeners
    // rock.addEventListener("click", playRound);
    // paper.addEventListener("click", playRound);
    // scissors.addEventListener("click", playRound);

    // reset global wins, loses and rounds back to zero
    win = 0;
    lose = 0;
    rounds = 0;

    // reset wins, loses and rounds on screen
    wins.textContent = `Wins: ${win}`;
    loses.textContent = `Loses: ${lose}`;
    round.textContent = `Round: ${rounds}`;

    // show buttons and hide game result message and new game button
    rpsButtons.classList.toggle('hidden');
    gameResult.classList.toggle('hidden');
    newGameContainer.classList.toggle('hidden');

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

    console.log("New Game Started")
}