function computerPlay(){ //randomly seclects rock, paper or scissor
    let randomInteger = Math.floor(Math.random()*3+1) //generates random number between 1 and 3
    // console.log(randomInteger);
    let computerMove;
    if (randomInteger === 1){
        computerMove = 'rock';
    } else if (randomInteger === 2){
        computerMove = 'paper';
    } else {
        computerMove ="scissor";
    }
   // console.log(computerMove);
    return computerMove;
}

function userPlay(){ // takes case-insestive valid input from users.
    
 
        let userMove1 = prompt("What's your move?");
        let userMove = userMove1.toLowerCase();
        
        for (let i = 0; i !=1; ){
            if (userMove == 'rock' || userMove == 'paper' || userMove == 'scissor'){
                i = 1;            
            } else{
                alert('Invalid move. Please enter valid move again');
                userMove1 = prompt("What's your move?");
                userMove = userMove1.toLowerCase();
            }
            
        }
        // console.log(userMove);
        return userMove;
}

function singleRound(computerSelection, playerSelection){ // plays single round or rock, paper and scissor
    if(playerSelection > computerSelection){
        alert(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (playerSelection < computerSelection){
        alert(`You loose! ${computerSelection} beats ${playerSelection}.`);
    } else{
        alert(`Draw! Both chose ${playerSelection}.`);
    }
}
let computerSelection = computerPlay();
let playerSelection = userPlay();
singleRound(computerSelection,playerSelection);