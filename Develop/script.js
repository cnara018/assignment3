var upperEl = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerEl = 'abcdefghijklmnopqrstuvwxyz';
var numEl = '0123456789';
var specialEl = '~!@#$%^&*()_+=';

var button = document.getElementById("generate");


var userChoices = {};


button.addEventListener("click", function () {
  var charLength = parseInt(prompt("Please type in a number between 8 and 128."));

  if ((charLength > 7) && (charLength < 129)) {

    promptUser();

  }

  else {
    alert("Please enter a valid range please.")
  }

  console.log(charLength)

  function promptUser() {
    var numChar = confirm("Would you like numbers?");
    var lowerChar = confirm("Would you like lowercase characters?");
    var upperChar = confirm("Would you like uppercase characters?");
    var special = confirm("Would you like special characters?");

    if (numChar) {
      userChoices["numEl"] = numEl;
    }
    else if (!numChar) {
      !userChoices["numEL"];
    }

    if (lowerChar) {
      userChoices["lowerEl"] = lowerEl;
    }
    else if (!lowerChar) {
      !userChoices["lowerEL"];
    }
    if (upperChar) {
      userChoices["upperEl"] = upperEl;
    }
    else if (!upperChar) {
      !userChoices["upperEl"];
    }
    if (special) {
      userChoices["specialEl"] = specialEl;
    }
    else if (!special) {
      !userChoices["specialEl"];
    }

    if(!numChar && !special && !upperChar && !lowerChar) 
    {
      alert("Atleast one must be selected");
    
    }
    

    console.log(userChoices);
  }


  function writePassword() {
    let finalPassword = '';
    for (var i = 0; i < charLength; i++) {

      let passwordEls = Object.keys(userChoices)
      let randomEl = passwordEls[Math.floor(Math.random() * passwordEls.length)]
      let char = getRandomCharacter(userChoices[randomEl]);

      finalPassword += char;

      console.log('RandomCharacter', char);
      console.log(finalPassword, finalPassword.length);
      console.log('>>>>>>>>>>>>>>>>', charLength)



    }
    return finalPassword
  }

  function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)]
  }

  writePassword();

  password.innerHTML = writePassword();
})



