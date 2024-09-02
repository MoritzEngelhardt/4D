let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    for (let slide of slides) slide.style.display = "none";  
    for (let dot of dots) dot.classList.remove("active");

    slideIndex = (slideIndex % slides.length) + 1;

    if (slides.length > 0 && dots.length > 0) {
        slides[slideIndex - 1].style.display = "block";  
        dots[slideIndex - 1].classList.add("active");
    }

    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    showSlides();




});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY;

    sections.forEach(function(section) {
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); // Toggle the 'open' class for the sidebar
    
    // If you want to toggle the mobile nav links instead of the sidebar
    const navLinks = document.querySelector('.nav-left');
    navLinks.classList.toggle('active');
};