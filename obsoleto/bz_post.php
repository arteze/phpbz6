<?php
$post = $_POST["datos"];
$txt = $post;
$bz_txt = base64_encode(bzcompress($txt,9));
$bzd_txt = bzdecompress(base64_decode($bz_txt));

$array = array(
	"txt" => $txt
	,"bz_txt"  => $bz_txt
	,"bzd_txt"  => $bzd_txt
);
echo json_encode($array);

?>
