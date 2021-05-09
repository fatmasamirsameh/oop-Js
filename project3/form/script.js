
function validation(){
    var name = document.getElementById("name").value;
    var nameRegex =/^[a-zA-Z]+$/g; 
   var password = document.getElementById("password").value;
  var passwordRegex =/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/g;
   var passwordRegex2 = /(?=\w{8,})/g;
  var email = document.getElementById("email").value;
 //var emailRegex2 =/^[a-zA-Z0-9_]@[a-zA-Z].{1}[a-zA-Z]$/g;
 var emailRegex2 =/^[a-zA-Z0-9]+@(gmail|yahoo)\.(org|com)$/g;
 var  emailRegex =/^\s*$/g;
 //var emailRegex2 =/^[a-zA-Z0-9_]+ @[a-zA-Z0-9_]+(\\.[A-Za-z]{2,})$/g;
    var error_message = document.getElementById("error_message");

    var text;
    error_message.style.padding = "10px";
     error_message.style.color = "red";
    var nameTest = nameRegex.test(name);
    if(nameTest == false || name == " "){
        text = "Please enter only letters in Username field.";
        error_message.innerHTML = text; 
        return false;
    
    }
    
    var passswordTest = passwordRegex.test(password);
    
    passswordTest2 = passwordRegex2.test(password);
    if(passswordTest == false){
        text = " Password must contain one capital letter, one small letter,one number";
        error_message.innerHTML = text;
        return false;
    }
 
   if(passswordTest2 == false || passswordTest2 == " "){
        text = " Password length must be at least 8 character,your password is very weak ";
        error_message.innerHTML = text;
        return false;
    }  
   
   var emailTest = emailRegex.test(email);
   var emailTest2 = emailRegex2.test(email);
   console.log(emailTest);
    console.log(emailTest2);
   
    if(emailTest == true){
        text = "You must fill in an email ";
        error_message.innerHTML = text;
        return false;
    }
     if(emailTest2 == false){
        text = "Email must contain@ , end with dot and domain name ex:test@gamil.com ";
        error_message.innerHTML = text;
        return false;
    }
    if (nameTest == true && passswordTest == true && passswordTest2 == true && emailTest == false && emailTest2 == true ){
        text = ""
        error_message.innerHTML = text; 
        return false;
    }
   
    return false;
}

 