

let slideIndex = 0;
showSlides();

function showSlides() {
    console.log("showSlides called");
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    console.log("Slides found:", slides.length);
    console.log("Dots found:", dots.length);

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    console.log("Current slide index:", slideIndex);

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0 && dots.length > 0) {
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    setTimeout(showSlides, 4000); // Change image every 4 seconds
};

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});

window.addEventListener('scroll', function() {
    console.log("Scroll event detected"); // Check if scroll event fires

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');


    sections.forEach(function(section) {
        let top = window.scrollY;
        let offset = section.offsetTop - 100; // Adjust this value based on your layout
        let height = section.offsetHeight;
        let id = section.getAttribute('id');


        if (top >= offset && top < offset + height) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    console.log("Setting active class on:", id); // Check if the active class is being set
                    link.classList.add('active');
                }
            });
        }
    });
});