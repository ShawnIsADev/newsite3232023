const menuButton = document.querySelector("#menu-btn")
const navbar = document.querySelector(".header .flex .navbar")


menuButton.onclick = () => {
    menuButton.classList.toggle('fa-times');
    navbar.classList.toggle("active")
}