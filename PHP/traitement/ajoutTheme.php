<?php
include "../class/Db.php";
$db = new Db();
$db->addLesson($_POST["titreTheme"], $_POST["dropCategorie"]);
header("Location: ../dashboard.php");
