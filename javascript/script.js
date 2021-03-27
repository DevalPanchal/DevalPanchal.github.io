const scrollElems = document.querySelectorAll('.scroll');
const navBar = document.getElementById('navbar');
const projectWrapper = document.querySelector('.project-wrapper');

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById('js-navbar-toggle');

let navLinkTag = document.querySelectorAll("#js-menu");
let navLinks = document.getElementById('nav-links');

const DELAY_TIME = 100;

navBarToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
    navLinkTag.forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                mainNav.classList.remove("active")
            }, DELAY_TIME);
        });
    });
});


for (let i = 0; i < scrollElems.length; i++) {
    const elem = scrollElems[i];

    elem.addEventListener('click', function (e) {
        e.preventDefault();
        // 1. Get the element id to which you want to scroll
        const scrollElemId = e.target.href.split('#')[1];

        // 2. find that node from the document
        const scrollEndElem = document.getElementById(scrollElemId);

        // 3. and well animate to that node.. 
        const anim = requestAnimationFrame((timestamp) => {
            const stamp = timestamp || new Date().getTime();
            const duration = 1200;
            const start = stamp;

            const startScrollOffset = window.pageYOffset;
            const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top - navBar.offsetHeight;

            scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
        })
    })
}

// Lets ignore it for the moment.
const easeInCubic = function (t) { return t }

function easeOutBack(x) {
    const c1 = 1.70158;
    const c3 = c1 + 1;

    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function easeInOutExpo(x) {
    return x === 0
      ? 0
      : x === 1
      ? 1
      : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
      : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}

const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
    const runtime = currentTime - startTime;
    let progress = runtime / duration;

    progress = Math.min(progress, 1);

    const ease = easeInOutExpo(progress);

    window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
    if (runtime < duration) {
        requestAnimationFrame((timestamp) => {
            const currentTime = timestamp || new Date().getTime();
            scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
        })
    }
}