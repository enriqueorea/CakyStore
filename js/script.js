const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
const previewContainer = document.querySelector('.cake-preview-container');
const previewBox = previewContainer.querySelectorAll('.cake-preview');


menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".home-slider",{
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    grabCursor: true,
    loop:true,
    centeredSlides:true,
});
var swiper = new Swiper(".cake-slider",{
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 2,
        },
        1000: {
          slidesPerView: 3,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    grabCursor: true,
    loop:true,
    centeredSlides:true,
});

document.querySelectorAll('.cake .slide').forEach(cake => {
  cake.onclick = () =>{
    previewContainer.style.display = 'flex';
    let name = cake.getAttribute('data-name')
    previewBox.forEach(box =>{
      let target = box.getAttribute('data-target')
      if(name == target){
        box.classList.add('active');
      }
    });
    
  };
});
previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(box =>{
    box.classList.remove('active');
  });
}
previewContainer.addEventListener('click', () => {
  previewContainer.style.display = 'none';
  previewBox.forEach(box =>{
    box.classList.remove('active');
  });
})
// previewContainer.addEventListener('click', (e) =>{
//   previewContainer.style.display = 'none'
// })