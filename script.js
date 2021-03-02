// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var finalPass = '';
  var passLength = prompt("Chose between 8 - 128 characters.");
  console.log(passLength);
  var hasUppercase = confirm('Do you want uppercase letters?');
  console.log(hasUppercase);
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
// lowercase
function getRandLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// uppercase
function getRandUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// numbers
function getRandNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//special characters
function getRandSymbol() {
  var symbols = '!@#$%^&*()-={}[]/,.+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}




console.log(getRandLower());
console.log(getRandUpper());
console.log(getRandNumber());
console.log(getRandSymbol());