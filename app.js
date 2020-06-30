// UI
const navSlide = () => {
    const nav = document.getElementById('nav-links');
    const burgerBtn = document.getElementById('burger-btn');
    const navLinks = document.querySelectorAll('.nav-links li');


    burgerBtn.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });
        // burger animation
        burgerBtn.classList.toggle('toggle');
    });

}

navSlide();