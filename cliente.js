function descargar(url,tipo,info,fun){
	var tmin = tipo.toString().toLowerCase()
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": 'application/x-www-form-urlencoded; charset="utf-8"'
		},
		body: `info=${encodeURIComponent(info)}`
	}).then(x=>x[
		tmin=="text"?"text"
		:tmin=="blob"?"blob"
		:tmin=="1"?"text"
		:tmin=="0"?"blob"
		:"blob"
	]())
	.then(fun);
}
function mostrar_descomprimido(x){
	document.querySelector("#info_descomprimida").value = x
}
function p_1(x){
	document.querySelector("#base64_comprimido").value = x
	descargar("post/descomprimir_y_mostrar_raw.php","text",x,mostrar_descomprimido)
}
function enviar_datos(){
	var info = document.querySelector("#info").value
	descargar("post/comprimir_y_mostrar_base64.php","text",info,p_1)
}
