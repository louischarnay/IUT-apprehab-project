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
            echo '
                <div class="divDataBase">
                    <div class="categoryNode">
                        <div class="categorieDataBase">
                        <div class="categorieDataBase">
                            Catégorie '.$category.'</div>
                            <form>
                                <input type="hidden">
                                <button type="submit">Ajouter</button>
                            </form>
                        </div>';
            $idCategory = $db->getCategorieId($category);
            $themes = $db->getThemesFromCategorie($idCategory);
            foreach ($themes as $theme):
                $idTheme = $db->getThemeId($theme);
                $exercices = $db->getExerciceFromTheme($idTheme);
                echo '
                        <div class="hidden themeNode">
                            <div class="themeDataBase brown">
                                Thème '.$theme.'
                                <div class="buttonsForm">
                                    <form>
                                        <input type="hidden" value="'.$idTheme.'">
                                        <button type="submit">Ajouter</button>
                                    </form>
                                    <form>
                                        <input type="hidden" value="'.$idTheme.'">
                                        <button type="submit">Modifier</button>
                                    </form>
                                    <form action="traitement/suppr.php" enctype="application/x-www-form-urlencoded" method="post">
                                        <input type="hidden" value="'.$theme.'" name="dropSuppr">
                                        <input type="hidden" value="Theme" name="typeSuppr">
                                        <button type="submit">Supprimer</button>
                                    </form>
                                </div>
                        </div>';
                foreach ($exercices as $exercice):
                    echo '
                            <div class="hidden exerciceNode">
                                <div class="exerciceDataBase blue">
                                    Exercice '.$exercice.'
                                    <div class="buttonsForm">
                                        <form>
                                            <input type="hidden" value="'.$idTheme.'">
                                            <button type="submit">Ajouter</button>
                                        </form>
                                        <form>
                                            <input type="hidden" value="'.$idTheme.'">
                                            <button type="submit">Modifier</button>
                                        </form>
                                    <form action="traitement/suppr.php" enctype="application/x-www-form-urlencoded" method="post">
                                        <input type="hidden" value="'.$exercice.'" name="dropSuppr">
                                        <input type="hidden" value="Exercice" name="typeSuppr">
                                        <button type="submit">Supprimer</button>
                                    </form>
                                    </div>
                                </div>';
                    $idExercice = $db->getExerciceId($exercice);
                    $items = $db->getItemsFromExercice($idExercice);
                    foreach ($items as $item):
                        echo '
                                <div class="hidden itemNode red">
                                    Item '.$item.'
                                    <div class="buttonsForm">
                                        <form>
                                            <input type="hidden" value="'.$idTheme.'">
                                            <button type="submit">Modifier</button>
                                        </form>
                                        <form>
                                            <input type="hidden" value="'.$idTheme.'">
                                            <button type="submit">Supprimer</button>
                                        </form>
                                    </div>
                                    </div>';
                    endforeach;
                    echo '</div>';
                endforeach;
                echo '
                        </div>';
            endforeach;
            echo'
                    </div>
                </div>';
        endforeach;?>
    </div>
    <script src="js/arborescence.js"></script>
</body>
</html>
