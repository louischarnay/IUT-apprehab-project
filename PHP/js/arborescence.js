let arrayCategories = document.getElementsByClassName("categorieDataBase");
let arrayThemes = document.getElementsByClassName("titleTheme");
let arrayExercices = document.getElementsByClassName("titleExercice");

for (let i = 0; i < arrayCategories.length; i++) {
    arrayCategories[i].addEventListener("click", function() {
        let children = this.parentElement.parentElement.parentElement.children
        for (let cpt = 0; cpt < children.length; cpt++){
            if(children[cpt].classList.contains("themeNode")){
                children[cpt].classList.toggle("hidden")
            }
        }
    });
}

for (let i = 0; i < arrayThemes.length; i++){
    arrayThemes[i].addEventListener('click', function (){
        let children = this.parentElement.parentElement.children
        for (let cpt = 0; cpt < children.length; cpt++){
            if(children[cpt].classList.contains("exerciceNode")){
                children[cpt].classList.toggle("hidden")
            }
        }
    })
}
for (let i = 0; i < arrayExercices.length; i++){
    arrayExercices[i].addEventListener('click', function (){
        let children = this.parentElement.parentElement.children
        for (let cpt = 0; cpt < children.length; cpt++){
            if(children[cpt].classList.contains("itemNode")){
                children[cpt].classList.toggle("hidden")
            }
        }
    })
}






