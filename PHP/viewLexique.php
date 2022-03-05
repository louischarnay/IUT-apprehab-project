<?php session_start()?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>DashBoard | Lexique</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<?php include "class/Db.php";
include "class/Popup.php"?>
<body>
<div class="h1Button">
    <h1 class="h1DataBase">Lexique</h1>
    <div class="buttonsDataBase">
        <a href="api.php">Mettre à jour l'app</a>
        <a href="index.php">Retourner au dashboard</a>
        <a href="viewRates.php">Voir les commentaires</a>
    </div>
</div>
<p id="erreur"><?php if(isset($_SESSION["message"]))echo $_SESSION["message"];
    unset($_SESSION["message"])?></p>
<div class="buttonAdd btModal">Ajouter un mot</div>
<?php $db = new Db();
$popup = new Popup();
echo $popup->modalAddWord();
$allMots = $db->getAllMots();
foreach ($allMots as $mot){
    echo "
        <div class='divCommentaire mainColor'>
            <p class='mot'>".$mot['mot']."</p>
            <p class='messageCommentaire'>".$mot["definition"]. "</p>
            <div class='buttonsForm'>
                <div class='button btModal'><img src='img/edit_mainColor.png'></div>
                " .$popup->modalUpdateWord($mot['mot'], $mot['definition']). "
                <div class='button btModal'><img src='img/delete_mainColor.png'></div>
                " .$popup->modalSuppr("mainColor", "Supprimer le mot " . $mot['mot'] . " ?", $mot['mot'], "Mot")."
            </div>
        </div>";
}?>
<script src="js/popup.js"></script>
</body>
</html>
