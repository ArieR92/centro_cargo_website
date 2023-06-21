//show less/show more button funtion

$('.readmore-btn').on('click', function(){
    $(this).parent().toggleClass('ShowContent');
  
    var replaceText = $(this).parent().hasClass('ShowContent') ? "Leer menos" : "Leer más";
    $(this).text(replaceText);
  
  });