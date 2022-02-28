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
    case  "Mot":
        $_SESSION["message"] = $db->deleteMot($_POST["dropSuppr"]);
        break;
    case "Item":
        $path = $db->getPathItemFromId($_POST["dropSuppr"]);
        if (file_exists('..'.$path["pathItem"])) {
            unlink('..'.$path["pathItem"]);
        }
        $_SESSION["message"] = $db->deleteItem($_POST["dropSuppr"]);
        break;
    case "Commentaire":
        $db->supprComm($_POST["dropSuppr"]);
        break;
}
if($_POST["typeSuppr"] == "Mot") {
    header("Location: ../viewLexique.php");
} elseif ($_POST["typeSuppr"] == "Commentaire"){
    header("Location: ../viewRates.php");
} else {
    header("Location: ../index.php");
}