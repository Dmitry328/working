$(document).ready(function(){
  //Валидация формы brif
  $('#brif-form').validate({
    rules: {
      username:{
        required: true,
      },
      phone:{
        required: true,
        minlength: 12,
      }
    },
    messages: {
      username: "Укажите имя",
      phone: "Введите телефон"
    }
  });
  //Валидация формы offer
  $('#offer-form').validate({
    rules: {
      username:{
        required: true,
      },
      phone:{
        required: true,
        tel: true
      }
    },
    // messages: {
    //   username: "Укажите имя",
    //   phone: "Введите телефон"
    // }
  });
  //Скрипт слайдера
  $('.slider').slick({ 
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});