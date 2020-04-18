// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", function () {
  //passLength = prompt("How long do you want the password to be? (8 - 128 characters) ");
 // passSpecial = prompt("Please write which special characters you'd like (Uppercase, Lowercase, Symbol, Numbers")

  writePassword();
});





function generatePassword()
{
 return getRandomNumber() + getRandomUpper() + getRandomLower();}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*"

  return symbols[Math.random() * symbols.length]
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




