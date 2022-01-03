<?php
include "../class/Db.php";
$db = new Db();
switch ($_POST["typeFichier"]){
    case "Image":
        break;
    case "Lien":
        $db->addItem($_POST["LienItem"], $_POST["dropAjout"], "Texte");
        break;
    case "Texte":
    $db->addItem($_POST["textItem"], $_POST["dropAjout"], "Texte");
        break;
}
header("Location: ../dashboard.php");
