//Assign
var specialcharacter = ['@', '%', '+',
  "\\",
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");


var userChoice = [];
var password = "";
var generatePassword = function () {
  var passLength = parseInt(window.prompt("how many characters whould you like your password to contain?"));
  console.log(passLength);
  if (!passLength) {

    return;
  }
  else if (passLength < 8 || passLength > 128) {
    alert("invalid");
    return;

  }
  else {
    var isSpecChosen = window.confirm("click OK to confirm including special characters");
    console.log(isSpecChosen);
    var isLowerCase = window.confirm("click OK to confirm including  Lowercase characters");
    console.log(isLowerCase);
    var isUpperCase = window.confirm("click ok to confirm including  uppercase characters");
    console.log(isUpperCase);
    var isNumber = window.confirm("click OK to confirm including  numeric characters");
    console.log(isNumber);
  }
  if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber ) {
    alert("You didnt chose a character type!");
    return;

 }
  else {
    if (isSpecChosen){
    userChoice = userChoice.concat(specialcharacter);
    }
if (isLowerCase){
  userChoice = userChoice.concat(lowerCase);
}
if (isUpperCase){
  userChoice = userChoice.concat(upperCase);
}
if (isNumber){
userChoice = userChoice.concat(numbers);
}
console.log(userChoice);
  }
}
function generatePassword(length) {
  var userChoice = password.length;
for ( var i = 0; i < userChoice; i++ ) {
  password += userChoice.password(Math.floor(Math.random() * userChoice));
}

return password;

}





// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
