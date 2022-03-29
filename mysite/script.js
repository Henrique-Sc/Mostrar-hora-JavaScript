function data() {
	var data = new Date

	document.getElementById('mostrarHora').innerHTML = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()

	console.log('Botão apertado :)')
}