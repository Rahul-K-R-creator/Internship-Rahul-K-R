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
 