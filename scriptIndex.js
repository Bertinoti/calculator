const OPERATORS = ["*", "/", "+", "-"];
const SCREEN_OPERATION = document.getElementById('screenOperation');
const SCREEN_RESULT = document.getElementById('screenResult');

let numberCha = '';
let arrEntry = [];
let historic = [];
let holdTotal = 0;

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
    if(numberCha !== '') arrEntry.push(numberCha);

    if(arrEntry.length > 2) {
        equal();
        clearAll();
    }
}

function equal() {
    (holdTotal === 0) ? aux = 0 : aux = holdTotal;

    for (let index = 0 ; index < arrEntry.length - 2; index += 2 ) {
        (index === 0) ? paso = arrEntry[index] : paso = total;
        total = calculate(parseFloat(paso), parseFloat(arrEntry[index + 2]), arrEntry[index + 1]);
        holdTotal=total;
        historic.push([paso, arrEntry[index + 1], arrEntry[index + 2], holdTotal]);
        aux=0;
    }
}

function convertSign() {
    if(numberCha != '') {
        (Math.sign(numberCha) == 1 || numberCha == '0') ? numberCha = -numberCha : numberCha = Math.abs(numberCha);
        SCREEN_OPERATION.innerHTML= numberCha;
    }
}

function clearAll() {
    numberCha = '';
    holdTotal = 0;
    arrEntry = [];
}

// let countNumbers = arrEntry.reduce((count,value) =>{ if(!isNaN(value)) return count+1; else return count; },0);
// let countOperators = arrEntry.reduce((count,value) =>{ if(isOperator(value)) return count+1; else return count; },0);