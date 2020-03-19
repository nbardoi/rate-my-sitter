var lsEmail = localStorage.getItem("email");
console.log(lsEmail);


function getUserData() {
    $.ajax({
        method: "GET",
        url: "/api/users/"
      }).then(function(response) {
          console.log(response)
          for(var i=0; i < response.length; i++) {
              if(response[i].email === lsEmail) {
                  console.log(response[i]);
                  var firstname = response[i].firstname;
                  var lastname = response[i].lastname;
                  localStorage.setItem("firstname", firstname);
                  localStorage.setItem("lastname", lastname)

                  displayName();
              }
          }
      });


}

function displayName() {
var welcome = $("#welcome");

var firstName = localStorage.getItem("firstname");
var lastName = localStorage.getItem("lastname");

welcome.text("Welcome, " + firstName + " " + lastName);

console.log(firstName);
console.log(lastName);
};

getUserData();