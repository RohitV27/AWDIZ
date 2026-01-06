function login(event) {
event.preventDefault();
// alert("Hello")

var email = document.getElementById("email").value;
console.log("email:", email);
var password = document.getElementById("password").value;
console.log("password:", password)

if(!email || !password) {
alert ("All fields are required!")
}

var userData = {email, password};
localStorage.setItem("Users", JSON.stringify(userData));
alert("Login Successful!")

}