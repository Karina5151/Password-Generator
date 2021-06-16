
const button=document.querySelector("#button")
button.addEventListener("click", GeneratePassword)
console.log(button)

function GeneratePassword() {
    var possibleChoices = []
        var possibleUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var possibleLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        var possibleSpecialCharacters = [" ", '"', "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "'", "{", "|", "}", "~"]
        // The sequence "\\"  inserts a SINGLE backslash in an array since inserting a single backslash in double quotes does not work in an array. 
        // The double quote special character was listed in with single quotes around it (like this: '"') since you cannot have a stand-alone double quote inside of other double quotes in an array.
       // All special characters from the web link in the homework README instructions were included above.
    
        var response = prompt("Choose the character length of your password. Choose between 8 - 128 below.")
        var Uppercase = confirm("Do you want Uppercase characters included in your password? Click OK to choose and cancel to exclude but continue.")
            console.log(Uppercase)
        var Lowercase = confirm("Do you want Lowercase characters included in your password? Click OK to choose and cancel to exclude but continue.")
            console.log(Lowercase)
        var Numeric = confirm("Do you want Numeric characters included in your password? Click OK to choose and cancel to exclude but continue.")
            console.log(Numeric)
        var SpecialCharacters = confirm("Do you want Special Characters characters included in your password? Click OK to choose and cancel to exclude but continue.")
            console.log(SpecialCharacters)

    if (Uppercase === true) {
        possibleChoices = possibleChoices.concat(possibleUppercase);
        console.log(possibleChoices);
    }
 
    if (Lowercase === true) {
        possibleChoices = possibleChoices.concat(possibleLowercase);
        console.log(possibleChoices);
    }

    if (Numeric === true) {
        possibleChoices = possibleChoices.concat(possibleNumbers);
        console.log(possibleChoices);
    }

    if (SpecialCharacters === true) {
        possibleChoices = possibleChoices.concat(possibleSpecialCharacters);
        console.log(possibleChoices);
    }

    if (Uppercase === false && Lowercase === false && Numeric === false && SpecialCharacters === false) {
        alert("You must pick at least one type of character for your password.")
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
    
    var passwordFinal = []


    for (var i = 0; i < response; i++) {
        let computerChoice = Math.floor(Math.random()*possibleChoices.length);
        console.log(possibleChoices[computerChoice] );
        passwordFinal.push(possibleChoices[computerChoice]);
    }
    
    console.log(passwordFinal.join(""));
    
    const password=document.querySelector("#password")
    password.innerHTML = passwordFinal.join("").bold().fontcolor("black");

}