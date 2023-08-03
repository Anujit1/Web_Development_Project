let currentResult = '';

function appendToResult(value) {
    currentResult += value;
    updateDisplay();
}

function clearResult() {
    currentResult = '';
    updateDisplay();
}

function removeLastChar() {
    currentResult = currentResult.slice(0, -1);
    updateDisplay();
}

function performOperation(operator) {
    currentResult += ' ' + operator + ' ';
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(currentResult);
        currentResult = result.toString();
        updateDisplay();
    } catch (error) {
        currentResult = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    const displayElement = document.getElementById('result');
    displayElement.value = currentResult;
}
