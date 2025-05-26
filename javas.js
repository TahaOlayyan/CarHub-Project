let slideIndex = 1;
let autoSlideInterval;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

function plusSlides(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(autoSlideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
}

// Initialize
showSlides(slideIndex);
startAutoSlide();