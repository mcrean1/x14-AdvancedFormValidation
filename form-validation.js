function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var txt = userEntered.length;
  if( txt < 6){
document.getElementById("usernamerError").innerHTML="Bad username.";
document.getElementById("usernameError").classList.remove("hidden-message");
document.getElementById("usernameError").classList.add("shown-message");
document.getElementById("usernameGroup").classList.add("has-error");
}



var password = "password";
if(passEntered == password){
  document.getElementById("passwordError").innerHTML="Bad password.";
  document.getElementById("passwordError").classList.remove("hidden-message");
  document.getElementById("passwordError").classList.add("shown-message");
  document.getElementById("passwordGroup").classList.add("has-error");
}
}
