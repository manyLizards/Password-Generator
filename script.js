// Assignment Code
var generateBtn = document.querySelector("#generate");

var formEl = document.querySelector("#preferences")

var submitBtn = document.querySelector("#submit")

//create an empty object to store preferences
var preferences = {}

// Lines 12-33 Code learned from Youtube's Traversy Media from video "Javascript Password Generator", modified a bit to fit what I needed
const variables = [
  lower = getRandomLower(),
  upper = getRandomUpper(),
  number = getRandomNumber(),
  symbol = getRandomSymbol()
]

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

  //hide preferences form
  formEl.style.display = "none";

function getPreferences(event) {
  event.preventDefault()
  //making the form return values for the submit button
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
  writePassword();
}

  //creating the password
  var pwd = variables[Math.floor(Math.random() * 4)];
  pwd.length = preferences.leng;

  console.log(pwd)

function generatePassword() {
  
  //need to display HTML element after pressing the submit button rather than return immediately
  //add preferences values so that they display as desired
  if (preferences.leng === undefined,
      preferences.lowercase === undefined,
      preferences.uppercase === undefined,
      preferences.numbers === undefined,
      preferences.special === undefined) {
        return "Please enter your criteria"
      } else if (preferences.leng >=8 && preferences.length <=128,
                preferences.lowercase === true,
                preferences.uppercase === true,
                preferences.numbers === true,
                preferences.special === true) {
                  return pwd 
                }
  return "Hello";
}

function showForm(){
  formEl.style.display = "block";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button and submit button
generateBtn.addEventListener("click", showForm);

submitBtn.addEventListener("click", getPreferences,)