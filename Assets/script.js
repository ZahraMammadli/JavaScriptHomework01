// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Declare input variables

var passwordLength;
var lowerletter;
var UpperLetter;
var withNumbers;
var withCharacters;
var userChoices;

// Genereate Password Function

function generatePassword() {
  // Collecting User inputs

  passwordLength = prompt(
    "Please enter length of your password between 8 and 128"
  );
  // validation of the numeric input within required range

  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Please enter value between 8 and 128");
    passwordLength = prompt(
      "Please enter length of your password between 8 and 128"
    );
  }
  lowerletter = confirm("If you want lower case letters in password Press OK");
  UpperLetter = confirm("If you want upper case letters in password Press OK");
  withNumbers = confirm("If you want numbers in password Press OK");
  withCharacters = confirm(
    "If you want special characters in password Press OK"
  );

  // inputs validations

  while (!lowerletter && !UpperLetter && !withNumbers && !withCharacters) {
    userChoices = alert("Please choose at least 1 criteria");
    lowerletter = confirm(
      "If you want lower case letters in password Press OK"
    );
    UpperLetter = confirm(
      "If you want upper case letters in password Press OK"
    );
    withNumbers = confirm("If you want numbers in password Press OK");
    withCharacters = confirm(
      "If you want special characters in password Press OK"
    );
  }

  //This section iterates over random options based on users criteria for password and generates it
  // while research i found with the following website  https://randojs.com/ for more easy and better random solution and decided to use it

  var password = "";
  var allowed = {}; //here i am creating an object to combine all random combinations of user defined inputs
  if (UpperLetter)
    password += rando((allowed.UpperLetter = "QWERTYUIOPASDFGHJKLZXCVBNM"));
  if (lowerletter)
    password += rando((allowed.lowerletter = "qwertyuiopasdfghjklzxcvbnm"));
  if (withNumbers) password += rando((allowed.withNumbers = "1234567890"));
  if (withCharacters)
    password += rando((allowed.withCharacters = "!@#$%^&*(){}[]=<>/,."));

  for (var i = password.length; i < passwordLength; i++)
    password += rando(rando(allowed).value);
  password = randoSequence(password).join(""); // with randoSequence i am returning an array in random order
  return password;
}
