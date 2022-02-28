<?php
include 'class/Db.php';
session_start();
$db = new Db();
$categories = $db->getAllCategories();
$arrayCategories = Array();
$arrayTmp = Array();
$cpt = 0;

foreach ($categories as $categorie){
    $arrayCategorie = Array(
        "idCategorie" => $categorie["idCategorie"],
        "nomCategorie" => $categorie["nomCategorie"],
        "codeCouleur" => $categorie["codeCouleur"]
    );
    $arrayCategories[$cpt] = $arrayCategorie;
    $cpt++;
}

$themes = $db->getAllThemes();
$arrayThemes = Array();
$arrayTmp = Array();
$cpt = 0;

foreach ($themes as $theme) {
    $arrayTheme = Array(
        "idTheme" => $theme["idTheme"],
        "nomTheme" => $theme["nomTheme"],
        "categorieId" => $theme["categorieId"]
    );
    $arrayThemes[$cpt] = $arrayTheme;
    $cpt++;
}


$exercices = $db->getAllExercices();
$arrayExercices = Array();
$arrayTmp = Array();
$cpt = 0;

foreach ($exercices as $exercice) {
    $arrayExercice = Array(
        "idExercice" => $exercice["idExercice"],
        "nomExercice" => $exercice["nomExercice"],
        "themeId" => $exercice["themeId"]
    );
    $arrayExercices[$cpt] = $arrayExercice;
    $cpt++;
}

$items = $db->getAllItems();
$arrayItems = Array();
$arrayTmp = Array();
$cpt = 0;

foreach ($items as $item) {
    $arrayItem = Array(
        "idItem" => $item["idItem"],
        "pathItem" => $item["pathItem"],
        "typeItem" => $item["typeItem"],
        "exerciceId" => $item["exerciceId"]
    );
    $arrayItems[$cpt] = $arrayItem;
    $cpt++;
}

$items = $db->getAllMots();
$arrayMots = Array();
$arrayTmp = Array();
$cpt = 0;

foreach ($items as $item) {
    $arrayMot = Array(
        "idMot" => $item["idMot"],
        "mot" => $item["mot"],
        "definition" => $item["definition"]
    );
    $arrayMots[$cpt] = $arrayMot;
    $cpt++;
}

$finalArray = Array(
        "categories" => $arrayCategories,
    "themes" => $arrayThemes,
    "exercices" => $arrayExercices,
    "items" => $arrayItems,
    "mots" => $arrayMots
);

$json = json_encode($finalArray);
file_put_contents("api/api.json", $json);

$_SESSION["message"] = "Application mise à jour";
header("Location: index.php");
exit();
?>
