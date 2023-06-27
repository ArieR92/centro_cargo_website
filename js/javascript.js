//show less/show more button funtion

$('.readmore-btn').on('click', function(){
    $(this).parent().toggleClass('ShowContent');
  
    var replaceText = $(this).parent().hasClass('ShowContent') ? "Read less" : "Read more";
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


//funcion para traducir

// function changeLanguage(lang) {
//   Promise.all([
//     fetch('js/en.json').then(response => response.json()),
//     fetch('js/es.json').then(response => response.json())
//   ])
//     .then(([enData, esData]) => {
//       const data = lang === 'en' ? enData : esData;
//       const elements = document.querySelectorAll('.lang');
//       elements.forEach(element => {
//         const key = element.getAttribute('key');
//         element.textContent = data[key];
//       });
//     })
//     .catch(error => console.error('Error:', error));
// }

function changeLanguage(lang) {
  Promise.all([
    fetch('js/en.json').then(response => response.json()),
    fetch('js/es.json').then(response => response.json())
  ])
    .then(([enData, esData]) => {
      const data = lang === 'en' ? enData : esData;
      const elements = document.querySelectorAll('.lang');
      elements.forEach(element => {
        const key = element.getAttribute('key');
        const placeholder = element.getAttribute('placeholder');
        
        if (placeholder && key) {
          element.setAttribute('placeholder', data[key]);
        } else if (key) {
          element.textContent = data[key];
        }
      });
    })
    .catch(error => console.error('Error:', error));
}








 






  






