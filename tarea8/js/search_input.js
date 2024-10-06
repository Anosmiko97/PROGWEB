/*
Script para hacer funcional
la barra de busqueda
*/

const inputMobile = document.querySelector('#search-button-m');
const inputDesktop = document.querySelector('#search-button-d');
const defaultText = 'Buscar informacion';

/* Desktop */
inputDesktop.addEventListener('focus', () => {
    if (inputDesktop.value == defaultText) {
        inputDesktop.value = '';
    } 
});
inputDesktop.addEventListener('blur', () => {
    if (inputDesktop.value == '') {
        inputDesktop.value = defaultText;
    } 
});

/* Desktop */
inputMobile.addEventListener('focus', () => {
    if (inputMobile.value == defaultText) {
        inputMobile.value = '';
    } 
});
inputMobile.addEventListener('blur', () => {
    if (inputMobile.value == '') {
        inputMobile.value = defaultText;
    } 
});

