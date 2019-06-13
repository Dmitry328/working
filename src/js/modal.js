$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var card = $('.card__link')
  var modalTankButton = $('#modal__button')


//   butt.on('click', function(){	// Событие клика на маленькое изображение
//     var img = $(this);	// Получаем изображение, на которое кликнули
//   var src = img.attr("src"); // Достаем из этого изображения путь до картинки
//   $("body").append(<div class='popup'><div class='popup_bg'></div><img src="src" class='popup_img'/></div>); 
//   $(".popup")(800); // Медленно выводим изображение
//   $(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
//     $(".popup")(800);	// Медленно убираем всплывающее окно
//     setTimeout(function() {	// Выставляем таймер
//       $(".popup").remove(); // Удаляем разметку всплывающего окна
//     }, 800);
//   });
// });

  button.on('click', function() {
    modal.addClass('modal_active');
  });

  card.on('click', function () {
    modal.addClass('modal_active');
  });

  close.on('click', function() {
    modal.removeClass('modal_active');
  });
});