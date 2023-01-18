// Assignment code here
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '1234567890';
var symbols = '!@#$%^&*(){}';



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var chosenPassword = '';
  var passwordSize = prompt("Please pick a password length between 8 and 128 characters");
  var uppercaseOption = confirm("Include uppercase characters in password?");
  var lowercaseOption = confirm("Include lowercase characters in password?");
  var numbersOption = confirm("Include numbers in password?");
  var symbolsOption = confirm("Include symbols in password?");
  if (passwordSize >= 8 && passwordSize <= 128) {
    for (let i = 0; i < passwordSize; i++) {

      if (uppercaseOption === true && chosenPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 26);
        chosenPassword = chosenPassword + uppercase[index];
      }
      if (lowercaseOption === true && chosenPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 26);
        chosenPassword = chosenPassword + lowercase[index];
      }
      if (numbersOption === true && chosenPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 10);
        chosenPassword = chosenPassword + numbers[index];
      }
      if (symbolsOption === true && chosenPassword.length < passwordSize) {
        var index = Math.floor(Math.random() * 12);
        chosenPassword = chosenPassword + symbols[index];
      }
    }
  }
  else (
    alert("Please make sure your selection is between 8 and 128")
  )
  return chosenPassword;







function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
