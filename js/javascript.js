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


 //show less/show more card with the box sizes

 document.addEventListener("DOMContentLoaded", function() {

  function toggleText2() {
    const hiddenText2 = document.querySelector('.hidden-text-2');
    hiddenText2.classList.toggle('d-flex');
  }
  
  const button2 = document.querySelector('.btn');
  button2.addEventListener('click', toggleText2);
});


 






  






