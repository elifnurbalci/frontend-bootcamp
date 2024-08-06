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
        header.classList.add('header-scrolled');
        navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    });
});

//bmi arrow hesaplamasi ve hareketi
document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiImage = document.getElementById('bmi-chart');
    const arrow = document.getElementById('arrow-up');

    if (!heightInput || !weightInput || !bmiImage || !arrow) {
        console.error('Required elements are missing from the DOM.');
        return;
    }

    heightInput.addEventListener('input', calculateBMI);
    weightInput.addEventListener('input', calculateBMI);

    function calculateBMI() {
        const height = parseFloat(heightInput.value) / 100;
        const weight = parseFloat(weightInput.value);
        let arrowPosition=0, bmi, position=0, left=0;

        if (!height || !weight) {
        arrowPosition=0;
    } else {
        bmi = weight / (height * height);
        if (bmi < 13.5) {
            position = 0;
            left = 2;
        } else if (bmi>=13.5 && bmi <18.5) {
            position=0;
            left = bmi - 13;
        } else if (bmi >= 18.5 && bmi < 25) {
            position = 1;
            left = bmi - 18;
        } else if (bmi >= 25 && bmi < 30) {
            position = 2;
            left = bmi - 24;
        } else if (bmi >= 30 && bmi < 35) {
            position = 3;
            left = bmi - 29;
        } else if (bmi >= 40 && bmi < 45) {
            position = 4;
            left = bmi - 39;
        }
        else {
            position = 5;
            left = -2;
        }
          arrowPosition = position * 20 + left;
    }
    arrow.style.left = `${arrowPosition}%`;
    }
});
