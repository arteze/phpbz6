function descargar(url,info,fun){
	fetch(url, {
		method: "POST",
		headers: {"Content-Type": "application/x-www-form-urlencoded"},
		body: `info=${encodeURIComponent(info)}`
	}).then(x=>x.text())
	.then(fun);
}
function enviar_datos(){
	var info = document.querySelector("#info").value
	function fun(x){
		var info = x
		document.querySelector("#base64_comprimido").innerHTML = x
		function fun(x){
			document.querySelector("#info_descomprimida").value = x
		}
		descargar("bz_post_descomprimir.php",info,fun)
	}
	descargar("bz_post_b64.php",info,fun)
}
