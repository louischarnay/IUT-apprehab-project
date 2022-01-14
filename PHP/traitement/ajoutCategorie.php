<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->addCategorie($_POST["titreCategorie"]);
header("Location: /index.php");