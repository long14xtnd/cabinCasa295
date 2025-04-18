/**
*@author Atexis Spain SL
*/

var ios = false;
var iDevice = ['iPad', 'iPhone', 'iPod'];

// Este JS es el que coloca los "carteles" de cada uno de los paneles en la vista general de la cabina
$(document).ready(function() {  


	// En iOS los icono de la lupa, de atras y de indice son distintos
	for ( var i = 0 ; i < iDevice.length ; i++ ) {
	        if( navigator.platform === iDevice[i] ){ ios = true; break; }
	    }
    if (ios==true){	
    		$(".imgLupa").attr("src","images/lupas/icono_solo_lupa_trans_ios.png");
    		$(".imgBack").attr("src","images/btn-back_ios.png");
    		$(".imgIndice").attr("src","images/btn-indice_ios.png");	

	    }



	//Utilizo los retardos para asegurarme de que calcule primero las dimensones de la imagen y despues coloque los elementos

	setTimeout(function() {

		if($(window).width()>=1440){
		//Que para escritorio (>=1440px) se puede ver de primeras la cabina completa, uso la imagen con el degradado
			$("#imgGlobal").attr("src","images/bg-cockpit_deg.png");
			$("#imgGlobal").css('width','auto');$("#imgGlobal").css('height','100%');
		}else{
			$("#imgGlobal").attr("src","images/bg-cockpit.png");
			if($(window).width()>($("#imgGlobal").width())){ $("#imgGlobal").css('width','100%');$("#imgGlobal").css('height','auto');}
			if($(window).height()>($("#imgGlobal").height())){$("#imgGlobal").css('width','auto');$("#imgGlobal").css('height','100%');}
		 }

	}, 1);
	//Lo retardo para que haga el scroll despues de dimensionar y asi al cargar la primera vez lo haga bien
	setTimeout(function() {
      $(document).scrollLeft(($(document).width()/2)-($(window).width()/2));
    }, 2);

	//Hago opacos los elementos al final, para evitar chasquidos al cargar la pantalla
    setTimeout(function() {
		$("#imgGlobal").css('opacity',1);
		$(".logoAirbus").css('opacity',1);
	}, 3);
	

});

//Si se redimensiona la ventana tiene que recalcular todo.
$( window ).resize(function() {

	if($(window).width()>=1440){
		//Que para escritorio (>=1440px) se puede ver de primeras la cabina completa, uso la imagen con el degradado
		
		$("#imgGlobal").attr("src","images/bg-cockpit_deg.png");
		$("#imgGlobal").css('width','auto');$("#imgGlobal").css('height','100%');
	}else{
		$("#imgGlobal").attr("src","images/bg-cockpit.png");
		if($(window).width()>($("#imgGlobal").width())){ $("#imgGlobal").css('width','100%');$("#imgGlobal").css('height','auto');}
		if($(window).height()>($("#imgGlobal").height())){$("#imgGlobal").css('width','auto');$("#imgGlobal").css('height','100%');}
	 }
		//Que en iOS vuelva el scroll al centro para que al girar el iPad te centre la cabina.
	for ( var i = 0 ; i < iDevice.length ; i++ ) {
	        if( navigator.platform === iDevice[i] ){ ios = true; break; }
	    }
    if (ios==true){	
		setTimeout(function() {
	      $(document).scrollLeft(($(document).width()/2)-($(window).width()/2));

	    }, 2);
	   }


});