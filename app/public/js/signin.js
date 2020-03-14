localStorage.clear();
window.onbeforeunload = function() {
    var email = document.getElementById("email").value;
    localStorage.setItem("email", email);
}

