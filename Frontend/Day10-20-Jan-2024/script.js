var slideIndex = 0;
var slides = document.getElementsByClassName("slides");

function showSlides() {
  var i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 30000); // Change image every 9 seconds
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

showSlides();
