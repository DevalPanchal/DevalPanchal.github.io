const projectData = [
    {
        id: 1,
        type: "JavaScript",
        name: "Personal Portfolio",
        image: "./images/Portfolio2.PNG",
        technologies: ["Javascript", "jQuery", "HTML", "SASS"],
        description: "Developed a personal portfolio website to display my projects and skills. This is a fully responsive website and works on majority media devices.This page is hosted by GitHub pages.",
        github: "https://github.com/DevalPanchal/devalpanchal.github.io/tree/master",
        location: "#Home",
        highlight: true
    },
    {
        id: 2,
        type: "JavaScript",
        name: "Sorting Algorithm Visualization",
        image: "./images/Sorting_Algorithm.PNG",
        technologies: ["ReactJS", "HTML", "SASS"],
        description: "This is a sorting algorithm visualization project, made to better understand different types of sorting algorithms. This project was made using ReactJS. This project displays how different types of sorting algorithms work, by giving the user a visual representation of the algorithm works behind the scenes step by step.",
        github: "https://github.com/DevalPanchal/Sorting-Algorithms",
        location: "https://devalpanchal.github.io/Sorting-Algorithms/",
        highlight: true
    },
    {
        id: 3,
        type: "Java",
        name: "Pictionary Clone",
        image: "./images/pictionary.PNG",
        technologies: ["Java", "Javafx", "FXML", "CSS"],
        description: "Responsible for the front end design for a simple multiplayer pictionary game made as group project with users: <a href='https://github.com/jkaterberg' class='member-link'>jkaterberg</a>, <a href='https://github.com/daniel-earley' class='member-link'>daniel-earley</a>, <a href='https://github.com/SJustinWong' class='member-link'>SJustinWong</a>. This game Follows the standard pictionary game loop, one player is selected to draw an image from a random word. The image is streamed to all other players, who are able to make guesses about the original word. Once the word is guessed, the next player is given a word to draw and the loop repeats",
        github: "https://github.com/DevalPanchal/not-pictionary",
        location: null,
        highlight: true
    },
    {
        id: 4,
        type: "React",
        name: "Pokedex",
        image: "./images/app-preview.PNG",
        technologies: ["ReactJS", "HTML", "SASS"],
        description: "A simple pokedex webpage showcasing pokemon, from <a href='pokeapi.co' class='member-link'>pokeapi.co</a>. This website was made using ReactJS and utilizing react hooks to achieve the desired outcome. The goal of this app was to familiarize myself with react hooks and the fetch api, and learn about caching fetched data.",
        github: "https://github.com/DevalPanchal/react-pokedex",
        location: "https://devalpanchal.github.io/react-pokedex/",
        highlight: true
    },
    {
        id: 5,
        type: "Node",
        name: "Real-Time Chat Application",
        image: "./images/JustChat.PNG",
        technologies: ["NodeJS", "Express", "Socket.io", "ejs", "SASS"],
        description: "This is a real time chat application, made using socket.io, enabling real-time bidirectional communication. This app at it's core showcases the communication between the frontend and backend, and made into a fun project, which can be used to talk to friends.",
        github: "https://github.com/DevalPanchal/Chat_App",
        location: "https://fast-citadel-22034.herokuapp.com/",
        highlight: true
    },
    {
        id: 6,
        type: "React",
        name: "Simple Budget Calculator",
        image: "./images/Budget_Calculator.PNG",
        technologies: ["ReactJS", "HTML/CSS"],
        description: "This is a simple frontend monthly budget planner. The goal of this project was to better understand the flow of frontend application using various techniques, such as CRUD methods, data visualization, and design flow. This project allows storage in your browser's localstorage, and is planned to move to a server and database, for robust usage of the app.",
        github: "https://github.com/DevalPanchal/MonthlyBudgetPlanner",
        location: "https://devalpanchal.github.io/MonthlyBudgetPlanner/",
        highlight: true
    },
    {
        id: 7,
        type: "Java",
        name: "Spam Filter",
        image: "./images/SpamFilter.PNG",
        technologies: ['Java', 'Javafx', "FXML"],
        description: "This is a simple spam detector developed using java and the interface was managed using javaFX. The purpose of this project was to understand File I/O and learn the MVC fundamentals using a provided dataset of emails for the model.",
        github: "https://github.com/DevalPanchal/spam_filter",
        location: null,
        highlight: false
    },
    {
        id: 8,
        type: "Java",
        name: "File Sharer",
        image: "./images/FileSharing.PNG",
        technologies: ["Java", "Javafx", "FXML"],
        description: "Developed a simple file sharing application using java and javafx. This project applied sockets multithreading and file i/o skills and built with an MVC structure in mind. This project depends on gradle and the files associated with it.",
        github: "https://github.com/DevalPanchal/Assignment2",
        location: null,
        highlight: false
    },
    {
        id: 9,
        type: "Node",
        name: "Mini Message Board",
        image: "./images/Mini_Message_Board.PNG",
        technologies: ["NodeJS", "Express", "ejs", "SASS"],
        description: "This project was developed using node.js. The project displays the basic functionality of a node project, using express as the backend web framework. The views of this project were generated by ejs templating language.",
        github: "https://github.com/DevalPanchal/Mini-Message-Board",
        location: "https://stormy-citadel-85540.herokuapp.com/",
        highlight: false
    },
    {
        id: 10,
        type: "React",
        name: "Random Quote Machine",
        image: "./images/Random_Quote_Machine.PNG",
        technologies: ["ReactJS", "HTML/CSS"],
        description: "This project was created using React.js Library. This project fetches data using axios, which is a promise based HTTP client for the browser. The data was collected from a site provided by",
        github: "https://github.com/DevalPanchal/Random-Quote-Machine",
        location: "https://codepen.io/devalpanchal2401/pen/poEaRJW",
        highlight: false
    },
    {
        id: 11,
        type: "JavaScript",
        name: "Quiz App",
        image: "./images/Simple_Quiz_App.PNG",
        technologies: ["JavaScript", "HTML/CSS"],
        description: "This project was made using plain HTML/CSS and Javascript. This app features 3 selectable quiz options each with there own set of questions. This quiz is multiple choice giving 4 options to the user to selected from and displaying a progress bar and a final mark when completed.",
        github: "https://github.com/DevalPanchal/Simple-Quiz-App",
        location: "https://codepen.io/devalpanchal2401/project/editor/ANwPeN#",
        highlight: false
    },
    {
        id: 12,
        type: "JavaScript",
        name: "United States GDP Visualization",
        image: "./images/Data_Visualisation.PNG",
        technologies: ["JavaScript", "D3.js", "HTML/CSS"],
        description: "This project was made using basic html/css and javascript along with javascript's data visualisation library. The project retrieves data using XMLHttpRequest() function and gives a graphical representation of the data provided.",
        github: "https://github.com/DevalPanchal/United_States_GDP_Visualisation",
        location: "https://codepen.io/devalpanchal2401/pen/yLaRjoJ",
        highlight: false
    },
    {
        id: 13,
        type: "JavaScript",
        name: "JavaScript Calculator",
        image: "./images/Javascript_Calculator.PNG",
        technologies: ["JavaScript", "JQuery", "HTML/CSS"],
        description: "This project was made using HTML/CSS, Javascript and Jquery. This is a simple javascript calculator capable to doing basic arithmetic operations (addition, subtraction, multiplication and division), following BEDMAS/PEMDAS rule.",
        github: "https://github.com/DevalPanchal/Javascript-Calculator",
        location: "https://codepen.io/devalpanchal2401/pen/bGwKWMQ",
        highlight: false
    },
    {
        id: 14,
        type: "Python",
        name: "BlackJack",
        image: "./images/Test.PNG",
        technologies: ["Python"],
        description: "This project was made using python. This project generates a deck of cards following an object-oriented principles delivering a robust card system which can be used in any card game.",
        github: "https://github.com/DevalPanchal/Python_Blackjack",
        location: "https://repl.it/@DevalPanchal/PythonBlackjack#Game.py",
        highlight: false
    },    
];

const highlightProjects = document.getElementById('highlight-projects');
const allProjects = document.getElementById('all-projects');
const reactProjects = document.getElementById('react-projects');
const javascriptProjects = document.getElementById('javascript-projects');
const nodeProjects = document.getElementById('node-projects');
const pythonProjects = document.getElementById('python-projects');
const javaProjects = document.getElementById("java-projects");

const projectWrapper = document.querySelector('.project-wrapper');


const viewHighlightedProjects = () => {
    console.log("you are viewing highlighted projects");
    let filteredData = projectData.filter(p => p.highlight);
    resetState();
    appendFilteredData(filteredData);
    return filteredData;
}

const viewAllProjects = () => {
    console.log("you are view all projects");
    let filteredData = projectData.filter(p => p.type);
    resetState();
    appendFilteredData(filteredData);
    return filteredData;
}

const viewReactProjects = () => {
    console.log("you are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "React");
    resetState();
    appendFilteredData(filteredData);
    // console.log(filteredData);
}

const viewJavaScriptProjects = () => {
    console.log("you are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "JavaScript");
    resetState();
    appendFilteredData(filteredData);
    // console.log(filteredData);
}

const viewNodeProjects = () => {
    console.log("you are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "Node");
    resetState();
    appendFilteredData(filteredData);
    // console.log(filteredData);
}

const viewPythonProjects = () => {
    console.log("you are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "Python");
    resetState();
    appendFilteredData(filteredData);
    // console.log(filteredData);
}

const viewJavaProjects = () => {
    console.log("you are viewing java projects");
    let filteredData = projectData.filter(p => p.type == "Java");
    resetState();
    appendFilteredData(filteredData);
    // console.log(filteredData);
}

let highlighedProjects = viewHighlightedProjects();

highlighedProjects.forEach((projects) => {
    var projectDiv = document.createElement('div');
    
    projectDiv.innerHTML = `
    <div class="project">
        <img class="project-img" src="${projects.image}" alt="${projects.name}"/>
        <div class="project-information">
            <div class="text">
                <h1>${projects.name}</h1>
                <div class="technologies-used">
                    ${projects.technologies.map(tech => `<div class="technologies">${tech}</div>`).join('')}
                </div>
                <p>${projects.description}</p>
                <a href=${projects.github} rel="noopener noreferrer" target="_blank" class="link-github">Github</a>
                ${projects.location ? `<a href=${projects.location} rel="noopener noreferrer" target="_blank" class="link-site">View Site</a>`: ""}
            </div>
        </div>
    </div>
    `;

    // projectDiv.classList.add('project');
    // projectDiv.innerHTML = `${projectData.name}`;

    // projectWrapper.appendChild(projectDiv);
});

function appendFilteredData(filteredData) {
    filteredData.forEach((filtered) => {
        var projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
        <div class="project">
            <img class="project-img" src="${filtered.image}" alt="${filtered.name}"/>
            <div class="project-information">
                <div class="text">
                    <h1>${filtered.name}</h1>
                    <div class="technologies-used">
                        ${filtered.technologies.map(tech => `<div class="technologies">${tech}</div>`).join('')}
                    </div>
                    <p>${filtered.description}</p>
                    <a href=${filtered.github} rel="noopener noreferrer" target="_blank" class="link-github">Github</a>
                    ${filtered.location ? `<a href=${filtered.location} rel="noopener noreferrer" target="_blank" class="link-site">View Site</a>`: ""}
                </div>
            </div>
        </div>
        `;
        // projectDiv.classList.add('project');
        // projectDiv.innerHTML = `${filteredData.name}`;
        projectWrapper.appendChild(projectDiv);
    });
}

function resetState() {
    projectWrapper.innerHTML = ``;
}

highlightProjects.addEventListener('click', viewHighlightedProjects);
allProjects.addEventListener('click', viewAllProjects);
reactProjects.addEventListener('click', viewReactProjects);
javascriptProjects.addEventListener('click', viewJavaScriptProjects);
nodeProjects.addEventListener('click', viewNodeProjects);
pythonProjects.addEventListener('click', viewPythonProjects);
javaProjects.addEventListener('click', viewJavaProjects);