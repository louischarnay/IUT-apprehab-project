<?php
include "../class/Db.php";
session_start();
$db = new Db();
if($_POST["titreExercice"] != null){
    $_SESSION["message"] = $db->addExercice($_POST["titreExercice"], $_POST["dropTheme"]);
} else {
    $_SESSION["message"] = "Exercice vide";
}
header("Location: ../index.php");