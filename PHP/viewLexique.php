<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DashBoard | Lexique</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<?php include "class/Db.php";?>
<body>
<div class="h1Button">
    <h1 class="h1DataBase">Commentaires</h1>
    <div class="buttonsDataBase">
        <a href="index.php">Retour au DashBoard</a>
        <a href="viewDatabase.php">Voir la base de données</a>
    </div>
</div>
<?php $db = new Db();
$allMots = $db->getAllMots();
foreach ($allMots as $mot){
    echo "<div class='divCommentaire'><div class='categorieThemeExercice'>".
        "<p class='categorieDataBase margin'>".$mot['name']."</p>".
        "<p class='messageCommentaire'>".$mot["definition"]."</p><br>".
        "</div></div>";
}?>
</body>
<body>
</body>
</html>
