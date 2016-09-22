window.addEventListener("load",function(){
	var boton = document.getElementById("boton");
	var span = document.getElementById("span");
	var input = document.getElementById("input");
	var formulario = document.getElementById("formulario");

	span.addEventListener("click",function(e){
		e.preventDefault();
		primerBoton();

	});

	function primerBoton(){
		boton.style.cssText = "display:block";
		span.style.cssText = "display:none";
		input.style.cssText = "display:block";
		formulario.style.cssText = "display:block";
	}
});
