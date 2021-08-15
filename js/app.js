const navBtn = document.getElementById("nav-toggle");
const  navLinks = document.getElementById("nav-links")
navBtn.addEventListener("click", () => {
navLinks.classList.toggle("show-links")   
})

