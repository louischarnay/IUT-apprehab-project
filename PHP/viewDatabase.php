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
                    <div class="divDataBaseButton">
                        <div class="categoryNode">
                            <div class="categorieDataBase">
                                Catégorie '.$category. '
                            </div>
                        </div>
                        <div class="btAddTheme">Ajouter</div>
                        <div class="modalAddTheme">
                            <div class="modal-content">
                                <div class="btCloseAddTheme">x</div>
                                <p>Ajouter un thème dans la catégorie ' .$category.'</p>
                                <form action="traitement/ajoutTheme.php" enctype="multipart/form-data" method="post">
                                    <label for="titreTheme">Titre</label>
                                    <input type="text" name="titreTheme">
                                    <input type="hidden" name="dropCategorie" value="'.$category.'">
                                    <button type="submit">Ajouter</button>
                                </form>
                            </div>
                        </div>
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
                                    <div class="button brown">Ajouter</div>
                                    <div class="button brown">Modifier</div>
                                    <form action="traitement/suppr.php" enctype="application/x-www-form-urlencoded" method="post">
                                        <input type="hidden" value="'.$theme.'" name="dropSuppr">
                                        <input type="hidden" value="Theme" name="typeSuppr">
                                        <button type="submit">Suppr</button>
                                    </form>
                                </div>
                        </div>';
                foreach ($exercices as $exercice):
                    echo '
                            <div class="hidden exerciceNode">
                                <div class="exerciceDataBase blue">
                                    Exercice '.$exercice.'
                                    <div class="buttonsForm">
                                    <div class="button blue">Ajouter</div>
                                    <div class="button blue">Modifier</div>
                                    <form action="traitement/suppr.php" enctype="multipart/form-data" method="post">
                                        <input type="hidden" value="'.$exercice.'" name="dropSuppr">
                                        <input type="hidden" value="Exercice" name="typeSuppr">
                                        <button type="submit">Suppr</button>
                                    </form>
                                    </div>
                                </div>';
                    $idExercice = $db->getExerciceId($exercice);
                    $items = $db->getItemsFromExercice($idExercice);
                    foreach ($items as $item):
                        echo '
                                <div class="hidden itemNode red">
                                    Item '.$item['typeItem'].'
                                    <div class="buttonsForm">
                                    <div class="button red">Modifier</div>  
                                        <form action="traitement/suppr.php" enctype="multipart/form-data" method="post">
                                            <input type="hidden" value="'.$item['idItem'].'" name="dropSuppr">
                                            <input type="hidden" value="Item" name="typeSuppr">
                                            <button type="submit">Suppr</button>
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
    <script src="js/popup.js"></script>
</body>
</html>
