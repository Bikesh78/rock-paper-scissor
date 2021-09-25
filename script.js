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