// * Generate a password when the button is clicked
//   * Present a series of prompts for password criteria
//     * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
//   * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page


// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function to prompt user for password options
function getPasswordOptions() {
  let summary = false;
  let passCharacteristics = {}
  
  while(summary === false){
    let passLength = prompt("Enter a password length between 8 and 128")
    
    while(passLength < 8 || passLength > 128){
      passLength = prompt(" Only enter a password length between 8 and 128")
    }

    let hasCaps = confirm("Would you like upper-case characters in your password?")
    let hasNoneCaps = confirm("Would you like lower-case characters in your password?")
    let hasSpecial = confirm("Would you like special characters in your password?")
    let hasNum = confirm("Would you like numerical characters in your password?")

    while( hasCaps === false && hasNoneCaps === false && hasSpecial === false && hasNum === false){
      alert("At least one of these options needs to be selected")
      let hasCaps = confirm("Would you like upper-case characters in your password?")
      let hasNoneCaps = confirm("Would you like lower-case characters in your password?")
      let hasSpecial = confirm("Would you like special characters in your password?")
      let hasNum = confirm("Would you like numerical characters in your password?")
    }

    passCharacteristics = {
      length: passLength,
      caps: hasCaps,
      nonCaps: hasNoneCaps,
      special: hasSpecial,
      num: hasNum
    }
    summary = confirm(`Confirm:\n Length:  ${passLength}\n Capital Letters?  ${hasCaps}\n Lower Case Letters?  ${hasNoneCaps}\n Special Characters?  ${hasSpecial}\n Numbers?  ${hasNum}`)

  }
  return passCharacteristics
}

// Function for getting a random element from an array
function getRandom(arr) {
  getRandomInt(3)

}

// Function to generate password with user input
function generatePassword() {
  let passCharacteristics = getPasswordOptions()
  let randomCharArr = []
  
  if(passCharacteristics.caps === true){
    alert('in the caps condition')
    randomCharArr.push(upperCasedCharacters)
    
  }
  if(passCharacteristics.nonCaps === true){
    alert('in the non condition')
    randomCharArr.push(lowerCasedCharacters)
    
  }
  if(passCharacteristics.num === true){
    alert('in the num condition')
    randomCharArr.push(numericCharacters)
    
  }
  if(passCharacteristics.special === true){
    alert('in the special condition')
    randomCharArr.push(specialCharacters)
    
  }
  
  for(let i = 0; i<randomCharArr.length; i++){
    alert(randomCharArr[i])
  }


  
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);