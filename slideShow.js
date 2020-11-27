var slideIndex = 0;
//showSlides();

function show() {
  var i;
  var slides=document.getElementsByClassName("mySlides");
 
 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
slides[slideIndex-1].style.display="block";
	  
  setTimeout(show, 3000); // imaginea se schimba la 3 secunde
}


