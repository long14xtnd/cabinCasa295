/**
*@author Atexis Spain SL
*/
var windows = false;
var Device = ['Windows', 'Win16', 'Win32','WinCE'];
var ios = false;
var iDevice = ['iPad', 'iPhone', 'iPod'];



$(window).ready(function() {  

	    for ( var i = 0 ; i < iDevice.length ; i++ ) {
	        if( navigator.platform === iDevice[i] ){ ios = true; break; }
	    }
	    if (ios==true){	
	    		//Se deja este margen en lugar del 0px 0px 2.5% 2.5% original porque al parecer al meter San Francisco font no acepta bien un font-size de 0px y deja siempre espacio a los lados.
	    		$("ul.rig li").css("margin","0px 0px 2.5% 1.8%");

		    }



});