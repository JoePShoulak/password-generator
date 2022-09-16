// Generate the password
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
  document.querySelector("#password").value = generatePassword();
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
