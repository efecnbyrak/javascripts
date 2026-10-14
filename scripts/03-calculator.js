let currentNumber = "0";
let firstNumber = null;
let operator = null;

function inputNumber(number) {
    if (currentNumber === "0") {
        currentNumber = String(number);
    } else {
        currentNumber += String(number);
    }

    document.getElementById("display").textContent = currentNumber;
}