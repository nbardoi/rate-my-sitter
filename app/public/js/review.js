var welcome = $("#welcome");

var firstName = localStorage.getItem("firstname");
var lastName = localStorage.getItem("lastname");

welcome.append("Welcome, " + firstName + " " + lastName);

console.log(firstName);
console.log(lastName);
