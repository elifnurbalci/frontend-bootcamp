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
