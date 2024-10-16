const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const operator = document.querySelector("#operator");
const result = document.querySelector("#result"); 
const calculateButton = document.querySelector("#calculate");
const deleteButton = document.querySelector("#delete");

function calculate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "SINTAX ERROR";
        }
        return num1 / num1;
    } else if (operator === "*") {
        return num1 * num1;
    }
}

calculateButton.addEventListener("click", () => {
    try {
        let num = calculate(parseInt(num1.value), 
        parseInt(num2.value), operator.value); 
        result.textContent = num;
        console.log(num);
    } catch (error) {
        result.textContent = "SINTAX ERROR";
        console.log("SINTAX ERROR");
    }
});

deleteButton.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    operator.value = "";
    result.textContent = "";
});

