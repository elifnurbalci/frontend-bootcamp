//header scroll islemi
(function () {
    'use strict';
    var header = document.getElementById('header');
    var headerScrolledHandler = function () {
        if (window.scrollY > 100) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }
    window.addEventListener('load', headerScrolledHandler);
    document.addEventListener('scroll', headerScrolledHandler);
})();


//classes tab menu fonksiyonu
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".class-content");

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            contents[index].classList.add("active");
        });
    });

    buttons[0].classList.add("active");
    contents[0].classList.add("active");
});

//nav bar --> hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    menuToggle.addEventListener("click", function () {
        navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    });
});
