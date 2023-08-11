

let size = 1; 

function updateSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 320) {
    size = 1;
  } else if (windowWidth < 500) {
    size = 2;
  } else if (windowWidth < 780) {
    size = 2;
  } else if (windowWidth < 900) {
    size = 3;
  } else if (windowWidth > 1000) {
    size = 4;
  }

 
}


window.addEventListener('resize', updateSize);


updateSize();



var swiper = new Swiper(".mySwiper", {
  slidesPerView: size,
  centeredSlides: false,
  spaceBetween: 30,
  loop: true,
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
        clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});









var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
      
    } else {
      panel.style.display = "block";      
    }
  });
}

