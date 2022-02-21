<?php session_start();?>
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
<div class="h1Button">
    <h1 class="h1DataBase">Dashboard</h1>
    <div class="buttonsDataBase">
        <a href="api.php">Mettre à jour l'app</a>
        <a href="viewLexique.php">Voir le lexique</a>
        <a href="viewRates.php">Voir les commentaires</a>
    </div>
</div>
<p id="erreur"><?php if(isset($_SESSION["message"]))echo $_SESSION["message"];
                    unset($_SESSION["message"])?></p>
<div class="divThemeExercice">
    <fieldset class="classThemeExercice">
        <legend>Changer Challenge</legend>
        <form action="traitement/changementChallenge.php" method="post" enctype="multipart/form-data">
            <label for="titreExercice">Challenge</label>
            <input type="file" name="challenge" required="required">
            <button type="submit">Changer Challenge</button>
        </form>
    </fieldset>
    <fieldset class="classThemeExercice">
        <legend>Qui sommes-nous</legend>
        <form action="traitement/changementChallenge.php" method="post" enctype="multipart/form-data">
            <textarea class="textAreaInput" name="newtext"></textarea>
            <button type="submit">Mettre à jour</button>
        </form>
    </fieldset>
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
                                        <div class="button btModal"><img src="icons/edit_theme.png" alt="Suppr"></div>
                '.$popup->modalUpdate('brown', $theme, '#', 'Modifier le thème '.$theme.' ?').'
                                        <div class="button btModal"><img src="icons/delete_theme.png" alt="Modifier"></div>
                '.$popup->modalSuppr('brown', 'Supprimer le thème '.$theme.' ?', $theme, 'Theme').'
                                    </div>
                            </div>';
                if(sizeof($exercices) > 0){
                    foreach ($exercices as $exercice):
                        echo '
                                <div class="hidden exerciceNode">
                                    <div class="exerciceDataBase blue">
                                        Exercice ' . $exercice . '
                                        <div class="buttonsForm">
                                        <div class="button btModal"><img src="icons/edit_exercice.png" alt="Modifier"></div>
                        '.$popup->modalUpdate('blue', $exercice, '#', 'Modifier l\'exercice '.$exercice.' ?').'
                                        <div class="button btModal"><img src="icons/delete_exercice.png" alt="Suppr"></div>
                        '.$popup->modalSuppr('blue', 'Supprimer l\'exercice '.$exercice.' ?', $exercice, 'Exercice').'
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
                                            <div class="button btModal"><img src="icons/edit_item.png" alt="Modifier"></div> 
                                            '.$popup->modalUpdateItem($item, $exercice).'
                                            <div class="button btModal"><img src="icons/delete_item.png" alt="Suppr"></div> 
                                            '.$popup->modalSuppr('red', 'Supprimer l\'item '.$item["typeItem"].' ?', $item['idItem'], 'Item').'
                                            
                                        </div>
                                    </div>';
                            endforeach;
                        }
                            echo '<div class="hidden itemNode noBorder"><div class="buttonsForm">
                                        <div class="button btModal"><img src="icons/add_item.png" alt="Ajouter"></div>
                                            
                                        </div>
                                    </div>
                                </div>';
                    endforeach;
                }
                echo '
                    <div class="hidden exerciceNode">
                        <div class="exerciceDataBase noBorder">
                            <div class="buttonsForm">
                                <div class="button btModal"><img src="icons/add_exercice.png" alt="Ajouter"></div>
          
                                '.$popup->modalAdd('blue', 'Ajouter un exercice dans le thème ' .$theme, 'Exercice', 'Theme', $theme).'
                            </div>
                        </div>
                    </div>
                </div>';
            endforeach;
        }
        echo '<div class="hidden themeNode">
                <div class="themeDataBase noBorder">
                    <div class="buttonsForm">
                        <div class="button btModal"><img src="icons/add_theme.png" alt="Ajouter"></div>
                            '.$popup->modalAdd('brown', 'Ajouter un theme dans la catégorie '.$category, 'Theme', 'Categorie', $exercice).'
                        </div>
                    </div>
                </div>
            </div>';
    endforeach;?>

</div>
<script src="js/arborescence.js"></script>
<script src="js/popup.js"></script>
<script src="js/script.js"></script>
</body>
</html>
