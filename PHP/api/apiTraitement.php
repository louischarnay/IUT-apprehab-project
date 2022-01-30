<?php
include "../class/Db.php";
$db = new Db();
$db->addComment($_GET["rate"], $_GET["comment"], $_GET["exerciceId"]);


