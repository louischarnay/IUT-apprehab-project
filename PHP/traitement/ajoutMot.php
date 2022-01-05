<?php
include "../class/Db.php";
$db = new Db();
$db->addWord($_POST["titreMot"], $_POST["textDef"]);
header("Location: ../dashboard.php");
