<?php
echo "postinfo: " . $_POST["info"] . "\x0a\x0a";
echo "urldecode: " . urldecode($_POST["info"]) . "\x0a\x0a";
echo "rawurldecode: " . rawurldecode($_POST["info"]) . "\x0a\x0a";
echo bzdecompress(rawurldecode($_POST["info"]));
?>
