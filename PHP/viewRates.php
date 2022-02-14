<?php session_start()?>
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
            <a href="api.php">Mettre à jour l'app</a>
            <a href="index.php">Retourner au dashboard</a>
            <a href="viewLexique.php">Voir le lexique</a>
        </div>
    </div>
    <p id="erreur"><?php if(isset($_SESSION["message"]))echo $_SESSION["message"];
    unset($_SESSION["message"])?></p>
    <?php $db = new Db();
    $allCommentaires = $db->getAllCommentaires();
    $allCommentaires = array_reverse($allCommentaires);
    foreach ($allCommentaires as $commentaire){
        $exercice = $db->getExerciceFromExerciceId($commentaire["exerciceId"]);
        $theme = $db->getThemeFromThemeId($exercice["themeId"]);
        $categorie = $db->getCategorieFromCategorieId($theme["categorieId"]);
        echo "
            <div class='divCommentaire'>
                <div class='categorieThemeExercice'>
                    <p class='categorieDataBase margin'>".$categorie['nomCategorie']."</p>
                    <p class='themeDataBase margin'>".$theme["nomTheme"]."</p>
                    <p class='exerciceCommentaire margin'>".$exercice["nomExercice"]."</p>
                </div>
                <div class='commentaire'>
                    <p class='noteCommentaire'>".$commentaire["note"]." / 5</p>
                    <p class='messageCommentaire'>".$commentaire["commentaire"]."</p><br>
                </div>
                <div class='date'>
                    14/02/2022
                    <form action='traitement/suppr.php'>
                        <input type='hidden' name='typeSuppr' value='Comment'>
                        <input type='hidden' name='dropSuppr' value='".$commentaire["idCommentaire"]."'>
                        <button type='submit' class='btAddTheme'>Suppr</button>
                    </form>
                </div>
            </div>";
    }?>
</body>
<body>
</body>
</html>
