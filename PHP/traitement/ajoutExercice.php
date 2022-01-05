<?php
include "../class/Db.php";
$db = new Db();
$db->addExercice($_POST["titreExercice"], $_POST["dropExercice"]);
header("Location: ../dashboard.php");