
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-menu .menu-bar");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});