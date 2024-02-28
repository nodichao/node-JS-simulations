var password = require('generate-password');

function randomPassword(){
  var newPass=  password.generate();
    console.log(newPass);
}

randomPassword();