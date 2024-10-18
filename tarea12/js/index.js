const redButton = document.querySelector('#red');
const blueButton = document.querySelector('#blue');
const greenButton = document.querySelector('#green');
const mainButton = document.querySelector('.main-btn');
const title = document.querySelector('#title');
let modeBg = 'white';

function switchBg(bgColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = 'white';
    title.style.color = 'white';
}

function switchMode(bgColor, color, text, btnBgColor, btnColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = color;
    mainButton.textContent = text;
    mainButton.style.backgroundColor = btnBgColor;
    mainButton.style.color = btnColor;
}

redButton.addEventListener('click', () => switchBg('red'));
blueButton.addEventListener('click', () => switchBg('blue'));
greenButton.addEventListener('click', () => switchBg('green'));
mainButton.addEventListener('click', () => {
    if (modeBg == 'white') {
        switchBg('rgb(27, 27, 27)', 'white',
             'Modo claro', 'white', 'black');
        modeBg = 'black';
        title.style.color = 'white';
    } else if (modeBg == 'black') {
        switchBg('white', 'black',
             'Modo oscuro', 'black', 'white');
        title.style.color = 'black';
        modeBg = 'white';
    }
});



