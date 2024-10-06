/*
Script para hacer funcional
la barra de busqueda
*/

const input = document.querySelector('#search-button');
const defaultText = 'Buscar informacion';

/* Remover si esta clickeado */
input.addEventListener('focus', () => {
    if (input.value == defaultText) {
        input.value = '';
    } 
});

/* Cuando no esta enfocado poner texto */
input.addEventListener('blur', () => {
    if (input.value == '') {
        input.value = defaultText;
    } 
});
