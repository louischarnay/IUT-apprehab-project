<?php
include "../class/Db.php";
$db = new Db();
$db->updatePresentation($_POST["newText"]);
header("Location: ../index.php");