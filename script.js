/* ================= MENU MOBILE ================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});


/* ================= FECHAR MENU AO CLICAR ================= */

const links = document.querySelectorAll(".nav-menu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


/* ================= FORMULÁRIO ================= */

const form = document.getElementById("contactForm");

const toast = document.getElementById("toast");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    toast.classList.add("show");

    form.reset();

    setTimeout(function () {

        toast.classList.remove("show");

    }, 3500);

});