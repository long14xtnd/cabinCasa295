/**
*@author Atexis Spain SL
*/
$(document).ready(function() {

    var cuadradoPulsado;

/*Animaciones cuando se clica en cuadrados*/
// La animacion consiste en un cuadrado fijo, que es el que pulsamos. Al clicar aparece un gemelo suyo encima, que es el que luego se hace grande y desaparece el que hemos clicado.
// Al volver a su posicion ocurre lo mismo pero el camino inverso.
// Esto me asegura que aunque mueva un cuadrado de su sitio los demas no se descoloquen, porque en realidad el cuadrado que se ha "movido" sigue estando en el mismo sitio pero invisible

    function animaCuadrado(cuadrado,cuadradoSuelto){
        
        // Muestro el fondo oscuro y lo bloqueo para que no se pueda interrumpir la animacion a medias, creando estados raros.
        cuadradoPulsado = cuadrado;
        $("#fondo").show();
        $("#fondo").addClass("bloqueado");

        setTimeout(function(){
            $("#fondo").css("opacity", 0.3);
        }, 1);

        // Empuiezo estableciendole al nuevo cuadrado suelto la posicion del que acabo de pulsar y lo muestro, mientras que escondo el fijo
        $(".libre").css("left",$(cuadrado).offset().left);
        $(".libre").css("top",$(cuadrado).offset().top);
        $(".libre").css("width",$(cuadrado).outerWidth());
        $(cuadradoSuelto).show();
        $(cuadrado).css("visibility", "hidden");

        /*Establecer la posicion del cuadrado grande respecto a la posicion del scroll*/

        // Discrimino si es un solo cuadrado y si son dos, el delantero a la izquierda y el trasero a la derecha.
        setTimeout(function() {
            $(cuadradoSuelto).addClass("cuadradoGrande");
            if($(cuadradoSuelto).hasClass("cuadradoDelantero")){
                $(cuadradoSuelto).addClass("cuadradoDelanteroIz");
            }else if($(cuadradoSuelto).hasClass("cuadradoTrasero")){
                $(cuadradoSuelto).addClass("cuadradoTraseroDe");
            }
                $(".cuadradoGrande").css("top",($(window).height()*0.25) + $(window).scrollTop());
        }
            , 1);
        /*FIN Establecer la posicion del cuadrado grande respecto a la posicion del scroll*/

        // Una vez he abierto el cuadrado, subo ligeramente la imagen
        setTimeout(function() {
            $(".claseLogo").addClass("subeImg");
        }, 200);

        // Nada mas subir la imagen aparecen los links
        setTimeout(function() {
            $(cuadradoSuelto).addClass("linksCuadrado");
        }, 300);

        // Una vez abierto todo, quito el bloqueo al fondo para que se pueda pulsar para cerrar.
        setTimeout(function() {
           $("#fondo").removeClass("bloqueado");
        }    /*Para volver a habilitar el fondo*/
            , 601);


    }; 




// Cuando se pulsa un cuadrado se llama a la funcion animaCuadrado, pasandole por parametros los nombres del cuadrado y de su respectivo cuadrado suelto
    $("#cuadrado1").click(function(){
        animaCuadrado("#cuadrado1", "#cuadradoSuelto1");
        animaCuadrado("#cuadrado1", "#cuadradoSuelto1_2");
    }); 

    $("#cuadrado2").click(function(){
        animaCuadrado("#cuadrado2", "#cuadradoSuelto2");
    });
    $("#cuadrado3").click(function(){
        animaCuadrado("#cuadrado3", "#cuadradoSuelto3");
    });
    $("#cuadrado4").click(function(){
        animaCuadrado("#cuadrado4", "#cuadradoSuelto4");
    });
    $("#cuadrado5").click(function(){
        animaCuadrado("#cuadrado5", "#cuadradoSuelto5");
    });
    $("#cuadrado6").click(function(){
        animaCuadrado("#cuadrado6", "#cuadradoSuelto6");
       
    });
    $("#cuadrado7").click(function(){
        animaCuadrado("#cuadrado7", "#cuadradoSuelto7");
    });
    $("#cuadrado8").click(function(){
        animaCuadrado("#cuadrado8", "#cuadradoSuelto8");
    });
    $("#cuadrado9").click(function(){
        animaCuadrado("#cuadrado9", "#cuadradoSuelto9");
        animaCuadrado("#cuadrado9", "#cuadradoSuelto9_2");
    });
    $("#cuadrado10").click(function(){
        animaCuadrado("#cuadrado10", "#cuadradoSuelto10");
    });
    $("#cuadrado11").click(function(){
        animaCuadrado("#cuadrado11", "#cuadradoSuelto11");
    });
    $("#cuadrado12").click(function(){
        animaCuadrado("#cuadrado12", "#cuadradoSuelto12");
    });
    $("#cuadrado13").click(function(){
        animaCuadrado("#cuadrado13", "#cuadradoSuelto13");
    });
    $("#cuadrado14").click(function(){
        animaCuadrado("#cuadrado14", "#cuadradoSuelto14");
    });
    $("#cuadrado15").click(function(){
        animaCuadrado("#cuadrado15", "#cuadradoSuelto15");
    });
    $("#cuadrado16").click(function(){
        animaCuadrado("#cuadrado16", "#cuadradoSuelto16");
    });
    $("#cuadrado17").click(function(){
        animaCuadrado("#cuadrado17", "#cuadradoSuelto17");
    });
    $("#cuadrado18").click(function(){
        animaCuadrado("#cuadrado18", "#cuadradoSuelto18");
    });
    $("#cuadrado19").click(function(){
        animaCuadrado("#cuadrado19", "#cuadradoSuelto19");
    });
    $("#fondo").click(function(){
     
       // Si cuando se pulsa el fondo está bloqueado no hace nada, si no, se deshace todo el camino en orden inverso.
    if ($("#fondo").hasClass("bloqueado")){}
    else{

            // Se quitan los links
        setTimeout(function() {

            $(".libre").removeClass("linksCuadrado");
        }, 1);

            // Se vuelve el cuadrado a su posicion
        setTimeout(function() {

            $(".libre").css("left",$(cuadradoPulsado).offset().left);
            $(".libre").css("top",$(cuadradoPulsado).offset().top);
            $(".libre").css("width",$(cuadradoPulsado).outerWidth());
        }, 200);


            // Se baja la imagen
        setTimeout(function() {
            $(".claseLogo").removeClass("subeImg");
        }, 100);


            // Se vuelve el cuadrado a su posicion
        setTimeout(function() {
            $(".libre").removeClass("cuadradoGrande");
            $(".libre").removeClass("cuadradoDelanteroIz");
            $(".libre").removeClass("cuadradoTraseroDe");
        }, 200);

            // Se le quita el color al fondo
        setTimeout(function(){
                $("#fondo").css("opacity", 0.0);
                
        }, 600);

        // Se esconde el cuandrado libre y se muestra el fijo
        setTimeout(function(){

            $(".cuadrado").css("visibility", "visible");
            $(".libre").hide();
               
        }, 650);


        // Se esconde el fondo
        setTimeout(function(){
            $("#fondo").hide();
        }, 700);

    }
    
}); 

    // Aunque se scrollee o se redimensione la ventana el cuadrado grande ha de permanecer en su posicion relativa
    $(window).scroll(function(){
            $(".cuadradoGrande").css("top",($(window).height()*0.25) + $(window).scrollTop());
    });

    $(window).resize(function(){
            $(".cuadradoGrande").css("top",($(window).height()*0.25) + $(window).scrollTop());
    });
/*Fin Animaciones cuando se clica en cuadrados*/

});