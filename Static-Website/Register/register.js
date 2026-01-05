function register(event) {
    event.preventDefault();
    // alert("Hello from Register")

 var name = document.getElementById("name").value;
 console.log("name: ", name);
var email = document.getElementById("email").value;
console.log("email: ", email);
var password = document.getElementById("password").value;
console.log("password: ", password);

if (!name || !email || !password) {
    alert("All fields are required!")
}

var userData = {name, email, password};
localStorage.setItem("Users", JSON.stringify(userData));
alert("Registration Successful!")

}