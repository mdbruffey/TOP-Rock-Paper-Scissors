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

function game(){
    let pcount = 0;
    let ccount = 0
    let playerSelection;
    for (let i=0; i < 5; i++){
        let string = prompt("Enter a move (Rock, Paper, Scissors): ").toLowerCase();
        playerSelection = choices.indexOf(string);
        result = playRound(playerSelection,getComputerChoice());
        if (result.includes("win")){
            pcount++;
        }
        else if (result.includes("lost")){
            ccount++;
        }
        console.log(`${result} : ${pcount}-${ccount}`)
    }
    if (pcount > ccount){
        console.log(`You won the game ${pcount}-${ccount}`)
    }
    else if(ccount > pcount){
        console.log(`You lost the game ${pcount}-${ccount}`)
    }
    else{
        console.log(`The game was a tie ${pcount}-${ccount}`)
    }
}

for (let i=0; i < 10; i++){
    console.log(getComputerChoice())
}
game()