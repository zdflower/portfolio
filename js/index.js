'use strict';
$(document).ready(function () {
//reescribir esto con menos redundancia
	var listaNav = $(".top-nav"); //selecciono la lista de navegación
	var botonesNav = listaNav.find('li'); //selecciono los botones de la lista de navegación (y no los a dentro de li, ¿funcionaría si seleccionara li a? ¿tendría siblings un li a?)
	botonesNav.on('click', function () { //les agrego un evento de click
        $(this).addClass('active'); //al botón clickeado le agrego la clase active
        $(this).siblings().removeClass('active'); // a los demás se la saco.
    });
    
    /*

    $("#navContact").on("click", function () {
        $(this).addClass('active');
        $("#navPortfolio").removeClass('active');
        $("#navAbout").removeClass('active');
    });
        
    $("#navAbout").on("click", function () {
        $(this).addClass('active');
        $("#navPortfolio").removeClass('active');
        $("#navContact").removeClass('active');
    });
        
    $("#navPortfolio").on("click", function () {
        $(this).addClass('active');
        $("#navAbout").removeClass('active');
        $("#navContact").removeClass('active');
    });
	*/

});

/*
una idea, seleccionar todos los botones del menú de navegación, agregarles el evento on click y después en la función que lo maneja: a this (el que fue clickeado y llamó a la función) agregarle la clase active, y para todos los siblings sacársela.
*/
