$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var card = $('.card__link')

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