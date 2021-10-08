const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('click', playRound));
function playRound(e){
    console.log(e.target.id);
}

function computerPlay(){ //randomly seclects rock, paper or scissor
    const computerMove = ['rock','paper','scissor'];
    let randomInteger = Math.floor(Math.random()*3+1) //generates random number between 1 and 3
    // console.log(randomInteger);
    
    return computerMove;
}

/*
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


function game(){
    let computerScore = 0;
    let userScore =0;
    let draw = 0;
    for (i = 0; i < 5; i++){
        
        function singleRound(computerSelection, playerSelection){ // plays single round or rock, paper and scissor
            if(playerSelection > computerSelection){
                alert(`You win! ${playerSelection} beats ${computerSelection}.`);
                userScore++;
            } else if (playerSelection < computerSelection){
                alert(`You loose! ${computerSelection} beats ${playerSelection}.`);
                computerScore++;
            } else{
                alert(`Draw! Both chose ${playerSelection}.`);
                draw++;
            }
        }
        let computerSelection = computerPlay();
        let playerSelection = userPlay();
        singleRound(computerSelection,playerSelection);
    }
    if (userScore > computerScore){
        alert(`Congratulation!!! You won.
        Your Score: ${userScore}
        Computer's Score : ${computerScore}
        Draw: ${draw}`);
    } else if (userScore < computerScore){
        alert(`Sorry!!! The computer won.
        Your Score: ${userScore}
        Computer's Score : ${computerScore}
        Draw: ${draw}`);
    } else {
        alert(`It's a tie.
        Your Score: ${userScore}
        Computer's Score : ${computerScore}
        Draw: ${draw}`);
    }
}
game();
*/