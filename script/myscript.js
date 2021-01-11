var slideIndex = 0;
var timeoutvar;
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex == 0) {slideIndex = slides.length}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "contents";  
  dots[slideIndex-1].className += " active1";
  timeoutvar = setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function plusImage(index){
	stopSlideShow();
	slideIndex = parseInt(index) + parseInt(slideIndex) -1;
	showSlides();
}
function stopSlideShow() {
  clearTimeout(timeoutvar);
}