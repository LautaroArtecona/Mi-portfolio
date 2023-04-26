const botHamburguesa = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");

botHamburguesa.addEventListener("click", () => {
    menu.classList.toggle("menu_visible");
});