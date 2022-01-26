<?php
include "../class/Db.php";
$db = new Db();
$db->addComment($_POST["rate"], $_POST["rate"], $_POST["idExercice"]);
