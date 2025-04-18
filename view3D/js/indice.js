/**
*@author Atexis Spain SL
*/	

var ios = false;
var iDevice = ['iPad', 'iPhone', 'iPod'];

// En iOS las imagenes de los botones de atras y home son distintas
$(document).ready(function() {  
	
	for ( var i = 0 ; i < iDevice.length ; i++ ) {
	        if( navigator.platform === iDevice[i] ){ ios = true; break; }
	    }
    if (ios==true){	
    		$(".imgBack").attr("src","images/btn-back_ios.png");
    		$(".imgHome").attr("src","images/btn-home_ios.png");	
	    }
});