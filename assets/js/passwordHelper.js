var cases = [
    {
      name: "lowercase",
      set: "abcdefghijklmnopqrstuvwxyz".split('')
    }, {
      name: "uppercase",
      set: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    }, {
      name: "numbers",
      set: "0123456789".split('')
    }, {
      name: "special",
      set: "`-=[];',./\\~!@#$%^&*()_+{}|:\"<>?".split('')
    }
  ]

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
      // If we're using that char set, redefine the charPool to also include that set
      if (confirm(`Use ${element.name} characters?`)) {charPool = charPool.concat(element.set)}
  });

  return charPool;
}