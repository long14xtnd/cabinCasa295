/**
*@author Atexis Spain SL
*/
var desplImagen;

$(document).ready(function() {   
	// Este JS sirve para colocar las lupas en la vista general de la cabina
	
	setTimeout(function() {
		$(".marcadores").css('width',($("#imgGlobal").width()*0.23));

	}, 103);


	setTimeout(function() {

		// Hay que tener en cuenta el desfase por si la imagen de fondo no esta colocada a la izquierda del todo y sumarselo a la posicion de cada marcador
		desplImagen = $("#imgGlobal").position().left;

		// La formula que se utiliza para colocar horizontalmente cada lupa es: ancho de la imagen de fondo * coeficiente)-(ancho de la imagen del marcador) + desfase de la imagen de fondo
		// Para elegir la posicion lo unico que modifico es el coeficiente, lo demas me sirve para que se adapte al tamaño de la ventana

		//Overhead panel
		$(".marcador1").css('left',($("#imgGlobal").width()*0.61)-($(".marcador1").width())+desplImagen);
		$(".marcador1").css('top',($("#imgGlobal").height()*0.3)-($(".marcador1").height()));
		//Visera
		$(".marcador2").css('left',($("#imgGlobal").width()*0.61)-($(".marcador2").width())+desplImagen);
		$(".marcador2").css('top',($("#imgGlobal").height()*0.5)-($(".marcador2").height()));
		//Panel Instrumentos CM-1
		$(".marcador3").css('left',($("#imgGlobal").width()*0.34)-($(".marcador3").width())+desplImagen);
		$(".marcador3").css('top',($("#imgGlobal").height()*0.6)-($(".marcador3").height()));
		//Consola del CM-1
		$(".marcador4").css('left',($("#imgGlobal").width()*0.06)+desplImagen);
		$(".marcador4").css('top',($("#imgGlobal").height()*0.75)-($(".marcador4").height()));
		//Pedestal
		$(".marcador5").css('left',($("#imgGlobal").width()*0.61)-($(".marcador5").width())+desplImagen);
		$(".marcador5").css('top',($("#imgGlobal").height()*0.85)-($(".marcador5").height()));
		//Panel central de 61
		$(".marcador6").css('left',($("#imgGlobal").width()*0.61)-($(".marcador6").width())+desplImagen);
		$(".marcador6").css('top',($("#imgGlobal").height()*0.65)-($(".marcador6").height()));
		//Panel de Intrumentos del CM-2
		$(".marcador7").css('left',($("#imgGlobal").width()*0.65)+desplImagen);
		$(".marcador7").css('top',($("#imgGlobal").height()*0.6)-($(".marcador7").height()));
		//Consola del CM-2
		$(".marcador8").css('left',($("#imgGlobal").width()*0.96)-($(".marcador8").width())+desplImagen);
		$(".marcador8").css('top',($("#imgGlobal").height()*0.75)-($(".marcador8").height()));


	}, 104);




	// Primero se colocan y despues se muestran


	setTimeout(function() {
		$(".marcadores").css('opacity',1);
	}, 105);
});

$( window ).resize(function() {
// Al redimensionar la ventana hay que recalcular todo

	setTimeout(function() {
		$(".marcadores").css('width',($("#imgGlobal").width()*0.23));


		desplImagen = $("#imgGlobal").position().left;

		//Overhead panel
		$(".marcador1").css('left',($("#imgGlobal").width()*0.61)-($(".marcador1").width())+desplImagen);
		$(".marcador1").css('top',($("#imgGlobal").height()*0.3)-($(".marcador1").height()));
		//Visera
		$(".marcador2").css('left',($("#imgGlobal").width()*0.61)-($(".marcador2").width())+desplImagen);
		$(".marcador2").css('top',($("#imgGlobal").height()*0.5)-($(".marcador2").height()));
		//Panel Instrumentos CM-1
		$(".marcador3").css('left',($("#imgGlobal").width()*0.34)-($(".marcador3").width())+desplImagen);
		$(".marcador3").css('top',($("#imgGlobal").height()*0.6)-($(".marcador3").height()));
		//Consola del CM-1
		$(".marcador4").css('left',($("#imgGlobal").width()*0.06)+desplImagen);
		$(".marcador4").css('top',($("#imgGlobal").height()*0.75)-($(".marcador4").height()));
		//Pedestal
		$(".marcador5").css('left',($("#imgGlobal").width()*0.61)-($(".marcador5").width())+desplImagen);
		$(".marcador5").css('top',($("#imgGlobal").height()*0.85)-($(".marcador5").height()));
		//Panel central de 61
		$(".marcador6").css('left',($("#imgGlobal").width()*0.61)-($(".marcador6").width())+desplImagen);
		$(".marcador6").css('top',($("#imgGlobal").height()*0.65)-($(".marcador6").height()));
		//Panel de Intrumentos del CM-2
		$(".marcador7").css('left',($("#imgGlobal").width()*0.65)+desplImagen);
		$(".marcador7").css('top',($("#imgGlobal").height()*0.6)-($(".marcador7").height()));
		//Consola del CM-2
		$(".marcador8").css('left',($("#imgGlobal").width()*0.96)-($(".marcador8").width())+desplImagen);
		$(".marcador8").css('top',($("#imgGlobal").height()*0.75)-($(".marcador8").height()));

	}, 104);




});