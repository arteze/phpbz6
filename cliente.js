function descargar(url,info,fun){
	fetch(url, {
		method: "POST",
		headers: {"Content-Type": "application/x-www-form-urlencoded"},
		body: `info=${encodeURIComponent(info)}`
	}).then(x=>x.text())
	.then(fun);
}
function mostrar_descomprimido(x){
	document.querySelector("#info_descomprimida").value = x
}
function mostrar_comprimido_y_descomprimir(x){
	document.querySelector("#base64_comprimido").innerHTML = x
	descargar("bz_post_descomprimir.php",x,mostrar_descomprimido)
}
function enviar_datos(){
	var info = document.querySelector("#info").value
	descargar("bz_post_b64.php",info,mostrar_comprimido_y_descomprimir)
}
