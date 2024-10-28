const buttons = document.getElementsByClassName("button")
const output = document.querySelector("#output");
const history = document.querySelector("#history");
const showBtn = document.querySelector("#show-btn");
const list = document.querySelector("#list-cal");
let input = "";
let listCal = [];

// Calculadora
function calculate() {
    try {
        let cal = eval(operation);
        listCal.push(operation + " = " + cal);
        input = "";
        return cal;
    } catch {
        output.textContent = "SINTAX ERROR";
    }
}

function clear() {
    input = "";
    output.value = "";
}

function draw(btn) {
    console.log(btn);
    input += btn;
    output.value = input;
}

for (let btn of buttons) {
    btn.addEventListener("keydown", (event) => {
        console.log("log")
    });
}

// Historial del calculos
let show = false;
showBtn.addEventListener("click", () => {
    if (show === false) {
        if (listCal.length === 0) {
            alert("No hay nada que mostrar");
        } else {
            show = true
            history.style.opacity = "1";
            for (let i of listCal) {
                let div = document.createElement("p")
                div.textContent = i;
                list.appendChild(div);
            } 
        }
    } else {
        show = false
        history.style.opacity = "0";
        list.innerHTML = "";
    }
});

