<?php
session_start();
if($_POST["username"] == "team-laRehab" && password_verify($_POST["password"],'$2y$10$ul6xf/WM5UaWtved0/ofse4XI8zEdkDOZiBxv0mMFRHwpeWH/KUR2')){
    $_SESSION["connected"] = true;
    $_SESSION["connexion"] = "";
    header('Location: ../index.php');
} else {
    $_SESSION["connexion"] = "Nom d'utilisateur ou mot de passe incorrect";
    header('Location: ../connexion.php');
}