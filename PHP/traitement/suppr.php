<?php
include "../class/Db.php";
$db = new Db();
switch ($_POST["typeSuppr"]){
    case "Exercice":
        $db->deleteExercice("new Exercice");
        break;
}
header("Location: ../dashboard.php");