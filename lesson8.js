function TinhToan(){
    var a = parseFloat(document.getElementById("txtA").value);
    var b = parseFloat(document.getElementById("txtB").value);
    var pt=document.getElementById("PhepToan").value;
    var kq;
    if (pt == "+") {
        kq = a + b;
    } else if (pt == "-") {
        kq = a - b;
    } else if (pt == "*") {
        kq = a * b;
    } else if(pt == "/") {
        if (b === 0) {
            alert("Không thể chia cho 0!");
            return;
        }
        kq = a / b;
    }
    document.getElementById("txtKetQua").value=kq;
}
let displayValue = '';
let memoryValue = 0;
let operationValue = null;
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    operationValue = null;
    firstOperand = null;
    updateDisplay();
}

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDot() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function operation(operator) {
    if (displayValue === '') return;

    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
    } else if (operationValue) {
        firstOperand = calculate();
    }
    
    operationValue = operator;
    displayValue = '';
}

function calculate() {
    let secondOperand = parseFloat(displayValue);
    let result = 0;

    switch (operationValue) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                alert("Không thể chia cho 0");
                clearDisplay();
                return;
            }
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    displayValue = result.toString();
    firstOperand = null;
    operationValue = null;
    updateDisplay();
    return result;
}

function memoryPlus() {
    memoryValue = parseFloat(displayValue) || 0;
}

