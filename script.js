choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 2); //returns 0,1,2 to indicate choice
}

function playRound(playerSelection, computerSelection){
    diff = playerSelection - computerSelection;
    if (dif === 1 || dif === -2){
        return `You win! $(choices[playerSelection]) beats $(choices[computerSelection])`;
    }
    else if (dif === 0){
        return `You tied. You both picked $(choices[playerSelection])`;
    }
    else {
        return `You lost! $(choices[computerSelection]) beats $(choices[playerSelection])`
    }
}