<?php
include 'class/Db.php';
$db = new Db();
$categories = $db->getAllCategories();
$arrayCategories = Array();
$arrayTmp = Array();
$cpt = 0;

foreach ($categories as $categorie){
    $arrayCategorie = Array(
        "idCategorie" => $categorie["idCategory"],
        "nomCategorie" => $categorie["nameCategory"]
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
        "idTheme" => $theme["idLesson"],
        "nomTheme" => $theme["nameLesson"],
        "categorieId" => $theme["categoryId"]
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
        "idExercice" => $exercice["idItem"],
        "nomExercice" => $exercice["nameItem"],
        "themeId" => $exercice["lessonId"]
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
        "idItem" => $item["idFile"],
        "pathItem" => $item["pathFile"],
        "typeItem" => $item["typeFile"],
        "exerciceId" => $item["itemId"]
    );
    $arrayItems[$cpt] = $arrayItem;
    $cpt++;
}


$finalArray = Array(
        "categories" => $arrayCategories,
    "themes" => $arrayThemes,
    "exercices" => $arrayExercices,
    "items" => $arrayItems
);

$json = json_encode($finalArray);
file_put_contents("api/api.json", $json);
header("Location: index.php");
exit();
?>
