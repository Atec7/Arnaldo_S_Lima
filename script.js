// script.js
document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');

    function handleScroll() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const isVisible = elementTop < windowHeight - 50;
            if (isVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();  // Revelar elementos visíveis na carga inicial
});