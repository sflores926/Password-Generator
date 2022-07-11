// Assignment Code
var generateBtn = document.querySelector("#generate");
var userChoice = [];

var lowercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var uppercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ['!', '@', '#', '$', '^', '%', '&', '*', '(', ')', '[', ']', '{', '}', '=', '<', '>', '/', ','];


// console.log(specialChars);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePassword = function() {
// Asks user for the length of password they want to create
  var passNumber = window.prompt("How many characters would you like your password to contain?");
  console.log(passNumber);
  if (passNumber < 8) {
    window.alert("Password must be at least 8 characters.");
    return;
    } else if (passNumber > 128) {
      window.alert("Password must be less than 129 characters.");
      return;
    }

// individual prompts to confirm if lowercase, uppercase, numeric, and special characters are wanted in password
    if (window.confirm("Click to confirm to include lowercase characters.")) {
      userChoice = userChoice.concat(lowercase);
    } if (window.confirm("Click to confirm to include uppercase characters.")) {
      userChoice = userChoice.concat(uppercase);
    } if (window.confirm("Click to confirm to include numeric characters.")) {
      userChoice = userChoice.concat(numbers);
    } if (window.confirm("Click to confirm to include special characters.")) {
      userChoice = userChoice.concat(specialChars);
    }

//loop for creating random password
    var password = "";
    for (var i = 0; i < passNumber; i++) {
      var randomIndex = Math.floor(Math.random() * userChoice.length);
      password = password + userChoice[randomIndex];
    }
    return password;
}

writePassword();