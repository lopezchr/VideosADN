
$(document).ready(function(){
	//codigo que se ejecuta al iniciar la pagina
	$(document).load('config.php', function(data){
		pageData = eval(data);
		cargarMenu();

	});


	//funcion que se ejecuta al hacer un clic sobre un item en la galeria
	$(document).on("click","section.miniaturas img",
		function(data){

			//se extrae la url del video
			var urlVid = this.id.split('_')[1];

			//se muestra el fondo oscuro de la galeria
			$("section#galery").css({"z-index":100,"display":"inline"});

			//se genera el codigo para mostrar el video
			var cod = '<video controls="controls" id="actualvideo">';
			cod += '<source src="'+urlVid+'.mp4" type="video/mp4" /><source src="'+urlVid+'.ogg" type="video/ogg" />';
			cod += 'Video no soportado.</video>';

			$("section#galleryVideo").html(cod);


			//procedimiento para centrar el video en la pantalla
			var altoDiv = $("section#galery")[0].clientHeight;
			var anchoDiv = $("section#galery")[0].clientWidth;

			var left = (anchoDiv-640)/2;
			var top = (altoDiv-480)/2;

			$("section#galleryVideo video").css({"top":top,"left":left});
			
		}
	);

	//codigo ejecutado al pulsar la imagen de salida de la pantalla de video
	$(document).on("click","img#galleryExit", function(){

		//se pausa el video
		var myVideo = document.getElementById("actualvideo");
		myVideo.pause();

		//se oculta la pantalla de video
		$("section#galery").css({"z-index":-100,"display":"none"});
	});
});

//codigo para generar el menu lateral
function cargarMenu(){
	var result = '<ul>';
	for(var i in pageData){
			var pagearray = pageData[i].split("&&");
			result +="<li id='c_"+i+"' onclick=goPage('"+i+"')><a href=#home>"+pagearray[0]+"</a></li>";
	} 
	result += '</ul>';

	//se inserta enl codigo generado en el div de navegacion
	$("nav").html(result);

	goPage(0);
}
function goPage(codpage){

	//se incativan todos los items
	for(var i in pageData){
		document.getElementById('c_'+i).className = "inactivo";
	}
	//se activa el item seleccionado
	document.getElementById('c_'+ codpage).className = "activo";

	//se recupera la pagina por el codigo generado anteriormente
	var detailPage = pageData[codpage].split("&&");
	
	//se publica el contenido seleccionado en el articulo
	$("article").load(detailPage[1], function(data,stat){
		if(stat=="error"){
			console.log("error");
		}
	});
		
}

