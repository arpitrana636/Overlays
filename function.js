window.onload = function() {
    var slideIndex = 0;
    var slides = document.querySelector('.slides');
    var totalSlides = document.querySelectorAll('.slides img').length;
    var slideWidth = document.querySelector('.slides img').clientWidth;
    var delay = 3000; // 3 seconds

    function showNextSlide() {
        slideIndex++;
        if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }
        slides.style.transform = 'translateX(' + (-slideIndex * slideWidth) + 'px)';
    }

    setInterval(showNextSlide, delay);
};
