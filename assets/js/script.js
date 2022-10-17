// Generate the password
function generatePassword() {  
  // Get the length from the user and validate on password length (between 8 and 128)
  let password = "";
  
  const passLength = getUserLength();

  if (passLength < 8 || passLength > 128) {
    alert("Password must be between 8 and 128 characters.");
    return password;
  }

  // Get the character pool from the user and validate character pool (not empty)
  const charPool = getCharPool();
  
  if (charPool.length == 0) {
    alert("You must choose at least one character set for your password.");
    return password;
  }

  // For each character in the pass length, select a random character from the pool and add it to the password
  for (i=0; i<passLength; i++) {
    password += randomElement(charPool);
  }

  return password; // Bring it home
}

// Write password to the #password input
function writePassword() {
  document.querySelector("#password").value = generatePassword();
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
