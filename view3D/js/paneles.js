/**
*@author Atexis Spain SL
*/
var scale;

var ios = false;
var iDevice = ['iPad', 'iPhone', 'iPod'];

$(document).ready(function() {   

	//Utilizo los retardos para asegurarme de que calcule primero las dimensones de la imagen y despues coloque los elementos

	// Las imagenes de los botones de atras, indice y bookmark son distintos en iOS
	// Ademas hay que dejar espacio debajo de la linea del equipo y el manual para que se vea bien en el GoodReader
		for ( var i = 0 ; i < iDevice.length ; i++ ) {
	        if( navigator.platform === iDevice[i] ){ ios = true; break; }
	    }
	    if (ios==true){	
	    		$(".imgBookmark").attr("src","images/btn-bookmark_ios.png");
	    		$(".imgBack").attr("src","images/btn-back_ios.png");
	    		$(".imgIndice").attr("src","images/btn-indice_ios.png");

	    		$(".datos").css("padding-bottom","5%");
	    		
		    }


});
$( window ).resize(function() {

	$(".paneles #panzoom").css("margin-top",$("header").outerHeight());

});