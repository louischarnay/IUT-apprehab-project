<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->addExercice($_POST["titreExercice"], $_POST["dropExercice"]);
header("Location: ../index.php");