<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link href="style.css" rel="stylesheet">
</head>
<body>
<header>
    <h1>DashBoard App La Rehab</h1>
</header>
<main>
    <form>
        <label for="titreCategorie">Titre</label>
        <div id="divInputCategorie">
            <input type="text" name="titreCategorie" id="titreCategorie">
            <button type="submit">Ajouter Catégorie</button>
        </div>
    </form>
    <div id="divThemeExercice">
        <fieldset class="classThemeExercice">
            <legend>Ajout thème</legend>
            <form>
                <label for="titreTheme">Titre</label>
                <input type="text" name="titreTheme" id="titreTheme">
                <label for="dropCategorie">Catégorie</label>
                <select name="dropCategorie" id="dropCategorie">
                    <option value="Créativité">Créativité</option>
                    <option value="Cognition">Cognition</option>
                    <option value="Sport">Sport</option>
                </select>
                <button type="submit">Ajouter Thème</button>
            </form>
        </fieldset>
        <fieldset class="classThemeExercice">
            <legend>Ajout Exercice</legend>
            <form>
                <label for="titreExercice">Titre</label>
                <input type="text" name="titreExercice" id="titreExercice">
                <label for="dropExercice">Catégorie</label>
                <select name="dropExercice" id="dropExercice">
                    <option value="Renforcement">Renforcement</option>
                    <option value="Etirements">Etirements</option>
                    <option value="Liens/Vidéos">Liens/Vidéos</option>
                </select>
                <button type="submit">Ajouter Exercice</button>
            </form>
        </fieldset>
    </div>
    <fieldset>
        <legend>Ajout Item</legend>
        <form>
            <input type="radio" name="typeFichier" id="texteRadio" value="Texte">
            <label for="texteRadio">Texte</label>
            <input type="radio" name="typeFichier" id="lienRadio" value="Lien">
            <label for="lienRadio">Lien</label>
            <input type="radio" name="typeFichier" id="imageRadio" value="Image">
            <label for="imageRadio">Image</label>
            <label for="lienItem">Lien</label>
            <input type="text" name="lienItem" id="lienItem">
            <label for="textItem">Texte</label>
            <textarea name="textItem" id="textItem"></textarea>
            <label for="imageItem">Image</label>
            <input type="file" name="imageItem" id="imageItem" accept="image/jpeg">
            <label for="dropExercice">Catégorie</label>
            <select name="dropExercice" id="dropExercice">
                <option value="Séance1">Séance1</option>
                <option value="Séance2">Séance2</option>
                <option value="Séance3">Séance3</option>
            </select>
            <button type="submit">Ajouter Item</button>
        </form>
    </fieldset>
</main>
</body>
</html>
