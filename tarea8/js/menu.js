/*
Script para menu responsive
*/

const nav = document.querySelector('#nav');
const ham = document.querySelector("#ham");
const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector("#close");

openMenu.addEventListener("click", () => {
    ham.classList.add("visible");
})

closeMenu.addEventListener("click", () => {
    ham.classList.remove("visible");
})