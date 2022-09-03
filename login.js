function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if ( username == "admin" && password == "admin"){
    alert ("Login successfully");
    window.location = "index.html"; // Redirecting to other page.
    return true;
  }
  else if(username != true)
    alert("Wrong password!");
    // Disabling fields after 3 attempts.
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }