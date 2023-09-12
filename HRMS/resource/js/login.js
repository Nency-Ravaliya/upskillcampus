var attempt = 10; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    if (username == "nency" && password == "123"){
        alert("Login successfully");
        //window.location.assign("dashboard.html"); // Redirecting to other page.
        //window.location.replace = "http://www.w3schools.com";
        //window.location="../admin/dashboard.html";
        
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("userName").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementsByName("login").disabled = true;
            return false;
        }
    }
}