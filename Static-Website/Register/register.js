// function register(event) {
//     event.preventDefault();
//     // alert("Hello from Register")

//  var name = document.getElementById("name").value;
//  console.log("name: ", name);
// var email = document.getElementById("email").value;
// console.log("email: ", email);
// var password = document.getElementById("password").value;
// console.log("password: ", password);

// if (!name || !email || !password) {
//     alert("All fields are required!")
//     return;
// }

// var userData = {name, email, password};

// const users = JSON.parse(localStorage.getItem("Users")) || [];

// users.push(userData);

// localStorage.setItem("Users", JSON.stringify(users));
// console.log(JSON.parse(localStorage.getItem("Users")));


// alert("Registration Successful!");

// }

function register(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("All fields are required!");
    return;
  }

  var userData = { name, email, password };

  const users = JSON.parse(localStorage.getItem("Users")) || [];
  users.push(userData);

  localStorage.setItem("Users", JSON.stringify(users));

  alert("Registration Successful!");
}