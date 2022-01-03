<?php
include "../class/Db.php";
$db = new Db();
switch ($_POST["typeSuppr"]){
    case "Exercice":
        $db->deleteExercice($_POST["dropSuppr"]);
        break;
    case "Theme":
        $db->deleteTheme("new theme");
        break;
    case "Categorie":
        $db->deleteCategorie("new caategory");
        break;
}
header("Location: ../dashboard.php");