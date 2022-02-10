let modalsAddTheme = document.getElementsByClassName("modalAddTheme");
let btsAddTheme = document.getElementsByClassName("btAddTheme");
let btsCloseAddTheme = document.getElementsByClassName("btCloseAddTheme");

for (let cpt = 0; cpt < btsAddTheme.length; cpt++){
    btsAddTheme[cpt].addEventListener('click', function(){
        modalsAddTheme[cpt].style.display = "block"
    })
}

for (let cpt = 0; cpt < btsCloseAddTheme.length; cpt++){
    btsCloseAddTheme[cpt].addEventListener('click', function(){
        modalsAddTheme[cpt].style.display = "none"
    })
}