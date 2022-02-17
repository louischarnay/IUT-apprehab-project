<?php session_start();?>
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
                                        <div class="modal">
                                            <div class="modal-content brown">
                                                <div class="btClose">x</div>
                                                <p class="titleModal">Modifier le thème '.$theme.' ?</p>
                                                <form action="traitement/#.php" enctype="multipart/form-data" method="post">';//TODO
                                                    echo '<input type="text" name="newNomTheme" value="'.$theme.'">
                                                    <input type="hidden" name="oldNomTheme" value="'.$theme.'">
                                                    <button class="brown" type="submit">Modifier</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="button btModal"><img src="icons/delete_theme.png" alt="Modifier"></div>
                                        <div class="modal">
                                            <div class="modal-content brown">
                                                <div class="btClose">x</div>
                                                <p class="titleModal">Supprimer le thème '.$theme.' ?</p>
                                                <form action="traitement/suppr.php" enctype="multipart/form-data" method="post">
                                                    <input type="hidden" name="dropSuppr" value="'.$theme.'">
                                                    <input type="hidden" name="typeSuppr" value="Theme">
                                                    <button class="brown" type="submit">Supprimer</button>
                                                </form>
                                            </div>
                                        </div>
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
                                        <div class="modal">
                                            <div class="modal-content blue ">
                                                <div class="btClose">x</div>
                                                <p class="titleModal">Modifier l\'exercice '.$exercice.' ?</p>
                                                <form action="traitement/#.php" enctype="multipart/form-data" method="post">';//TODO
                                                    echo'<input type="text" name="newNomExercice" value="'.$exercice.'">
                                                    <input type="hidden" name="oldNomExercice" value="'.$exercice.'">
                                                    <button class="blue" type="submit">Modifier</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div class="button btModal"><img src="icons/delete_exercice.png" alt="Suppr"></div>
                                        <div class="modal">
                                            <div class="modal-content blue ">
                                                <div class="btClose">x</div>
                                                <p class="titleModal">Supprimer l\'exercice '.$exercice.' ?</p>
                                                <form action="traitement/suppr.php" enctype="multipart/form-data" method="post">
                                                    <input type="hidden" name="dropSuppr" value="'.$exercice.'">
                                                    <input type="hidden" name="typeSuppr" value="Exercice">
                                                    <button class="blue" type="submit">Supprimer</button>
                                                </form>
                                            </div>
                                        </div>
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
                                            <div class="modal">
                                                <div class="modal-content red ">
                                                    <div class="btClose">x</div>
                                                    <p class="titleModal">Modifier l\'item '.$item["typeItem"].' ?</p>
                                                <form action="traitement/ajoutItem.php" method="post" enctype="multipart/form-data">
                                                        <div id="divRadioAjout">
                                                            <div class="classRadio divRadioTexte">
                                                                <input type="radio" name="typeFichier" id="texteRadio" value="Texte" class="widthNormal noMargin" required="required" checked="checked">
                                                                <label for="texteRadio" class="widthNormal noMargin">Texte</label>
                                                            </div>
                                                            <div class="classRadio divRadioLien">
                                                                <input type="radio" name="typeFichier" id="lienRadio" value="Lien" class="widthNormal noMargin" required="required">
                                                                <label for="lienRadio" class="widthNormal noMargin">Lien</label>
                                                            </div>
                                                            <div class="classRadio divRadioImage">
                                                                <input type="radio" name="typeFichier" id="imageRadio" value="Image" class="widthNormal noMargin" required="required">
                                                                <label for="imageRadio" class="widthNormal noMargin">Image</label>
                                                            </div>
                                                        </div>
                                                        <div class="divInputLabel hidden divInputLien">
                                                            <label for="lienItem">Lien</label>
                                                            <input type="text" name="lienItem" id="lienItem" class="inputModal">
                                                        </div>
                                                        <div class="divInputLabel divInputTexte">
                                                            <label for="textItem">Texte</label>
                                                            <textarea name="textItem" id="textItem"></textarea>
                                                        </div>
                                                        <div class="divInputLabel hidden divInputImage">
                                                            <label for="imageItem">Image</label>
                                                            <input type="file" name="imageItem" class="inputModal" id="imageItem" accept="image/jpeg">
                                                        </div>
                                                        <input type="hidden" name="dropAjout" value="'.$exercice.'">
                                                        <button class="red" type="submit">Modifier</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="button btModal"><img src="icons/delete_item.png" alt="Suppr"></div> 
                                            <div class="modal">
                                                <div class="modal-content red ">
                                                    <div class="btClose">x</div>
                                                    <p class="titleModal">Supprimer l\'item '.$item["typeItem"].' ?</p>
                                                    <form action="traitement/suppr.php" enctype="multipart/form-data" method="post">
                                                        <input type="hidden" name="dropSuppr" value="'.$item['idItem'].'">
                                                        <input type="hidden" name="typeSuppr" value="Item">
                                                        <button class="red" type="submit">Supprimer</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>';
                            endforeach;
                        }
                            echo '<div class="hidden itemNode noBorder"><div class="buttonsForm">
                                        <div class="button btModal"><img src="icons/add_item.png" alt="Ajouter"></div>
                                             <div class="modal">
                                                <div class="modal-content red">
                                                    <div class="btClose">x</div>
                                                    <p class="titleModal">Ajouter un item dans l\'exercice ' .$exercice.'</p>
                                                    <form action="traitement/ajoutItem.php" method="post" enctype="multipart/form-data">
                                                        <div id="divRadioAjout">
                                                            <div class="classRadio divRadioTexte">
                                                                <input type="radio" name="typeFichier" id="texteRadio" value="Texte" class="widthNormal noMargin" required="required" checked="checked">
                                                                <label for="texteRadio" class="widthNormal noMargin">Texte</label>
                                                            </div>
                                                            <div class="classRadio divRadioLien">
                                                                <input type="radio" name="typeFichier" id="lienRadio" value="Lien" class="widthNormal noMargin" required="required">
                                                                <label for="lienRadio" class="widthNormal noMargin">Lien</label>
                                                            </div>
                                                            <div class="classRadio divRadioImage">
                                                                <input type="radio" name="typeFichier" id="imageRadio" value="Image" class="widthNormal noMargin" required="required">
                                                                <label for="imageRadio" class="widthNormal noMargin">Image</label>
                                                            </div>
                                                        </div>
                                                        <div class="divInputLabel hidden divInputLien">
                                                            <label for="lienItem">Lien</label>
                                                            <input type="text" name="lienItem" id="lienItem" class="inputModal">
                                                        </div>
                                                        <div class="divInputLabel divInputTexte">
                                                            <label for="textItem">Texte</label>
                                                            <textarea name="textItem" id="textItem"></textarea>
                                                        </div>
                                                        <div class="divInputLabel hidden divInputImage">
                                                            <label for="imageItem">Image</label>
                                                            <input type="file" name="imageItem" class="inputModal" id="imageItem" accept="image/jpeg">
                                                        </div>
                                                        <input type="hidden" name="dropAjout" value="'.$exercice.'">
                                                        <button class="red" type="submit">Ajouter</button>
                                                    </form>
                                                </div>
                                            </div>
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
                                <div class="modal">
                                    <div class="modal-content blue">
                                        <div class="btClose">x</div>
                                        <p class="titleModal">Ajouter un exercice dans le thème ' .$theme.'</p>
                                        <form action="traitement/ajoutExercice.php" enctype="multipart/form-data" method="post">
                                            <div class="divInputLabel">
                                                <label for="titreExercice">Titre</label>
                                                <input type="text" name="titreExercice" class="inputModal">
                                            </div>
                                            <input type="hidden" name="dropTheme" value="'.$theme.'">
                                            <button class="blue" type="submit">Ajouter</button>
                                        </form>
                                    </div>
                                </div>
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
                            <div class="modal">
                                <div class="modal-content brown ">
                                    <div class="btClose">x</div>
                                        <p class="titleModal">Ajouter un thème dans la catégorie ' .$category.'</p>
                                        <form action="traitement/ajoutTheme.php" enctype="multipart/form-data" method="post">
                                            <div class="divInputLabel">
                                                <label for="titreTheme">Titre</label>
                                                <input type="text" name="titreTheme" class="inputModal">
                                            </div>
                                            <input type="hidden" name="dropCategorie" value="'.$category.'">
                                            <button class="brown" type="submit">Ajouter</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
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
