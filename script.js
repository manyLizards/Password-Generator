// Assignment Code
var generateBtn = document.querySelector("#generate");

var formEl = document.querySelector("#preferences");

var submitBtn = document.querySelector("#submit");

var passwordText = document.querySelector("#password");

var lengthEl = document.querySelector("#length");

var lowercaseEl = document.querySelector("#lowercase");

var uppercaseEl = document.querySelector("#uppercase");

var numbersEl = document.querySelector("#numbers");

var specialEl = document.querySelector("#special");

// Lines 12-33 Code learned from Youtube's Traversy Media from video "Javascript Password Generator", modified a bit to fit what I needed
const variables = {
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
  //assign preference variables as keys to variables object
  writePassword();
}

function generatePassword(lower, upper, number, symbol, length) {
  //init pw var, 
  //filter unchecked types, 
  //loop over length call generator function for each type, 
  //add final pw to pw var and return
  var generatedPassword = '';

  var typesCount = lower + upper + number + symbol;

  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
    item => Object.values(item)[0]
  );

  if(typesCount === 0) {
    return "Please enter your criteria"
  }

  if(length < 8) {
    return "The password must be more than 8 characters."
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName)

      generatedPassword += variables[funcName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, 128);
  return finalPassword;
  
}

function showForm(){
  formEl.style.display = "block";
}

// Add event listener to generate button and submit button
generateBtn.addEventListener("click", showForm);

submitBtn.addEventListener("click", () => {
  event.preventDefault();
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSpecial = specialEl.checked;

  passwordText.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSpecial, 
    length);
});