<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->addTheme($_POST["titreTheme"], $_POST["dropCategorie"]);
header("Location: ../index.php");
