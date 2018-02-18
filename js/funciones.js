let db = firebase.database();

let data = {
 alta:true,
 color: "blue",
 descripcion: "Desarrollador web de profesión y apasionado por...",
 edad:27,
 facebook:"https://www.facebook.com/whary11",
 google:"https://plus.google.com/u/0/+LuisFernandoRagaRe...",
 nombre:"Luis Fernando Raga Renteria",
 perfil:"http://drive.google.com/uc?export=view&id=0BzAoAKrYEpSUT09PUWNEaXBYUEk",
 profesion:"Diseñador y Dasarrollador Web",
 sobrenombre:"Nando",
 twitter:"https://twitter.com/whary11"
}

// db.ref('/lrfreelancer').push(data)

function renderEquipoValue(equipo) {
	// console.log(equipo[3].nombreEmpresa)
	$('#equipo').html("");
		equipo.map(function(integrante) {
			if(integrante.google!=undefined){
			let html = `<div class="col-md-4 bounceIn" data-delay="100">
	                	<!-- BEGIN TEAM -->
	                    <div class="team-image-sec">
	                        <div class="img-overlay"></div>
	                        <figure><img title="Image" width="370px" heigth="322px" alt="image" src="${integrante.perfil}" ></figure>
	                        <ul>
	                            <li><a href="${integrante.google}" target="_blanc"><i class="fa fa-google-plus"></i></a></li>
	                            <li><a href="${integrante.twitter}" target="_blanc"><i class="fa fa-twitter"></i></a></li>
	                            <li><a href="${integrante.facebook}" target="_blanc"><i class="fa fa-facebook"></i></a></li>
	                        </ul>
	                   </div>
	                    <div class="team-detail-sec">
	                        <h3 class="${integrante.color}">${integrante.nombre}<span>${integrante.profesion}</span></h3>
	                        <p>${integrante.descripcion}</p>
	                    </div>
	                </div>`;
				$('#equipo').append(html);
			}
	                
		});

		db.ref('/dataEmpresa').on("value", (empresa)=>{
			empresa = Object.values(empresa.val());
			// renderEquipoValue(equipo);
			console.log(empresa[0].experiencia)

			$('#experiencia').text(empresa[0].experiencia);
			$('#copyright').text(`Copyrights 2018, ${empresa[0].nombre}. Todos lo derechos reservados. ${empresa[0].nombre}`)
		})

	}
		function renderEquipoChild(equipo) {
			if (equipo.google!=undefined) {
				let html = `<div class="col-md-4 bounceIn" data-delay="100">
		                	<!-- BEGIN TEAM -->
		                    <div class="team-image-sec">
		                        <div class="img-overlay"></div>
		                        <figure><img title="Image" width="370px" heigth="322px" alt="image" src="${equipo.perfil}" ></figure>
		                        <ul>
		                            <li><a href="${equipo.google}" target="_blanc"><i class="fa fa-google-plus"></i></a></li>
		                            <li><a href="${equipo.twitter}" target="_blanc"><i class="fa fa-twitter"></i></a></li>
		                            <li><a href="${equipo.facebook}" target="_blanc"><i class="fa fa-facebook"></i></a></li>
		                        </ul>
		                   </div>
		                    <div class="team-detail-sec">
		                        <h3 class="${equipo.color}">${equipo.nombre}<span>${equipo.profesion}</span></h3>
		                        <p>${equipo.descripcion}</p>
		                    </div>
		                	<!-- END TEAM -->
		                </div>`;
							$('#equipo').append(html);

				
			}
}


