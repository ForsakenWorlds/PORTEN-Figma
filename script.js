const headerBurger = document.getElementById("headerBurger");
const headerMenu = document.getElementById("headerMenu");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active")
})