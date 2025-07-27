
// Function to create a new section dynamically
function loadPage(contentHTML,activeId) {
    const oldSection = document.querySelector("section");
    oldSection.remove();

    const newSection = document.createElement("section");

    if( activeId =="b1") {
        newSection.innerHTML = `
            <nav style="position:absolute; right:6vmax";>
                <div id="b1"><a href="#">Home</a></div>
                <div id="b2"><a href="#">About</a></div>
                <div id="b3"><a href="#">Resume</a></div>
                <div id="b4"><a href="#">Portfolio</a></div>
                <div id="b5"><a href="#">Contact</a></div>
            </nav>
            ${contentHTML}
        `;
    }

    else {
        newSection.innerHTML = `
            <div style="height: 14%; width: 100%; background-color: rgb(8,20,49); border-bottom: 2px solid white;">
                <nav>
                    <div id="b1"><a href="#">Home</a></div>
                    <div id="b2"><a href="#">About</a></div>
                    <div id="b3"><a href="#">Resume</a></div>
                    <div id="b4"><a href="#">Portfolio</a></div>
                    <div id="b5"><a href="#">Contact</a></div>
                </nav>
            </div>
            ${contentHTML}
            `;
    }
    document.body.appendChild(newSection);
    document.querySelector(`#${activeId} a`).style.color = "rgb(30,99,195)";
    setupNavEvents();
}

// Functions for each page
function loadHome() {
    
    loadPage(`
        <div id="content" style="margin :15vmin 0px 5vmin 60px;">
            <div id="box">
                <h1>Hi, I'm Jacob Aiden</h1>
                <h2>Frontend Developer</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis ut in dolores eos obcaecati veniam autem nostrum minima
                    fugiat atque tempora nulla quasi nobis consequuntur,
                    ullam nam, unde adipisci voluptas.</p>
                <button id="button1">Hire me</button>
                <button id="button2">Let's talk</button>
            </div>
        </div>
    `,"b1");
}

function loadAbout() {
    
    loadPage(`
        <iframe src="http://127.0.0.1:5500/projects/about.html"  style="width:100%; height:100%; border:none; display:block; "></iframe>
    `,"b2");
}

function loadResume() {
    
    loadPage(`
        <iframe src="http://127.0.0.1:5500/projects/resume.html"  style="width:100%; height:100%; border:none; display:block; "></iframe>
    `,"b3");
}

function loadPortfolio() {
    
    loadPage(`
        
        <iframe src="http://127.0.0.1:5500/projects/portfolio.html"  style="width:100%; height:100%; border:none; display:block; "></iframe>
    `,"b4");
}

function loadContact() {
    
    loadPage(`
        <iframe src="http://127.0.0.1:5500/projects/contact.html"  style="width:100%;
        height:100%; border:none;
        display:block; "></iframe>
    `,"b5");
}

// Setup event listeners for nav
function setupNavEvents() {
    document.querySelector("#b1 a").addEventListener("click", loadHome);
    document.querySelector("#b2 a").addEventListener("click", loadAbout);
    document.querySelector("#b3 a").addEventListener("click", loadResume);
    document.querySelector("#b4 a").addEventListener("click", loadPortfolio);
    document.querySelector("#b5 a").addEventListener("click", loadContact);
}

// Initialize the navigation on first load
setupNavEvents();
