// Assignment Code
var passNumberLength = 8;
var userChoice = [];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ['!', '@', '#', '$', '^', '%', '&', '*', '(', ')', '[', ']', '{', '}', '=', '<', '>', '/', ','];


var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }

}



 // function to generatePassword
function generatePassword() {
//loop for creating random password
  var password = "";
  for (var i = 0; i < passNumberLength; i++) {
    var randomIndex = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[randomIndex];
  }
  return password;

}


function getPrompts() {
  userChoice = []
// Asks user for the length of password they want to create
  passNumberLength = parseInt(window.prompt("How many characters would you like your password to contain?"));
  // console.log(passNumberlength);
  if (isNaN(passNumberLength) || passNumberLength < 8 || passNumberLength > 128) {
    alert("Password must be at between 8 - 128 numbers. Try again.");
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

    return true;

  }
   