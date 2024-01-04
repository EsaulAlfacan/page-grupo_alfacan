window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var threshold = 500;
    var navbar = document.querySelector('.menu_fixed');

    if (scrollPosition > threshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('resize', function() {
    var navbar = document.querySelector('.menu_fixed');
    var bodyWidth = document.body.clientWidth;

    if (bodyWidth <= 768) {
        navbar.classList.add('responsive');
    } else {
        navbar.classList.remove('responsive');
    }
});