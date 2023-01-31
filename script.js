let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3); //returns 0,1,2 to indicate choice
}

function playRound(playerSelection, computerSelection){
    diff = playerSelection - computerSelection;
    if (diff === 1 || diff === -2){
        return `You win! ${choices[playerSelection]} beats ${choices[computerSelection]}`;
    }
    else if (diff === 0){
        return `You tied. You both picked ${choices[playerSelection]}`;
    }
    else {
        return `You lost! ${choices[computerSelection]} beats ${choices[playerSelection]}`
    }
}

function buttonClicked(e){
    if (!gameIsRunning){
        gameIsRunning = true;
        pscore.textContent = 0;
        cscore.textContent = 0;
    }
    let playerSelection = choices.indexOf(this.id);
    let computerSelection = getComputerChoice();
    let round = playRound(playerSelection,computerSelection);
    let pcount = parseInt(pscore.textContent);
    let ccount = parseInt(cscore.textContent);
    result.textContent = round;
    if (round.includes("win")){
        pcount ++;
        pscore.textContent = pcount;
    }
    else if (round.includes("lost")){
        ccount++;
        cscore.textContent = ccount;
    }
    if (pcount == 5 || ccount == 5){
        gameIsRunning = false;
        if (pcount > ccount){
            result.textContent += `\nYou won the game\nMake any selection to reset the game`;
        }
        else if(ccount > pcount){
            result.textContent += `\nYou lost the game\nMake any selection to reset the game`;
        }
    }
}

let gameIsRunning = false;
const pscore = document.querySelector(".player_score .score");
const cscore = document.querySelector(".computer_score .score");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

for (let button of buttons){
    button.addEventListener("click", buttonClicked);
}
