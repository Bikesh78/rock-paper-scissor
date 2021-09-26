function computerPlay(){ //randomly seclects rock, paper or scissor
    let randomInteger = Math.floor(Math.random()*3+1) //generates random number between 1 and 3
    console.log(randomInteger);
    let computerSelection;
    if (randomInteger === 1){
        computerSelection = 'rock';
    } else if (randomInteger === 2){
        computerSelection = 'paper';
    } else {
        computerSelection ="scissor";
    }
    console.log(computerSelection);
    return computerSelection;
}
computerPlay();
function userPlay(){ // takes case-insestive valid input from users.
    
 
        let userInput1 = prompt("What's your move?");
        let userInput = userInput1.toLowerCase();
        
        for (let i = 0; i !=1; ){
            if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissor'){
                i = 1;            
            } else{
                alert('Invalid move. Please enter valid move again');
                userInput1 = prompt("What's your move?");
                userInput = userInput1.toLowerCase();
            }
            
        }
        console.log(userInput);
}
userPlay();
