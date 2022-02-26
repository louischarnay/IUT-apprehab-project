<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->updateMot($_POST["titreMot"], $_POST["textDef"], $_POST["oldMot"]);
header("Location: ../viewLexique.php");
