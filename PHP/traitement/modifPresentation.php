<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->updatePresentation($_POST["newText"]);
header("Location: ../index.php");