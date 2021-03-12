//Global variables
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

//asking user length of the password >128 and < 8
var userChoice = [];//this holds array of list of characters
var password = "";//this holds string of list of characters
var generatePassword = function () {
  var passLength = parseInt(window.prompt("how many characters whould you like your password to contain?"));

  if (!passLength) {

    return;
  }
  else if (passLength > 128) {
    alert("it needs to be less than 129");
    return;

  }
  else if (passLength < 8) {
    alert("it needs to be more than 8");
    return;
  }
  //select which criteria to include in the password
  else {
    var isSpecChosen = window.confirm("click OK to confirm including special characters");

    var isLowerCase = window.confirm("click OK to confirm including  Lowercase characters");

    var isUpperCase = window.confirm("click ok to confirm including  uppercase characters");

    var isNumber = window.confirm("click OK to confirm including  numeric characters");

  }
  //if none chosen then dispaly a message 
  if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) {
    alert("You didnt chose a character type!");
    return;

  }
  
  else {
    //if special character is chosen then concat special character
    if (isSpecChosen) {
      userChoice = userChoice.concat(specialcharacter);
    }
    //if a lowercase is chosen then concat lowercase character
    if (isLowerCase) {
      userChoice = userChoice.concat(lowerCase);
    }
    //if an uppercase is chosen then concat an uppercase character
    if (isUpperCase) {
      userChoice = userChoice.concat(upperCase);
    }
    //if a number is chosen then concat a number character
    if (isNumber) {
      userChoice = userChoice.concat(numbers);
    }
    var newpassword = makePassword(passLength, userChoice);
    return newpassword;
  }
}
//password is generated ,and is written and displayed inside the box
function makePassword(length, charset) {
  var password = '';
  var charactersLength = charset.length;
  for (var i = 0; i < length; i++) {
    password += charset[(Math.floor(Math.random() * charactersLength))];
  }
  return password;
}





// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  userChoice = [];
}



//  event listener to generate button added
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
