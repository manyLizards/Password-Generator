// Assignment Code
var generateBtn = document.querySelector("#generate");

var formEl = document.querySelector("#preferences")

var submitBtn = document.querySelector("#submit")

//create an empty object to store preferences
var preferences = {}

// Lines 12-33 Code learned from Youtube's Traversy Media from video "Javascript Password Generator"
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

function getRandomLower() {
  return String.fromCharCode (Math.floor(Math.random() * 26 + 97));
}

function getRandomUpper() {
  return String.fromCharCode (Math.floor(Math.random() * 26 + 65));
}

function getRandomNumber() {
  return String.fromCharCode (Math.floor(Math.random() * 10 + 48));
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPreferences(event) {
  event.preventDefault()
  //hide preferences form
  formEl.style.display = "none";
  var leng = document.querySelector("#length").value
  var lowercase = document.querySelector("#lowercase").checked
  var uppercase = document.querySelector("#uppercase").checked
  var numbers = document.querySelector("#numbers").checked
  var special = document.querySelector("#special").checked
  //assign preference variables as keys to preferences object
  preferences.leng = leng
  preferences.lowercase = lowercase
  preferences.uppercase = uppercase
  preferences.numbers = numbers
  preferences.special = special
}

function generatePassword() {
  //need to display HTML element after pressing the submit button rather than return immediately
  formEl.style.display = "block";
  var pwd = "dfjeioe"
  return pwd
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

submitBtn.addEventListener("click", getPreferences)