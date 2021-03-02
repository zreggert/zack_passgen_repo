// This function creates an array of numbers that I will assign to variables that will represent the different types of characters used in the generated password. The numbers within the arrays are the Character Code number of each letter, number, and symbol used.
function getCharCodesArray(startNum, endNum) {
  var array = [];
  for (i = startNum; i <= endNum; i++){
    array.push(i);
  }
  return array;
}

// These are the variables that contain the value of an array creatd by the previous function.
var uppercaseCharCodes = getCharCodesArray(65, 90);
var lowercaseCharCodes = getCharCodesArray(97, 122);
var numCharCodes = getCharCodesArray(48, 57);
var symbolsCharCodes = getCharCodesArray(33, 47)
.concat(
  getCharCodesArray(58, 64)
  .concat(
    getCharCodesArray(91, 96)
    .concat(
      getCharCodesArray(123, 126)
    )));



// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function initiates once the generator button is clicked and proceeds to prompt or ask for confirmation about how many characters are used in the password and which types are to be used. Upon confirmation the array being confirmed is added to acceptedChar variable which is an empty array.
function generatePassword() {
  var acceptedChar = [];
  var passLength = prompt("Chose between 8 - 128 characters.");
  if (passLength < 8 || passLength > 128) {
    return "Please choose a number between 8 - 128";
  } 
  var hasUppercase = confirm('Do you want uppercase letters?');
  if (hasUppercase) {
    acceptedChar = acceptedChar.concat(uppercaseCharCodes);
  }
  var hasLowercase = confirm('Do you want lowercase letters?');
  if (hasLowercase) {
    acceptedChar = acceptedChar.concat(lowercaseCharCodes);
  }
  var hasNum = confirm('Do you want numbers?');
  if (hasNum) {
    acceptedChar = acceptedChar.concat(numCharCodes);
  }
  var hasSymbols = confirm('Do you want symbols?');
  if (hasSymbols) {
    acceptedChar = acceptedChar.concat(symbolsCharCodes);
  }

  // This last variable is an empty array that is presented as the password. To create this array we use a for loop to loop through the acceptedChar array and randomly selects characters from the array equal to the passLength provided to us by the user.
  var finalPass = []
  for (i = 0; i <= passLength; i++){
    var randChar = acceptedChar[Math.floor(Math.random() * acceptedChar.length)]
    // String.fromCharCode is a function that translates the CharCode number into a string of its designated character.
    finalPass.push(String.fromCharCode(randChar))
  }
  return finalPass.join('');
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// length 8 - 128 characters
//www.net-comber.com/charset.html


//EXPERIMENTED WITH RANDOM GENERATING FUNCTIONS
// lowercase
// function getRandLower() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// // uppercase
// function getRandUpper() {
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// // numbers
// function getRandNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// //special characters
// function getRandSymbol() {
//   var symbols = '!@#$%^&*()-={}[]/,.+';
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

