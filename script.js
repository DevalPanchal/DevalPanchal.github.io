const hamburger = () => {
    let nav = document.getElementById('my-nav');
    if (nav.className === 'nav-bar') {
        nav.className += " hamburger-menu";
    } else {
        nav.className = "nav-bar";
    }
}

function load() {
    if (submitted) { /** */ }
}

let submitted = false;

let submitBtn = document.getElementById("submit-btn");
let nameField = document.getElementById("name");
let subjectField = document.getElementById("subject");
let emailField = document.getElementById("email");

$("#gform").submit((event) => {
    submitBtn.style.display = "none";   
    $("#gform").prepend("Your form has been submitted. Thank You!");
});