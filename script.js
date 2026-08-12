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