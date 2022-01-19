<?php
class Db {
    public $pdo;
    function __construct(){
        $this->pdo = new PDO('sqlite:'.__DIR__.'/../database/database.db' );
    }

    public function addCategorie(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :categorie");
        $sth->execute(["categorie" => $nom]);
        $result = $sth->fetch();
        if($result != false){
            return "Catégorie déjà existante";
        }
        $sth = $this->pdo->prepare("INSERT INTO Categories(nameCategory) VALUES (:categorie)");
        $sth->execute(["categorie" => $nom]);
        return "Catégorie ajoutée";
    }

    public function addTheme(string $nom, string $categorie){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :categorie");
        $sth->execute(["categorie" => $categorie]);
        $result = $sth->fetch();
        if($result == false){
            return "Catégorie inexistante";
        }
        $categorieId = $result["idCategory"];
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :lesson");
        $sth->execute(["lesson" => $nom]);
        $result = $sth->fetch();
        if($result != false){
            return "Thème déjà existant";
        }
        $sth = $this->pdo->prepare("INSERT INTO Lessons (nameLesson, categoryId) VALUES (:nom, :categorie)");
        $sth->execute(["nom" => $nom, "categorie" => $categorieId]);
        return "Thème ajouté";
    }

    public function addExercice(string $nom, string $lesson){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :lesson");
        $sth->execute(["lesson" => $lesson]);
        $result = $sth->fetch();
        if($result == false){
            return "Thème non existant";
        }
        $lessonId = $result["idLesson"];
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE nameItem= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if($result != false){
            return "Exercice déjà existant";
        }
        $sth = $this->pdo->prepare("INSERT INTO Items(nameItem, lessonId) VALUES(:nom, :lessonId)");
        $sth->execute(["nom" => $nom, "lessonId" => $lessonId]);
        return "Exercice ajouté";
    }

    public function addItem(string $contenu, string $exercice, string $typeFile){
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE nameItem= :exercice");
        $sth->execute(["exercice" => $exercice]);
        $result = $sth->fetch();
        if($result == false){
            return "Exercice non existant";
        }
        $itemId = $result["idItem"];
        $sth = $this->pdo->prepare("SELECT * FROM Files WHERE pathFile= :nom");
        $sth->execute(["nom" => $contenu]);
        $result = $sth->fetch();
        if($result != false){
            return "Item déjà existant";
        }
        $sth = $this->pdo->prepare("INSERT INTO Files(pathFile, typeFile, itemId) VALUES(:contenu, :typeFile, :exercice)");
        $sth->execute(["exercice" => $itemId, "contenu" => $contenu, "typeFile" => $typeFile]);
        return "Item ajouté";
    }

    public function addMot(string $mot, string $def){
        $sth = $this->pdo->prepare("SELECT * FROM Words WHERE name= :mot");
        $sth->execute(["mot" => $mot]);
        $result = $sth->fetch();
        if($result != false){
            return "Mot déjà existant";
        }
        $sth = $this->pdo->prepare("INSERT INTO Words(name, definition) VALUES(:mot, :def)");
        $sth->execute(["mot" => $mot, "def" => $def]);
        return "Mot ajouté";
    }

    public function deleteExercice(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE nameItem= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if ($result == false) {
            return "Exercice non existant";
        }
        $itemId = $result["idItem"];
        $sth = $this->pdo->prepare("DELETE FROM Files WHERE itemId= :itemId");
        $sth->execute(["itemId" => $itemId]);
        $sth = $this->pdo->prepare("DELETE FROM Items WHERE idItem= :itemId");
        $sth->execute(["itemId" => $itemId]);
        return "Exercice supprimé";
    }

    public function deleteTheme(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if($result == false){
            return "Thème non existant";
        }
        $lessonId = $result["idLesson"];
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE lessonId= :lessonId");
        $sth->execute(["lessonId" => $lessonId]);
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        foreach ($result as $value){
            $this->deleteExercice($value);
        }
        $sth = $this->pdo->prepare("DELETE FROM Lessons WHERE idLesson= :lessonId");
        $sth->execute(["lessonId" => $lessonId]);
        return "Thème supprimé";
    }

    public function deleteCategorie(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if($result == false){
            return "Catégorie non existante";
        }
        $categoryId = $result["idCategory"];
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE categoryId= :categoryId");
        $sth->execute(["categoryId" => $categoryId]);
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        foreach ($result as $value){
            $this->deleteTheme($value);
        }
        $sth = $this->pdo->prepare("DELETE FROM Categories WHERE idCategory= :categoryId");
        $sth->execute(["categoryId" => $categoryId]);
        return "Catégorie supprimée";
    }

    public function getCategories(){
        $sth = $this->pdo->prepare("SELECT * FROM Categories");
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        return $result;
    }

    public function getThemes(){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons");
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        return $result;
    }

    public function getExercices(){
        $sth = $this->pdo->prepare("SELECT * FROM Items");
        $sth->execute();
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        return $result;
    }

    public function getCategorieId(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch(PDO::FETCH_COLUMN, 0);
        return $result;
    }

    public function getThemeId(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch(PDO::FETCH_COLUMN, 0);
        return $result;
    }

    public function getThemesFromCategorie(string $idCategory){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE categoryId= :idCategory");
        $sth->execute(["idCategory" => $idCategory]);
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        return $result;
    }

    public function getExerciceFromTheme(string $idLesson){
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE lessonId= :idLesson");
        $sth->execute(["idLesson" => $idLesson]);
        $result = $sth->fetchAll(PDO::FETCH_COLUMN, 1);
        return $result;
    }

    public function getAllCommentaires(){
        $sth = $this->pdo->prepare("SELECT comment, rate, itemId FROM Rates");
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getExerciceFromExerciceId(string $id){
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE idItem= :id");
        $sth->execute(["id" => $id]);
        return $sth->fetch();
    }

    public function getThemeFromThemeId(string $id){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE idLesson= :id");
        $sth->execute(["id" => $id]);
        return $sth->fetch();
    }

    public function getCategorieFromCategorieId(string $id){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE idCategory= :id");
        $sth->execute(["id" => $id]);
        return $sth->fetch();
    }

    public function getAllMots(){
        $sth = $this->pdo->prepare("SELECT * FROM Words");
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getAllCategories(){
        $sth = $this->pdo->prepare("SELECT * FROM Categories");
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getAllThemes(){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons");
        $sth->execute();
        return $sth->fetchAll();
    }

    public function getAllExercices(){
        $sth = $this->pdo->prepare("SELECT * FROM Items");
        $sth->execute();
        return $sth->fetchAll();
    }
}