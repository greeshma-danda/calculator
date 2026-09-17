
let display = document.getElementById("t1");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {

    try {

        let expression = display.value;

        expression = expression.replace(/%/g, "/100");

        display.value = eval(expression);

    } catch (error) {

        display.value = "Error";

    }
}

