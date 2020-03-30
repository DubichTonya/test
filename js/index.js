document.addEventListener("DOMContentLoaded", function () {

  // catalog

  let catalogBtn = document.querySelector('.headerCatalog__button');
  let catalogSidebar = document.querySelector('.headerCatalog__sidebar');

  catalogBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (catalogBtn.classList.contains('headerCatalog__button-active')) {
      catalogBtn.classList.remove('headerCatalog__button-active');
      catalogSidebar.classList.remove('headerCatalog__sidebar-active');
    } else {
      catalogBtn.classList.add('headerCatalog__button-active');
      catalogSidebar.classList.add('headerCatalog__sidebar-active');
    }

  })

});



// jQuery slider 

$(document).ready(function () {

  $('.bannerBlock__slider').slick({
    dots: true,
    dotsClass: 'bannerBlock__sliderDots',
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  $('.hitBlock__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.hitBlock__Btns'),
    prevArrow: $('.hitBlockLeft'),
    nextArrow: $('.hitBlockRight'),
  });

  $('.newBlock__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: $('.newBlock__Btns'),
    prevArrow: $('.newBlockLeft'),
    nextArrow: $('.newBlockRight'),
  });


  $('.newsBlock__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendArrows: $('.block__Btns'),
    prevArrow: $('.blockLeft'),
    nextArrow: $('.blockRight'),
  });

});
