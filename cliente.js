function enviar_datos(){
	fetch("bz_post.php", {
		method: "POST",
		headers: {"Content-Type": "application/x-www-form-urlencoded"},
		body: `datos=${document.querySelector("#datos").value}`
	}).then(x=>x.text())
	.then(x=>{
		var analizado = JSON.parse(x)
		document.querySelector("#b64c").innerHTML = analizado.bz_txt
		document.querySelector("#d").value = analizado.bzd_txt
	});
}
