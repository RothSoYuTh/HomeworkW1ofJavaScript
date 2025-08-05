//Mini Project
let choice = [ "paper","rock","scissors"];

let player = Math.floor(Math.random()*3);
let computer = Math.floor(Math.random()*3);

let playerChoice = choice[player];
let computerChoice = choice[computer];

let message = " Player chose " + playerChoice + ".\n Computer chose " + computerChoice + ".\n";


if (computerChoice == playerChoice){
  message += "It is tie!";
}else if ( (playerChoice === "Rock" && computerChoice === "Scissors") ||
           (playerChoice === "Paper" && computerChoice === "Rock") || 
           (playerChoice === "Scissors" && computerChoice === "Paper")){
            message += "Player win!";
}else{
  message += "computer win!"
}

console.log(message);

