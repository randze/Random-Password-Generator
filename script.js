// Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercase, uppercase, numeric, and/or special characters
var smallAlpha = "abcdefghijklmnopqrstuvwxyz";
var bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomNum = "0123456789";
var randomChar = "!@#$%?&";
var rndLetters = smallAlpha;



// Write password to the #password input

// Randomize array using Durstenfeld shuffle algorithm from Stackoverflow
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array
  }
}

function writePassword() {
  var generatedPass = []
  console.log('Password generator started...')
  // PROMPTS
  // Check to Add random Uppercase letters
  var checkUpper = confirm("Do you want to include Uppercase Letters?");
    console.log(checkUpper)
    if (checkUpper){ rndLetters += bigAlpha }

  // Check to Add random numbers 
  var checkNum = confirm("Do you want to include Numbers?");
    console.log(checkNum)
    if (checkNum){ rndLetters += randomNum }

  // Check to Add random special characters
  var checkChar = confirm("Do you want to include Special Characters?");
    console.log(checkChar)
    if (checkChar){ rndLetters += randomChar }

  // Prompt for length of password
  var checkPassLength = prompt("Enter length of password to be generated [ 8-128 ]")
  console.log(checkPassLength)

  // Convert password length from string to number
  checkPassLength = Number(checkPassLength);
  console.log(checkPassLength)

  if (checkPassLength >=8 && checkPassLength <= 128) {
    // Add 1 of each wanted element
    if (checkUpper) { generatedPass.push( bigAlpha[Math.floor( Math.random() * bigAlpha.length ) ])
      // Console Log Check
      // console.log (generatedPass)
      checkPassLength = checkPassLength-1;
    }
    if (checkNum) { generatedPass.push( randomNum[Math.floor( Math.random() * randomNum.length ) ])
      // Console Log Check
      // console.log (generatedPass)
      checkPassLength = checkPassLength-1;
    }
    if (checkChar) {generatedPass.push( randomChar[Math.floor( Math.random() * randomChar.length ) ])
      // Console Log Check
      // console.log (generatedPass)
      checkPassLength = checkPassLength-1;
    }

    // Console Log Check
    // console.log(checkPassLength)

    // Generate rest of random password
    for (var i=0 ; i < checkPassLength ; i++){
      generatedPass.push( rndLetters [Math.floor( Math.random() * rndLetters.length ) ])
    }

    // Console Log Check
    // console.log(`All letters ${generatedPass}`)

    // Shuffle Password Array & convert to String
    generatedPass = shuffleArray(generatedPass);
    generatedPass = generatedPass.join('');

    // Console Log Check
    // console.log(`Shuffled Complete ${generatedPass}`)
    
    document.querySelector('#password').innerHTML = generatedPass

  }

  else {
    checkPassLength = prompt("Enter length of password to be generated [ 8-128 ]")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
