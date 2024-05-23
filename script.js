//navbar animation
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', () => {
    const textCol = document.querySelector('.fs__text__col');
    const imgCol = document.querySelector('.fs__img__col');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        // Check if the section is in the viewport
        if (scrollY + window.innerHeight >= textCol.offsetTop) {
            textCol.style.animation = 'fadeInUp 1s forwards ease-in-out';
            imgCol.style.animation = 'fadeInUp 1s forwards ease-in-out 0.5s';
        }
    });
});
