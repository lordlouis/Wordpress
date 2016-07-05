/**
 * Pinpoint Booking System WordPress Plugin
 * Script para cambiar el color del calendario a los dias de eventos 
 * que solo tengan 'x' asiento disponibles
 * 
 * Para versión 2.1.2
 * 
 * TODO cambiar DOMSubtreeModified propertychange a Mutation Observers
 * 
 * */
(function($) {
	var color = "#fdaa29";
	var seats = 1;
	$(document).on("DOMSubtreeModified propertychange", ".DOPBSPCalendar-day.dopbsp-available",  function(){
		var avaiables = $(".dopbsp-body .dopbsp-available:last", this).text().split(' ')[0];
		if ($.isNumeric(avaiables) && avaiables == seats){
			// Se quita la clase dopbsp-available, para que tome el nuevo color que se le asigna
			$(".dopbsp-head .dopbsp-co, .dopbsp-head .dopbsp-ci", this).removeClass("dopbsp-available").css("background-color", color);
		}
	});
})( jQuery );
