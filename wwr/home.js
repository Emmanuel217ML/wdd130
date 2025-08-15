const slides = document.querySelectorAll('.slideshow div');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index); 
    });
}
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
showSlide(0);
setInterval(nextSlide, 2000);