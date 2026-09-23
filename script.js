function getComputerChoice(){ //first function to get the choice of computer
    choice = Math.random() // the choice en is some random number whose value is stored in a variable 
// now i  want to assign the range of these random value : rock , paper and scissors
// for that i can use if choice between 0 to 0.3 hen return rock and so on...
    if (choice >= 0 && choice < 0.5) {
    return "rock";
    }
    else if ( choice >= 0.5 && choice < 0.8 ){
        return "paper"
    }
    else{
        return "scissors"
    }
}
//but currently its returning a string, later on in logic we might have to compare
// the output of user and computer so it would be better to assign these sting a variable
let computerChoice = getComputerChoice();

/*so now we have a variable that stores the value of function that returns the choice of computer
essentially my variable is now storing the computer choice in rock paper or scissors 
this choice is triggered by the function getComputerChoice() and then stored in the 
variable computerChoice. */




//now the question i have in my mind is how is this function get triggered? because before this
// we were passing arguments. and doing function calls.

console.log(computerChoice);


//human choice logic

function getHumanChoice(){
    let humanChoice = prompt("valid inputs : rock or paper or scissors")
    humanChoice = humanChoice.toLocaleLowerCase(); //so that user can input case insensitive inputs
    if(humanChoice === "rock"){
        return "rock";
    }
    else if (humanChoice === "paper"){
        return "paper";
    }
    else if (humanChoice === "scissors"){
        return "scissors";
    }
    else{
        return "enter a valid input"
    }
}
/* now we have written the logic to take user input 
this block is basically taking user input using prompt method and storing that value in a variable 
called humanChoice , then the if else block decides what will the code return after reading the value of 
variable */

console.log(getHumanChoice());





//now we'll declare a variable to keep track of human and computer scores.

let humanScore = 0;
let computerScore = 0;

//now we will build the logic for how human and computer choice will be compared and who wins when for ONE Round

function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        return " it's a tie"
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" ){
        humanScore++;
        return "shoot! you just won a round"
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return "shoot! is this really happening rn?"
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return "luck is on mah side"
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return "hell yeha, today i'm winning this game babyy!"
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "shoot! you just won a round"

    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return "hell yeha, today i'm winning this game babyy!"

    }
}
/* okay so now we have logic for one round of match but we need to pass the arguments in the logic function defined above
*/
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection,computerSelection);

/* so for that we made 2 variables humanSelection and computerSelection :
they store the value of our initial function's result (they defined how human is going to input value and how 
computer is going to choose value in rock paper and scissors
now since our variables have  values of human and computer choice , we can pass them as arguments in the playRound function
and so we do a function call with humanSelection and computerSelection variables as arguments)
*/

/* now we need a function for logic that can make a game last for 5 rounds and then end it*/
function playGame(){

}