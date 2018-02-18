jQuery(document).ready(function($) {
	// Lista los inegrantes del equipo que estén en la bd al momento de la carga
	db.ref('/lrfreelancer').on("value", (equipo)=>{
		equipo = Object.values(equipo.val());
		renderEquipoValue(equipo);
		// console.log(equipo)
	})
});


// Validación de Formulario


