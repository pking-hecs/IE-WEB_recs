const display = document.getElementById("display");
let equation = "";

function appendToDisplay(input) {
    display.value += input;
    equation += input;
}

function back() {
    display.value = display.value.slice(0, -1);
    equation = equation.slice(0, -1);
}

function appendToDisplayOp(input) {
    display.value = "";
    equation += input;
}

function appendToDisplayLog() {
    try {
        const currentValue = display.value;
        if (currentValue === "") return;
        const newValue = Math.log10(eval(currentValue));
        equation = equation.slice(0, -currentValue.length);
        equation += newValue;
        display.value = newValue;
    }
    catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
    equation = "";
}

function calculate() {
    try {
        display.value = eval(equation);
    }
    catch (error) {
        display.value = "Error";
    }
}

function reverseDisplay() {
    try {
        display.value = eval(display.value) * -1;
    }
    catch (error) {
        display.value = "Error";
    }
}

function calculatePercent() {
    try {
        display.value = eval(display.value) / 100;
    }
    catch (error) {
        display.value = "Error";
    }
}