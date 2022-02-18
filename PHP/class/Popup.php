<?php

class Popup
{
function modalUpdate(string $color, string $value, string $traitement, string $text){
    return '
    <div class="modal">
        <div class="modal-content '.$color.'">
            <div class="btClose">x</div>
            <p class="titleModal">'.$text.'</p>
            <form action="traitement/'.$traitement.'" enctype="multipart/form-data" method="post">
                <input type="text" name="newNomTheme" value="'.$value.'">
                <input type="hidden" name="oldNomTheme" value="'.$value.'">
                <button class="'.$color.'" type="submit">Modifier</button>
            </form>
        </div>
    </div>';
}
}