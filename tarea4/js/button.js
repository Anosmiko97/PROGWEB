const buttons = document.getElementsByClassName("btn");

for (let button of buttons) {
    button.addEventListener("click", function() {
        alert("No hace nada*");
    });
}