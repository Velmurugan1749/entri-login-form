    function func() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if (username === "Entri elevate" && 
        password === "admin123") { 

          alert("Login Successfully!!! WELCOME")
          window.location.assign("homepage.html")
      } 
      else {
        
        alert("Invalid username or password");
      }
}

function forg()
{
    let forg=prompt("Enter the email ")
    
    let n1=document.getElementById("forget").value
    
    if(forg == "EntriElevate")
    (
        alert("Verification Code Send to your Email")
    )
    else
    {
        alert(" Invalid Email")
    }
}