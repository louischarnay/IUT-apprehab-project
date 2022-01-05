<?php
include "../class/Db.php";
$db = new Db();
$db->addCategorie($_POST["titreCategorie"]);
header("Location: /dashboard.php");