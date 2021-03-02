function getCharCodesArray(startNum, endNum) {
  var array = [];
  for (i = startNum; i <= endNum; i++){
    array.push(i);
  }
  return array;
}

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

function generatePassword() {
  var finalPass = '';
  var acceptedChar = '';

  var passLength = prompt("Chose between 8 - 128 characters.");
  console.log(passLength);
    if (passLength < 8 || passLength > 128) {
      return "Please choose a number between 8 - 128";
    } 
  var hasUppercase = confirm('Do you want uppercase letters?');
  console.log(hasUppercase);
    if (true) {

    }
  var hasLowercase = confirm('Do you want lowercase letters?');
  console.log(hasLowercase);
  var hasNum = confirm('Do you want numbers?');
  console.log(hasNum);
  var hasSymbols = confirm('Do you want symbols?');
  console.log(hasSymbols);


  return finalPass;
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

