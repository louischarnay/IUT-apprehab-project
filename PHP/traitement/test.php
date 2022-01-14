<?php
include "../class/Db.php";
$db = new Db();
$result=$db->getAllCommentaires();
foreach ($result as $value){
    echo $value["rate"]."     ".$value["comment"]."     ".$value["itemId"]."<br>";
}

