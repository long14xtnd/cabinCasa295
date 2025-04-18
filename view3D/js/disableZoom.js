$(document).ready(function() {
// Este JS solo sirve para que impida hacer zoom desde el navegador, de aqui no hay que tocar nada

  $(document).keydown(function(event) {
  if (event.ctrlKey==true && (event.which == '107' || event.which == '171' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189' || event.which == '251'  ) ) {
          event.preventDefault();
       }
      // 107 Num Key  +
      // 109 Num Key  -
      // 171 Add Key  hyphen/underscor Hey
      // 173 Min Key  hyphen/underscor Hey
      // 61 Plus key  +/= key
  });

  $(window).bind('mousewheel DOMMouseScroll', function (event) {
         if (event.ctrlKey == true) {
         event.preventDefault();
         }
  });
});