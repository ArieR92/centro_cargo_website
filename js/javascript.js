//show less/show more button funtion

$('.readmore-btn').on('click', function(){
    $(this).parent().toggleClass('ShowContent');
  
    var replaceText = $(this).parent().hasClass('ShowContent') ? "Leer menos" : "Leer más";
    $(this).text(replaceText);
  
  });

  $(document).ready(function() {
    // El código aquí se ejecutará cuando el DOM esté listo
    console.log("jQuery se ha cargado correctamente.");
  });
  






