<?php session_start()?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DashBoard | Base de données</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<?php include "class/Db.php";
$db = new Db();
include "class/Popup.php";
$popup = new Popup()?>
<body>
<h1>Connexion</h1>
<form action="traitement/connexionTraitement.php" method="post" enctype="multipart/form-data">
    <div>
        <label for="username">Nom d'utilisateur</label>
        <input type="text" name="username" required="required">
        <label for="password">Mot de passe</label>
        <input type="password" name="password" required="required">
        <button type="submit">Se connecter</button>
    </div>
</form>
<?=$_SESSION["connexion"]?>
</body>
</html>
