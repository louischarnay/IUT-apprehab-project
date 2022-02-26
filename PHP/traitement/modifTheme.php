<?php
include "../class/Db.php";
session_start();
$db = new Db();
$_SESSION["message"] = $db->updateTheme($_POST["newName"], $_POST["oldName"]);
header("Location: ../index.php");