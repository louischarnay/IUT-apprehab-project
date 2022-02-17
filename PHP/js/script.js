const liens = document.getElementsByClassName('divRadioLien')
const textes = document.getElementsByClassName('divRadioTexte')
const images = document.getElementsByClassName('divRadioImage')

const inputLiens = document.getElementsByClassName('divInputLien')
const inputTextes = document.getElementsByClassName('divInputTexte')
const inputImages = document.getElementsByClassName('divInputImage')

const radioImage = document.querySelectorAll('#imageRadio')
const radioLien = document.querySelectorAll('#lienRadio')
const radioTexte = document.querySelectorAll('#texteRadio')

for (let cpt = 0; cpt < liens.length; cpt++){
    liens[cpt].addEventListener('click', event =>{
        inputLiens[cpt].classList.remove('hidden');
        inputTextes[cpt].classList.add('hidden');
        inputImages[cpt].classList.add('hidden');
        radioTexte[cpt].removeAttribute('checked')
        radioImage[cpt].removeAttribute('checked')
        radioLien[cpt].setAttribute('checked', 'true')
    })

    textes[cpt].addEventListener('click', event =>{
        inputTextes[cpt].classList.remove('hidden');
        inputLiens[cpt].classList.add('hidden');
        inputImages[cpt].classList.add('hidden');
        radioLien[cpt].removeAttribute('checked')
        radioImage[cpt].removeAttribute('checked')
        radioTexte[cpt].setAttribute('checked', 'true')
    })

    images[cpt].addEventListener('click', event =>{
        inputImages[cpt].classList.remove('hidden');
        inputTextes[cpt].classList.add('hidden');
        inputLiens[cpt].classList.add('hidden');
        radioTexte[cpt].removeAttribute('checked')
        radioLien[cpt].removeAttribute('checked')
        radioImage[cpt].setAttribute('checked', 'true')
    })
}

