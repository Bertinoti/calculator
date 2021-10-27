const OPERATORS = ["*", "/", "+", "-"];
const SCREEN_OPERATION = document.getElementById('screenOperation');
const SCREEN_RESULT = document.getElementById('screenResult');

let numberCha = '';
let arrEntry = [];
let historic = [];

function calculate(left, right, operator) {
    switch (operator) {
        case "*": {
            return left * right;
        }
        case "/": {
            return left / right;
        }
        case "+": {
            return left + right;
        }
        case "-": {
            return left - right;
        }
    }
}

// Add number and call function to display
function addNumber(num){
    numberCha += num;
    saveOperation();
}

function isOperator(value){
    return OPERATORS.includes(value);
}

function addOperator(operator) {
    if(arrEntry.length > 1) {
        isDuplicatedOperator(operator);
    } else {
        arrEntry.push(numberCha,operator);
        numberCha = '';
    }

    saveOperation();
}

function isDuplicatedOperator(operator) {
    if(isOperator(arrEntry[arrEntry.length - 1]) && numberCha === '') {
        arrEntry[arrEntry.length - 1] = operator;
    } else if(numberCha !== ''){
        arrEntry.push(numberCha, operator);
        numberCha = '';
    }
}

function saveOperation() {
    if(arrEntry.length === 2) {
        if(numberCha !== '') {
            arrEntry.push(numberCha);
        }
        if(arrEntry.length === 3) {
            equal();
        }
    }
}

function equal() {
    const TOTAL = calculate(parseFloat(arrEntry[0]), parseFloat(arrEntry[2]), arrEntry[1]);
    historic.push(arrEntry.concat([TOTAL]));
    arrEntry = [];
    numberCha = TOTAL;
}

function convertSign() {
    if(numberCha != '') {
        (Math.sign(numberCha) == 1 || numberCha == '0') ? numberCha = -numberCha : numberCha = Math.abs(numberCha);
        SCREEN_OPERATION.innerHTML= numberCha;
    }
}

function clearAll() {
    numberCha = '';
    arrEntry = [];
}

// let countNumbers = arrEntry.reduce((count,value) =>{ if(!isNaN(value)) return count+1; else return count; },0);
// let countOperators = arrEntry.reduce((count,value) =>{ if(isOperator(value)) return count+1; else return count; },0);