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

function checkLogin() {
    const correctEmail = "Taha_olayyan@hotmail.com";
    const correctPassword = "123456789";

    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;

    if (email === "" || pass === "") {
        alert("Please fill in both username and password.");
        return;
    }

    if (email == correctEmail && pass == correctPassword) {
        document.getElementById("demo").style.color = "red";
        document.getElementById("demo").innerHTML = "Logged in...";
    } else {
        alert("Incorrect username or password. Please try again.");
    }

}