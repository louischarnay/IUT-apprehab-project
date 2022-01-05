<?php
class Db {
    public $pdo;
    function __construct(){
        $this->pdo = new PDO('sqlite:C:\Users\Pablo\Documents\IUT\IUT S3\PTUT\appRehab\PHP\database\database.db' );
    }

    public function addCategorie(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :categorie");
        $sth->execute(["categorie" => $nom]);
        $result = $sth->fetch();
        if($result != false){
            return false;
        }
        $sth = $this->pdo->prepare("INSERT INTO Categories(nameCategory) VALUES (:categorie)");
        $sth->execute(["categorie" => $nom]);
        return true;
    }

    public function addLesson(string $nom, string $categorie){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :categorie");
        $sth->execute(["categorie" => $categorie]);
        $result = $sth->fetch();
        if($result == false){
            return false;
        }
        $categorieId = $result["idCategory"];
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :lesson AND categoryId= :categorie");
        $sth->execute(["lesson" => $nom, "categorie" => $categorieId]);
        $result = $sth->fetch();
        if($result != false){
            return false;
        }
        $sth = $this->pdo->prepare("INSERT INTO Lessons (nameLesson, categoryId) VALUES (:nom, :categorie)");
        $sth->execute(["nom" => $nom, "categorie" => $categorieId]);
        return true;
    }

    public function addExercice(string $nom, string $lesson){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :lesson");
        $sth->execute(["lesson" => $lesson]);
        $result = $sth->fetch();
        if($result == false){
            echo "1";
            return false;
        }
        $lessonId = $result["idLesson"];
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE nameItem= :nom AND lessonId= :lessonId");
        $sth->execute(["nom" => $nom, "lessonId" => $lessonId]);
        $result = $sth->fetch();
        if($result != false){
            echo "2";
            return false;
        }
        $sth = $this->pdo->prepare("INSERT INTO Items(nameItem, lessonId) VALUES(:nom, :lessonId)");
        $sth->execute(["nom" => $nom, "lessonId" => $lessonId]);
        return true;
    }

    public function addItem(string $contenu, string $exercice, string $typeFile){
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE nameItem= :exercice");
        $sth->execute(["exercice" => $exercice]);
        $result = $sth->fetch();
        if($result == false){
            return false;
        }
        $itemId = $result["idItem"];
        $sth = $this->pdo->prepare("SELECT * FROM Files WHERE pathFile= :nom");
        $sth->execute(["nom" => $contenu]);
        $result = $sth->fetch();
        if($result != false){
            return false;
        }
        $sth = $this->pdo->prepare("INSERT INTO Files(pathFile, typeFile, itemId) VALUES(:contenu, :typeFile, :exercice)");
        $sth->execute(["exercice" => $itemId, "contenu" => $contenu, "typeFile" => $typeFile]);
        return true;
    }

    public function addWord(string $mot, string $def){
        $sth = $this->pdo->prepare("SELECT * FROM Words WHERE name= :mot");
        $sth->execute(["mot" => $mot]);
        $result = $sth->fetch();
        if($result != false){
            return 0;
        }
        $sth = $this->pdo->prepare("INSERT INTO Words(name, definition) VALUES(:mot, :def)");
        $sth->execute(["mot" => $mot, "def" => $def]);
        return true;
    }

    public function deleteExercice(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Items WHERE nameItem= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if ($result == false) {
            return false;
        }
        $itemId = $result["idItem"];
        $sth = $this->pdo->prepare("DELETE FROM Files WHERE itemId= :itemId");
        $sth->execute(["itemId" => $itemId]);
        $sth = $this->pdo->prepare("DELETE FROM Items WHERE idItem= :itemId");
        $sth->execute(["itemId" => $itemId]);
        return true;
    }

    public function deleteTheme(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Lessons WHERE nameLesson= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if($result == false){
            return false;
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
        return true;
    }

    public function deleteCategorie(string $nom){
        $sth = $this->pdo->prepare("SELECT * FROM Categories WHERE nameCategory= :nom");
        $sth->execute(["nom" => $nom]);
        $result = $sth->fetch();
        if($result == false){
            return false;
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
        return true;
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
}