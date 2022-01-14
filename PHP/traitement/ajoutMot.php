<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->addMot($_POST["titreMot"], $_POST["textDef"]);
header("Location: ../index.php");
