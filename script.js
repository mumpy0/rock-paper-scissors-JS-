function getComputerChoice(){ //first function to get the choice of computer
    choice = Math.random() // the choice en is some random number whose value is stored in a variable 
// now i  want to assign the range of these random value : rock , paper and scissors
// for that i can use if choice between 0 to 0.3 hen return rock and so on...
    if (choice >= 0 && choice < 0.3) {
    return "rock";
    }
    else if ( choice >= 0.3 && choice < 0.6 ){
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