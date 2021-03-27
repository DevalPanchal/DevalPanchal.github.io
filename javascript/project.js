const projectData = [
    {
        id: 1,
        type: "JavaScript",
        name: "Personal Portfolio",
        image: "./images/Portfolio2.PNG",
        technologies: ["Javascript", "jQuery", "HTML", "SCSS"],
        description: "Developed a personal portfolio website to display my projects and skills. This is a fully responsive website and works on majority media devices.This page is hosted by GitHub pages.",
        github: "https://github.com/DevalPanchal/devalpanchal.github.io/tree/master",
        location: "#Home"
    },
    {
        id: 2,
        type: "React",
        name: "Random Quote Machine",
        image: "./images/Random_Quote_Machine.PNG",
        technologies: ["ReactJS", "HTML/CSS"],
        description: "This project was created using React.js Library. This project fetches data using axios, which is a promise based HTTP client for the browser. The data was collected from a site provided by",
        github: "https://github.com/DevalPanchal/Random-Quote-Machine",
        location: "https://codepen.io/devalpanchal2401/pen/poEaRJW"
    },
    {
        id: 3,
        type: "Node",
        name: "Real-Time Chat Application",
        image: "./images/JustChat.PNG",
        technologies: ["NodeJS", "Express", "Socket.io", "ejs", "SCSS"],
        description: "This is a real time chat application, made using socket.io, enabling real-time bidirectional communication. This app at it's core showcases the communication between the frontend and backend, and made into a fun project, which can be used to talk to friends.",
        github: "https://github.com/DevalPanchal/Chat_App",
        location: "https://fast-citadel-22034.herokuapp.com/"
    },
    {
        id: 4,
        type: "JavaScript",
        name: "Insertion Sort Visualisation",
        image: "./images/Sorting_Algorithm.PNG",
        technologies: ["JavaScript", "D3.js", "HTML", "SCSS"],
        description: "This project was made using basic html/css and javascript along with javascript's data visualisation library. The project displays how the insertion sort algorithm works by giving the user a visual representation of the algorithm works behind the scenes step by step.",
        github: "https://github.com/DevalPanchal/Insertion-Sort-Visualisation",
        location: "https://codepen.io/devalpanchal2401/full/vYXQBQL"
    },
    {
        id: 5,
        type: "Node",
        name: "Mini Message Board",
        image: "./images/Mini_Message_Board.PNG",
        technologies: ["NodeJS", "Express", "ejs", "SCSS"],
        description: "This project was developed using node.js. The project displays the basic functionality of a node project, using express as the backend web framework. The views of this project were generated by ejs templating language.",
        github: "https://github.com/DevalPanchal/Mini-Message-Board",
        location: "https://stormy-citadel-85540.herokuapp.com/"
    },
    {
        id: 6,
        type: "JavaScript",
        name: "JavaScript Calculator",
        image: "./images/Javascript_Calculator.PNG",
        technologies: ["JavaScript", "JQuery", "HTML/CSS"],
        description: "This project was made using HTML/CSS, Javascript and Jquery. This is a simple javascript calculator capable to doing basic arithmetic operations (addition, subtraction, multiplication and division), following BEDMAS/PEMDAS rule.",
        github: "https://github.com/DevalPanchal/Javascript-Calculator",
        location: "https://codepen.io/devalpanchal2401/pen/bGwKWMQ"
    },
    {
        id: 7,
        type: "JavaScript",
        name: "Quiz App",
        image: "./images/Simple_Quiz_App.PNG",
        technologies: ["JavaScript", "HTML/CSS"],
        description: "This project was made using plain HTML/CSS and Javascript. This app features 3 selectable quiz options each with there own set of questions. This quiz is multiple choice giving 4 options to the user to selected from and displaying a progress bar and a final mark when completed.",
        github: "https://github.com/DevalPanchal/Simple-Quiz-App",
        location: "https://codepen.io/devalpanchal2401/project/editor/ANwPeN#"
    },
    {
        id: 8,
        type: "JavaScript",
        name: "United States GDP Visualization",
        image: "./images/Data_Visualisation.PNG",
        technologies: ["JavaScript", "D3.js", "HTML/CSS"],
        description: "This project was made using basic html/css and javascript along with javascript's data visualisation library. The project retrieves data using XMLHttpRequest() function and gives a graphical representation of the data provided.",
        github: "https://github.com/DevalPanchal/United_States_GDP_Visualisation",
        location: "https://codepen.io/devalpanchal2401/pen/yLaRjoJ"
    },
    {
        id: 9,
        type: "Python",
        name: "BlackJack",
        image: "./images/BlackJack.PNG",
        technologies: ["Python"],
        description: "This project was made using python. This project generates a deck of cards following an object-oriented principles delivering a robust card system which can be used in any card game.",
        github: "https://github.com/DevalPanchal/Python_Blackjack",
        location: "https://repl.it/@DevalPanchal/PythonBlackjack#Game.py"
    }
];

const allProjects = document.getElementById('all-projects');
const reactProjects = document.getElementById('react-projects');
const javascriptProjects = document.getElementById('javascript-projects');
const nodeProjects = document.getElementById('node-projects');
const pythonProjects = document.getElementById('python-projects');

const projectWrapper = document.querySelector('.project-wrapper');

const viewAllProjects = () => {
    console.log("you are view all projects");
    let filteredData = projectData.filter(p => p.type);
    resetState();
    appendFilteredData(filteredData);
    return filteredData;
}

const viewReactProjects = () => {
    console.log("you  are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "React");
    resetState();
    appendFilteredData(filteredData);
    console.log(filteredData);
}

const viewJavaScriptProjects = () => {
    console.log("you  are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "JavaScript");
    resetState();
    appendFilteredData(filteredData);
    console.log(filteredData);
}

const viewNodeProjects = () => {
    console.log("you  are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "Node");
    resetState();
    appendFilteredData(filteredData);
    console.log(filteredData);
}

const viewPythonProjects = () => {
    console.log("you  are viewing react projects");
    let filteredData = projectData.filter(p => p.type == "Python");
    resetState();
    appendFilteredData(filteredData);
    console.log(filteredData);
}

projectData.forEach((projects) => {
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
                <a href=${projects.location} rel="noopener noreferrer" target="_blank" class="link-site">View Site</a>
            </div>
        </div>
    </div>
    `;

    // projectDiv.classList.add('project');
    // projectDiv.innerHTML = `${projectData.name}`;

    projectWrapper.appendChild(projectDiv);
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
                    <a href=${filtered.location} rel="noopener noreferrer" target="_blank" class="link-site">View Site</a>
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

allProjects.addEventListener('click', viewAllProjects);
reactProjects.addEventListener('click', viewReactProjects);
javascriptProjects.addEventListener('click', viewJavaScriptProjects);
nodeProjects.addEventListener('click', viewNodeProjects);
pythonProjects.addEventListener('click', viewPythonProjects);