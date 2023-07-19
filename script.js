// Assignment code here
var numbers = "0123456789"
var lowerCase ="abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar ="!@#$%^&*()_+"
var newPassword = []
var finalPassword = []

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function getRandomArray (arr){
    var randomIndex = Math.floor(Math.random()* arr.length)
    var randomElement = arr[randomIndex]
    return randomElement 
    }
    function generatePassword () {
        var userChoice = prompt(
          "Please pick a password length between 8-128 characters"
        );
        while (userChoice <8 || userChoice >128 || null || isNaN(userChoice)){
         alert ("Number must be an integer, greater than 8 or less than 128")
         return null
        //  Criteria add numers, upper, lower, special characters
        // if statement for when chosen above the following happens   
      }
         let addNumbers =confirm 
          ("Do you need numbers in your password?");
        
        if (addNumbers === true) {
          newPassword += numbers;
        }
        let addLowerCase =confirm 
        ("Do you need lower case letters in your password?");
        
        if (addLowerCase === true) {
        newPassword += lowerCase;
        }
        let addUpperCase =confirm 
        ("Do you need upper case letters in your password?");
        
        if (addUpperCase === true) {
        newPassword += upperCase;
        }
        let addSpecialChar =confirm 
        ("Do you need special characters in your password?");
        
        if (addSpecialChar === true) {
        newPassword += specialChar;
        }
        if (
          addNumbers === false &&
          addLowerCase === false &&
          addUpperCase === false &&
          addSpecialChar === false
        ) {
          alert ("Must pick atleast one")
        }
        console.log (newPassword)
        console.log (userChoice)
        for (var i = 0; i< userChoice; i ++) {
       var shuffleNumbers = getRandomArray(newPassword)
      finalPassword.push(shuffleNumbers)
        }
        return finalPassword.join("")
      
      }
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  