<?php
include "../class/Db.php";
session_start();
$db = new Db();
switch ($_POST["typeSuppr"]){
    case "Exercice":
        $_SESSION["message"] = $db->deleteExercice($_POST["dropSuppr"]);
        break;
    case "Theme":
        $_SESSION["message"] = $db->deleteTheme($_POST["dropSuppr"]);
        break;
    case "Categorie":
        $_SESSION["message"] = $db->deleteCategorie($_POST["dropSuppr"]);
        break;
}
header("Location: ../index.php");