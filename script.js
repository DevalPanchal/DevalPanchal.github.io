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

// $("#gform").on("submit", (e) => {
//     $("#gform").prepend("Your form has been submitted. Thank You!");
//     $("#gform").css("text-align", "center");
// });
let submitBtn = document.getElementById("submit-btn");
$("#gform").submit((event) => {
    submitBtn.style.display = "none";   
    $("#gform").prepend("Your form has been submitted. Thank You!");
    
});