'use strict';
$(document).ready(function () {
	var listaNav = $(".top-nav"); //selecciono la lista de navegación
	var botonesNav = listaNav.find('li'); //selecciono los botones de la lista de navegación (y no los a dentro de li, ¿funcionaría si seleccionara li a? ¿tendría siblings un li a?)
	botonesNav.on('click', function () { //les agrego un evento de click
        $(this).addClass('active'); //al botón clickeado le agrego la clase active
        $(this).siblings().removeClass('active'); // a los demás se la saco.
    });
});