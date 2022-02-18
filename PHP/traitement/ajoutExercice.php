<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->addExercice($_POST["titreExercice"], $_POST["dropTheme"]);
header("Location: ../index.php");