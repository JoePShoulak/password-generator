// Assignment Code
var generateBtn = document.querySelector("#generate");

// Query the user for the length of the password
function getUserLength() {
  return parseInt(prompt("How many characters?"));
}

// Get a random number for use with selecting the new password character from the character pool
function randomNumber(max) {
  return Math.floor(Math.random()*max);
}

function useLowerCase() {
  return confirm("Use lowercase letters?");
}

function useUpperCase() {
  return confirm("Use uppercase letters?");
}

function useNumbers() {
  return confirm("Use numbers?");
}

function useSpecial() {
  return confirm("Use special characters?");
}

// Actually generate the password
function generatePassword() {
  // Get the length from the user
  var passLength = getUserLength();

  // Ask the user which character sets we're going to use
  var lowerCase = useLowerCase();
  var upperCase = useUpperCase();
  var numbers = useNumbers();
  var special = useSpecial();

  // prepare holder variables
  var password = "";
  var charpool = [];

  // If we're using the character set, add that character set to our pool
  if (lowerCase) {charpool.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")}
  if (upperCase) {charpool.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")}
  if (numbers) {charpool.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")}
  if (special) {charpool.push("!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", ",", ".", "/", "<", ">", "?", ":", ";", "|", "{", "}", "[", "]", "`", "~", "'", "\"", "\\")}

  // For each character in the pass length, select a random character from the pool and add it to the password
  for (i=0; i<passLength; i++) {
    password += charpool[randomNumber(charpool.length)];
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
