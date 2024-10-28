document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector("#nav");

    menu.addEventListener("click", () => {
        menu.classList.toggle("menu--active");
        nav.classList.toggle("nav--show");
    });
});
