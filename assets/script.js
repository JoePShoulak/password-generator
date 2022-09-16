var cases = [
  {
    name: "lowercase",
    set: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  }, {
    name: "uppercase",
    set: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  }, {
    name: "numbers",
    set: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  }, {
    name: "special",
    set: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", ",", ".", "/", "<", ">", "?", ":", ";", "|", "{", "}", "[", "]", "`", "~", "'", "\"", "\\"]
  }
]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Query the user for the length of the password
function getUserLength() {
  return parseInt(prompt("How many characters?"));
}

// Get a random number for use with selecting the new password character from the character pool
function randomElement(array) {
  return array[Math.floor(Math.random()*array.length)];
}

function getCharPool() {
  var charPool = [];

  // Foreach case we have access to, confirm we're using it, and if so add it to charpool
  cases.forEach(element => {
    var usingSet = confirm(`Use ${element.name} characters?`);
    if (usingSet) {charPool = charPool.concat(element.set)}
  });

  return charPool;
}

// Actually generate the password
function generatePassword() {  
  // Get the length from the user
  var passLength = getUserLength();

  // Validate on password length (between 8 and 128)
  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return "";
  }

  // Get the character pool from the user
  var charPool = getCharPool();

  // Validate character pool (not empty)
  if (charPool.length === 0) {
    alert("You must choose at least one character set for your password.");
    return "";
  }

  // Placeholder variable
  var password = "";

  // For each character in the pass length, select a random character from the pool and add it to the password
  for (i=0; i<passLength; i++) {
    password += randomElement(charPool);
  }

  // Bring it home
  return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
