<?php
include "../class/Db.php";
$db = new Db();
$comment = "";
$array = str_split($_GET["comment"]);
foreach ($array as $char){
    if($char == "_"){
        $comment .= " ";
    } elseif($char == "*"){
        $comment .= "'";
    } else{
        $comment .= $char;
    }
}
$db->addComment($_GET["rate"], $comment, $_GET["exerciceId"]);