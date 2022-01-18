<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DashBoard | Commentaires</title>
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
    $allCommentaires = $db->getAllCommentaires();
    foreach ($allCommentaires as $commentaire){
        $exercice = $db->getExerciceFromExerciceId($commentaire["exerciceId"]);
        $theme = $db->getThemeFromThemeId($exercice["themeId"]);
        $categorie = $db->getCategorieFromCategorieId($theme["categorieId"]);
        echo "<div class='divCommentaire'><div class='categorieThemeExercice'>".
            "<p class='categorieDataBase margin'>".$categorie['nomCategorie']."</p>".
            "<p class='themeDataBase margin'>".$theme["nomTheme"]."</p>".
            "<p class='exerciceCommentaire margin'>".$exercice["nomExercice"]."</p>".
            "</div><div class='commentaire'>".
            "<p class='noteCommentaire'>".$commentaire["note"]." / 5</p>".
            "<p class='messageCommentaire'>".$commentaire["commentaire"]."</p><br>".
            "</div></div>";
    }?>
</body>
<body>
</body>
</html>
