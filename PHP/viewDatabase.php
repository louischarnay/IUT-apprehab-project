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
                            <div class="modal-content mainColor">
                                <div class="btCloseAddTheme">x</div>
                                <p class="titleModal">Ajouter un thème dans la catégorie ' .$category.'</p>
                                <form action="traitement/ajoutTheme.php" enctype="multipart/form-data" method="post">
                                    <div class="divInputLabel">
                                        <label for="titreTheme">Titre</label>
                                        <input type="text" name="titreTheme">
                                    </div>
                                    <input type="hidden" name="dropCategorie" value="'.$category.'">
                                    <button class="mainColor" type="submit">Ajouter</button>
                                </form>
                            </div>
                        </div>
                    </div>';
            $idCategory = $db->getCategorieId($category);
            $themes = $db->getThemesFromCategorie($idCategory);
            if(sizeof($themes) > 0) {
                foreach ($themes as $theme):
                    $idTheme = $db->getThemeId($theme);
                    $exercices = $db->getExerciceFromTheme($idTheme);
                    echo '
                            <div class="hidden themeNode">
                                <div class="themeDataBase brown">
                                    Thème ' . $theme . '
                                    <div class="buttonsForm">
                                        <div class="button">Ajouter</div>
                                        <div class="button">Modifier</div>
                                        <div class="button">Suppr</div>
                                    </div>
                            </div>';
                    if(sizeof($exercices) > 0){
                        foreach ($exercices as $exercice):
                            echo '
                                <div class="hidden exerciceNode">
                                    <div class="exerciceDataBase blue">
                                        Exercice ' . $exercice . '
                                        <div class="buttonsForm">
                                        <div class="button">Ajouter</div>
                                        <div class="button">Modifier</div>
                                        <div class="button">Suppr</div>
                                        </div>
                                    </div>';
                            $idExercice = $db->getExerciceId($exercice);
                            $items = $db->getItemsFromExercice($idExercice);
                            if(sizeof($items) > 0){
                            foreach ($items as $item):
                                echo '
                                    <div class="hidden itemNode red">
                                        Item ' . $item['typeItem'] . '
                                        <div class="buttonsForm">
                                            <div class="button">Modifier</div> 
                                            <div class="button">Suppr</div> 
                                        </div>
                                    </div>';
                            endforeach;
                            } else{
                                echo '
                                    <div class="hidden itemNode grey">
                                        Aucun item
                                        <div class="buttonsForm">
                                            <div class="button">Modifier</div> 
                                            <div class="button">Suppr</div> 
                                        </div>
                                    </div>';
                            }
                            echo '
                                </div>';
                        endforeach;
                    } else{
                    echo '<div class="hidden exerciceNode">
                            <div class="exerciceDataBase grey">
                                    Aucun exercice
                                <div class="buttonsForm">
                                    <div class="button">Ajouter</div>
                                    <div class="button">Modifier</div>
                                    <div class="button">Suppr</div>
                                </div>
                            </div>
                      </div>';
                    }
                        echo '
                            </div>';
                endforeach;
            } else{
                echo '<div class="hidden themeNode">
                            <div class="themeDataBase grey">
                                    Aucun thème
                                <div class="buttonsForm">
                                    <div class="button">Ajouter</div>
                                    <div class="button">Modifier</div>
                                    <div class="button">Suppr</div>
                                </div>
                            </div>
                      </div>';
            }
            echo'
                    </div>
                </div>';
        endforeach;?>

    </div>
    <script src="js/arborescence.js"></script>
    <script src="js/popup.js"></script>
</body>
</html>
