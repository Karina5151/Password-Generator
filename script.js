
const button=document.querySelector("#button")
button.addEventListener("click", GeneratePassword)
console.log(button)

function GeneratePassword() {
    var possibleChoices = []
    var possibleUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
    var response = prompt("Choose the character length of your password. Choose between 8 - 128 below.")
    var Uppercase = confirm("Do you want Uppercase characters included in your password? Click OK to choose and cancel to exclude but continue.")
    console.log(Uppercase)
    var Lowercase = confirm("Do you want Lowercase characters included in your password? Click OK to choose and cancel to exclude but continue.")
    console.log(Lowercase)
    var Numeric = confirm("Do you want Numeric characters included in your password? Click OK to choose and cancel to exclude but continue.")
    console.log(Numeric)
    var SpecialCharacters = confirm("Do you want Special Characters characters included in your password? Click OK to choose and cancel to exclude but continue.")
    console.log(SpecialCharacters)
}

if (Uppercase === true) {
    
   }

if (Lowercase === true) {
}







// var possibleChoices = ["Rock", "Paper", "Scissors"];

// alert("Let's Play a Game!")
// confirm("Yes or No?")

// var response = prompt("Choose rock, paper, or scissors.").toLowerCase();

// if (response == "Rock") {
//     console.log("Rock!")
// } else if (response == "Paper") {
//     console.log("Paper!")
// } else if (response === "scissors") {
//     console.log("Scissors, dude")
// }

// var possibleChoices = ["Rock", "Paper", "Scissors"];

// let randomIndex = Math.floor(Math.random()*possibleChoices.length)
// var computerChoice = possibleChoices[randomIndex];

// console.log(Math.floor(Math.random()*possibleChoices.length));
    
// alert(computerChoice);

// if (response === computerChoice) {
//     alert("Tied!")