//script.js first connection in portfolio !
//1. checking if the java scrit is working
console.log("JavaScript is working!🚀");

// 2. Display the current year in the footer
const footerYear = document.querySelector(".footer-year");
console.log(footerYear);
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

//3. Greeting based on the time of day
const greetingElement = () => {
    const hours = new Date().getHours();
    console.log(hours);
    if (hours >= 6 && hours < 12) {
        return "Good Morning!";
    } else if (hours >= 12 && hours < 17) {
        return "Good Afternoon!";
    } else {
        return "Good Evening!";
    }
}
const herotitle = document.querySelector(".hero-section h1");
console.log(herotitle);
if (herotitle) {
    herotitle.textContent = `${greetingElement()},I'm Rahul K R 👋`;
}
// ==== MOBILE MENU TOGGLE ===
 
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
 
menuToggle.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',navLinks.classList.contains('open'));
});
 
// === SCROLL-BASED NAVBAR STYLING ====
const header = document.querySelector('.site-header');
 
window.addEventListener('scroll', () =>{
    if (window.scrollY > 50){
        header.classList.add('scrolled')
    }
    else{
        header.classList.remove('scrolled')
    }
})
 
// === ACTIVE NAV LINK on scroll ====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');
 
window.addEventListener('scroll', () =>{
    let current ='';
    sections.forEach(section =>{
        if(window.scrollY >= section.offsetTop-100){
            current=section.getAttribute('id');
        }
    })
    navItems.forEach(link =>{
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
})
//Day 10 - Project Filter System
const projects =[
    { id: 1, name: "Weather App", category: "web", tech: ["React", "API"], img: "images/project1.jpg" ,link :"#"},
    { id: 2, name: "Portfolio Website", category: "web", tech: ["JavaScript"], img: "images/project2.jpg" ,link :"#"},
    { id: 3, name: "Task Manager", category: "design", tech: ["HTML", "CSS"], img: "images/project3.jpg" ,link :"#"},
    { id: 4, name: "Sentinal Website", category: "web", tech: ["JavaScript"], img: "images/project4.jpg" ,link :"#"},
    { id: 5, name: "E-commerce Design", category: "design", tech: ["Figma"], img: "images/project5.jpg" ,link :"#"},
    { id: 6, name: "Blog Platform", category: "web", tech: ["Node.js", "Express"], img: "images/project6.jpg" ,link :"#"},
 
];
 
function renderProjects(filter="all") {
    const grid = document.querySelector('.projects-grid');
    const filtered = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);
 
    grid.innerHTML = filtered.map(project =>
        `<article class="project-card">
        <div class="project-card-body">
        <h3>${project.name}</h3>
        <img src="${project.img}" alt="${project.name}">
        <div class="project-tags">
        ${project.tech.map(t => `<span class="tag">${t}</span>`).join('')}      
        </div>
        <a href="${project.link}" class=" btn btn-primary">View Project</a>
        </div>
        </article>
        `).join('');
}
 
//Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn =>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('.filter-btn').forEach(b =>
            b.classList.remove('active'));
            btn.classList.add('active')
            renderProjects(btn.dataset.filter);
});
    });
 
//Intial render
renderProjects();
 