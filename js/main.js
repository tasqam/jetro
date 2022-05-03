$(function(){


    $('.slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      asNavFor: '.thumbs',
      prevArrow: "<img src='img/previous.png' class='prev' alt='1'>",
      nextArrow: "<img src='img/next.png' class='next' alt='2'>"
    });
    $('.thumbs').slick({
      slidesToShow: 6,
      slidesToScroll: 6,
      asNavFor: '.slider__inner',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 3,
          }
        },
        {
           breakpoint: 681,
           settings: {
             slidesToShow: 2,
           }
         },
         {
           breakpoint: 455,
           settings: {
             slidesToShow: 1,
           }
         }
      ]
    });

    $('.header__menu-btn').on('click', function(){
      $('.header__menu > ul').slideToggle();
    });


});