// slider show start

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}	

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 


// Show giay

const foodBtns = document.querySelectorAll(".show__giay--menu button")
const foodList = document.querySelectorAll(".show__giay--item")

foodBtns.forEach((button) => {
	button.addEventListener("click", (e) => {
		const type = e.target.getAttribute("type-btn")
    document.querySelector(".show__giay--menu button.active1")
		.classList.remove("active1")
		e.target.classList.add("active1")

		// filter elements
		foodList.forEach((item) => {
      console.log(type)
			if (item.getAttribute("type-btn") == type)
				item.classList.remove("hide")
			else item.classList.add("hide")
		})
	})
})


