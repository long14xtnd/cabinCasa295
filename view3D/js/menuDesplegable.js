/**
*@author Atexis Spain SL
*/
	 
var contador = 1;
// var desplegado = 0;

var windows = false;
var Device = ['Windows', 'Win16', 'Win32','WinCE'];
var ios = false;
var iDevice = ['iPad', 'iPhone', 'iPod'];

// Este JS tiene las animaciones del menu desplegable de la izquierda

$(window).ready(function() {  


//Visibilidades de elementos segun dispositivo y plataforma

	     /*Cuando NO estamos en iPad aparece el enlace CSWP*/ 


	    for ( var i = 0 ; i < Device.length ; i++ ) {
	        if( navigator.platform === Device[i] ){ windows = true; break; }
	    }
	    if (windows==true){	
	    		$("#CSWP").css("display","block");
	    		$(".lineaenweb").show();
		    }



		 /*En iPad aparecen los enlaces a las aplicaciones ADS Perfo y WB y se reduce el ancho del menu ya que no hace falta tanto*/   


	    for ( var i = 0 ; i < iDevice.length ; i++ ) {
	        if( navigator.platform === iDevice[i] ){ ios = true; break; }
	    }
	    if (ios==true){	
	    		$("#Perfo").css("display","block");
	    		$("#WB").css("display","block");

	    		$(".lineaenios").show();
	    		$(".lineaenios").show();
	    	


	    		$(".imgList").attr("src","images/menu_desplegable/list_ios.png");
	    		$(".imgEnvelope").attr("src","images/menu_desplegable/envelope_ios.png");
	    		$(".imgLink").attr("src","images/menu_desplegable/link_ios.png");
	    		$(".imgLinkApp").attr("src","images/menu_desplegable/link_app.png");

				//Creo que en ios estos iconos quedan demasiado pequenios, por eso modifico el padding
				$(".menuDesplegableBody .children img").css("padding","12px");

		    }


	 


	/*Para que elmenu desplegable se esconda sea cual sea su anchura*/
	$('.menuDesplegable').removeClass('hidden');
	$('.menuDesplegable').css("left",-1*($('.menuDesplegable').width()+5));


// Si clico en Perfo (iPad) y esta instalada,la abro (codigo CAPS://), si no la abro en la apple store
	$('#Perfo').click(function(){

	    iDevice = 'iPad';

	    if( navigator.platform === iDevice ){
		    try {
		        
				setTimeout( function()
				{
					// Esto es un trick, abro la apple store pero con retardo por si no puede abrir el "CAPS://" me lleva al apple store
				    document.location = 'https://itunes.apple.com/es/app/airbus-ds-perfo/id920747972?l=en&mt=8';
				}, 300);
				document.location = 'CAPS://';
		    }
		    catch(e) {
		    	// Si salta algun error, nos vamos al apple store
		        window.location = "https://itunes.apple.com/es/app/airbus-ds-perfo/id920747972?l=en&mt=8";
		    }
		}else{
			// Si de alguna manera alguien toca el codigo e intenta abrir Perfo fuera de iOS, le doy el aviso de que no puede.
			alert("ADS Perfo only available for iOS");
		}
	});


// Todo lo de Perfo es aplicable tambien para WB
	$('#WB').click(function(){
		
	    iDevice = 'iPad';

	    if( navigator.platform === iDevice ){
		    try {
		        
				setTimeout( function()
				{
				    document.location = 'https://itunes.apple.com/es/app/airbus-ds-weight-balance/id927932323?l=en&mt=8';
				}, 300);

				document.location = 'WB://';
		    }
		    catch(e) {
		        window.location = "https://itunes.apple.com/es/app/airbus-ds-weight-balance/id927932323?l=en&mt=8";
		    }
		}else{
			
			alert("ADS W&B only available for iOS");
		}
    });

    $('#EASA').click(function(){

    	document.location = 'https://www.easa.europa.eu';

    });

    $('#ICAO').click(function(){

    	document.location = 'http://www.icao.int';

    });


	   
// Cuando clicamos el pulsador "toggleamos" el menu desplegable, para ello usamos el contador.
// Tambien despliego el fondo y si lo pulso hago el equivalente a clicar el pulsador.
$('.pulsador').click(function(){
	
	$("#nav-toggle").toggleClass("active");

// Mostramos y ocultamos submenus

	if (contador == 1) {
		contador = 0;
		$('.menuDesplegable').animate({
			left: '0px'
		});

		$("#despliegafondo").show();
	    setTimeout(function(){
	        $("#despliegafondo").css("opacity", 0.3);
	   	}, 1);
		
	} else {
		contador = 1;
		$('.menuDesplegable').animate({
			// left: '-380%'
			left: -1*$('.menuDesplegable').width()
		});
		$("#despliegafondo").css("opacity", 0);
	    setTimeout(function(){
	        
	        $("#despliegafondo").hide();
	   	}, 100);
	}

});

$('#despliegafondo').click(function(){
	$('.pulsador').click();

});

});

// Si se redimensiona la ventana y el menu esta escondido, lo movemos para mantenerlo escondido.
$(window).resize(function(){
		if(contador==1){
			$('.menuDesplegable').css("left",-1*$('.menuDesplegable').width());
		}
	});
