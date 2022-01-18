<?php session_start();?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<?php include "class/Db.php";
$db = new Db();?>
<body>
<main>
    <div class="divThemeExercice">
        <div class="classThemeExercice divUn">
            <h1>DashBoard App la Rehab</h1>
            <a href="viewRates.php">Voir les commmentaires</a>
            <a href="viewDatabase.php">Voir la base de données</a>
            <a href="viewLexique.php">Voir le lexique</a>
            <p id="erreur"><?php if(isset($_SESSION["message"])){
                echo $_SESSION["message"];
                }?></p>
        </div>
        <fieldset class="classThemeExercice">
            <legend>Ajout Lexique</legend>
            <form action="traitement/ajoutMot.php" method="post" enctype="multipart/form-data">
                <div class="divInputLabel">
                    <label for="titreMot">Mot</label>
                    <input type="text" name="titreMot" id="titreMot" required="required">
                </div>
                <div class="divInputLabel">
                    <label for="dropExercice">Définition</label>
                    <textarea name="textDef"></textarea>
                </div>
                <button type="submit">Ajouter Mot</button>
            </form>
        </fieldset>
    </div>
    <div class="divThemeExercice">
        <fieldset class="classThemeExercice">
            <legend>Ajout thème</legend>
            <form action="traitement/ajoutTheme.php" method="post" enctype="multipart/form-data">
                <div class="divInputLabel">
                    <label for="titreTheme">Titre</label>
                    <input type="text" name="titreTheme" id="titreTheme"required="required">
                </div>
                <div class="divInputLabel">
                    <label for="dropCategorie">Catégorie</label>
                    <select name="dropCategorie" id="dropCategorie" required="required">
                        <?php $result = $db->getCategories();
                        foreach ($result as $value):?>
                            <option value="<?php echo $value?>"><?php echo $value?></option>
                        <?php endforeach;?>
                    </select>
                </div>
                <button type="submit">Ajouter Thème</button>
            </form>
        </fieldset>
        <fieldset class="classThemeExercice">
            <legend>Ajout Exercice</legend>
            <form action="traitement/ajoutExercice.php" method="post" enctype="multipart/form-data">
                <div class="divInputLabel">
                    <label for="titreExercice">Titre</label>
                    <input type="text" name="titreExercice" id="titreExercice" required="required">
                </div>
                <div class="divInputLabel">
                    <label for="dropExercice">Thème</label>
                    <select name="dropExercice" id="dropExercice" required="required">
                        <?php $result = $db->getThemes();
                        foreach ($result as $value):?>
                        <option value="<?php echo $value?>"><?php echo $value?></option>
                        <?php endforeach;?>
                    </select>
                </div>
                <button type="submit">Ajouter Exercice</button>
            </form>
        </fieldset>
    </div>
    <div class="divThemeExercice">
    <fieldset class="classThemeExercice">
        <legend>Ajout Item</legend>
        <form action="traitement/ajoutItem.php" method="post" enctype="multipart/form-data">
            <div id="divRadioAjout">
                <div class="classRadio" id="divRadioTexte">
                    <input type="radio" name="typeFichier" id="texteRadio" value="Texte" class="widthNormal" required="required" checked="checked">
                    <label for="texteRadio" class="widthNormal">Texte</label>
                </div>
                <div class="classRadio" id="divRadioLien">
                    <input type="radio" name="typeFichier" id="lienRadio" value="Lien" class="widthNormal" required="required">
                    <label for="lienRadio" class="widthNormal">Lien</label>
            </div>
                <div class="classRadio" id="divRadioImage">
                    <input type="radio" name="typeFichier" id="imageRadio" value="Image" class="widthNormal" required="required">
                    <label for="imageRadio" class="widthNormal">Image</label>
            </div>
            </div>
            <div class="divInputLabel hidden" id="divInputLien">
                <label for="lienItem">Lien</label>
                <input type="text" name="lienItem" id="lienItem">
            </div>
            <div class="divInputLabel" id="divInputTexte">
                <label for="textItem">Texte</label>
                <textarea name="textItem" id="textItem"></textarea>
            </div>
            <div class="divInputLabel hidden" id="divInputImage">
                <label for="imageItem">Image</label>
                <input type="file" name="imageItem" id="imageItem" accept="image/jpeg">
            </div>
            <div class="divInputLabel">
                <label for="dropExercice">Exercice</label>
                <select name="dropAjout" id="dropAjout">
                    <?php $result = $db->getExercices();
                    foreach ($result as $value):?>
                        <option value="<?php echo $value?>"><?php echo $value?></option>
                    <?php endforeach;?>
                </select>
            </div>
            <button type="submit">Ajouter Item</button>
        </form>
    </fieldset>
    <fieldset class="classThemeExercice">
        <legend>Supprimer</legend>
        <form action="traitement/suppr.php" method="post" enctype="multipart/form-data">
            <div id="divRadioSuppr">
                <div class="classRadio">
                    <input type="radio" name="typeSuppr" id="themeRadio" value="Theme" class="widthNormal" required="required">
                    <label for="themeRadio" class="widthNormal">Thème</label>
                </div>
                <div class="classRadio">
                    <input type="radio" name="typeSuppr" id="exerciceRadio" value="Exercice" class="widthNormal" required="required">
                    <label for="exerciceRadio" class="widthNormal">Exercice</label>
                </div>
            </div>
            <label for="dropSuppr">Supprimer</label>
            <select name="dropSuppr" id="dropSuppr" class="widthNormal" required="required">
                <?php $db = new Db();
                $result = $db->getExercices();
                foreach ($result as $value):?>
                <option value="<?php echo $value?>"><?php echo $value?></option>
                <?php endforeach;
                $result = $db->getThemes();
                foreach ($result as $value):?>
                <option value="<?php echo $value?>"><?php echo $value?></option>
                <?php endforeach;
                $result = $db->getCategories();
                foreach ($result as $value):?>
                <option value="<?php echo $value?>"><?php echo $value?></option>
                <?php endforeach;?>
            </select>
            <button type="submit">Supprimer élément</button>
        </form>
    </fieldset>
    </div>

    <script src="js/script.js"></script>
</body>
</html>
