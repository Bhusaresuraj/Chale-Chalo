function validate() {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    if (email === "surajbhusare393@gmail.com" && password === "suraj@123") {
        alert("Login successful!");
        return true;
    } else {
        alert("Please enter the correct email and password.");
        return false;
    }
}
