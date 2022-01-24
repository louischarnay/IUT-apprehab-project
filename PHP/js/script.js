const lien = document.querySelector('#divRadioLien');
const texte = document.querySelector('#divRadioTexte');
const image = document.querySelector('#divRadioImage');

const inputLien = document.querySelector('#divInputLien');
const inputTexte = document.querySelector('#divInputTexte');
const inputImage = document.querySelector('#divInputImage');

lien.onclick = function(){
    
    inputLien.classList.remove('hidden');
    inputTexte.classList.add('hidden');
    inputImage.classList.add('hidden');
}

texte.onclick = function(){
    inputTexte.classList.remove('hidden');
    inputLien.classList.add('hidden');
    inputImage.classList.add('hidden');
}

image.onclick = function(){
    inputImage.classList.remove('hidden');
    inputTexte.classList.add('hidden');
    inputLien.classList.add('hidden');
}