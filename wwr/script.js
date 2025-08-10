const testimonies = document.querySelectorAll('.testimony figure');
let currentIndex = 0;

function showTestimony(index) {
    testimonies.forEach((fig, i) => {
        fig.classList.toggle('active', i === index);
    });
}
function nextTestimony() {
    currentIndex =(currentIndex + 1) % testimonies.length;
    showTestimony(currentIndex);
}
showTestimony(0);
setInterval(nextTestimony, 4000)