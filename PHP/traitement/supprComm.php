<?php
include "../class/Db.php";
session_start();
$db = new Db();
$db->supprComm($_POST["idComm"]);
header("Location: ../viewRates.php");