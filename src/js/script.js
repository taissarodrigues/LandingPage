const hamburguer = document.querySelector('#hamburguer-button');
const navList = document.querySelector('.nav-list');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navList.classList.toggle('active');
});

// Initialize Owl Carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    stagePadding: 50,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:1
      }
    }
  });
}
);

