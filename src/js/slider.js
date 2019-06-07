$(document).ready(function(){
    //Маска для телефона
  $(".phone").mask("8 (999) 999-99-99");
  //Валидация формы brif
  $('#brif-form').validate({
    rules: {
      phone: {
        required: true,
      },
      username: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      email: {
        required: true,
        email: true,
      }
    },
    messages: {
      phone: {
        required: "Укажите телефон",
      },
      username: {
        required: "Обязательное поле",
        minlength: jQuery.validator.format("Минимальное кол-во символов: {0}"),
      },
      email: {
        required: "Обязательное поле",
        email: "Введите корректный email",
      }
    }
  });
  //Валидация формы offer
  $('#offer-form').validate({
    rules: {
       offerPhone: {
        required: true,
      },
       offerUsername: {
        required: true,
        minlength: 2,
        maxlength: 15,
      }
    },
    messages: {
      offerPhone: {
        required: "Введите телефон",
      },
      offerUsername: {
        required: "Заполните поле",
        minlength: jQuery.validator.format("Минимальное кол-во символов: {0}"),
      }
    }
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