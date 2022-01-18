<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DashBoard | Base de données</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<?php include "class/Db.php";
$db = new Db();?>
<body>
    <div class="h1Button">
        <h1 class="h1DataBase">Base de données</h1>
        <div class="buttonsDataBase">
            <a href="index.php">Retour au DashBoard</a>
            <a href="viewRates.php">Voir les commentaires</a>
        </div>
    </div>
    <div class="dataBase">
        <?php $categories = $db->getCategories();
        foreach ($categories as $category):
            echo "<div class='divDataBase'><p class='categorieDataBase'>Catégorie : ".$category."</p><br>";
            $idCategory = $db->getCategorieId($category);
            $themes = $db->getThemesFromCategorie($idCategory);
            foreach ($themes as $theme):
                echo "<p class='themeDataBase'>Thème : ".$theme."</p><br>";
                $idTheme = $db->getThemeId($theme);
                $exercices = $db->getExerciceFromTheme($idTheme);
                foreach ($exercices as $exercice):
                    echo "<p class='exerciceDataBase'>Exercice : ".$exercice."</p><br>";
                endforeach;
            endforeach;
            echo "</div>";
        endforeach;?>
    </div>
</body>
</html>
