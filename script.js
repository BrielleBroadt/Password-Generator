// Assignment code here
var numbers = "0123456789"
var lowerCase ="abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar ="!@#$%^&*()_+"
var newPassword = []
var finalPassword = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");





function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  