const btn = document.querySelectorAll('button');
btn.forEach(button => {
    button.addEventListener('click', () =>{
    console.log(button.id);
    playRound(button.id);
    });
});
let userScore = 0;
let computerScore = 0;
for(let i=0; i<5; i++){
    function playRound(playerSelection){
        const computerSelection =computerPlay();
        console.log(computerSelection);
        if(playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'scissor' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'rock'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            userScore++;
        
        } else if (computerSelection === 'rock' && playerSelection === 'scissor' || computerSelection === 'scissor' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'rock'){
            console.log(`You loose! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }else{
            console.log(`Draw! Both chose ${computerSelection}.`);
        }
        if(userScore === 5){
            console.log(`Congratulaion! You won.
            Your Score: ${userScore};
            Computer's Score: ${computerScore};`)
        } else if(computerScore === 5){
            console.log(`Sorry! You lost.
            Your Score: ${userScore};
            Computer's Score: ${computerScore};`)
        }

    }
    
    
}


function computerPlay(){ //randomly seclects rock, paper or scissor
    const move = ['rock','paper','scissor'];
    let randomInteger = Math.floor(Math.random()*3+1) //generates random number between 1 and 3
    // console.log(randomInteger);
    const computerMove = move[randomInteger -1];
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