const OPERATORS = ["*", "/", "+", "-"];
const SCREEN_OPERATION = document.getElementById('screenOperation');
const SCREEN_RESULT = document.getElementById('screenResult');
const ADD_DIV = document.createElement('div')


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
    showNumber(num)
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
    //show display operation
    contarray= arrEntry.length
    //console.log('array com num e operation', arrEntry[contarray-2], arrEntry[contarray-1])
    showOperations(arrEntry[contarray-2], arrEntry[contarray-1])

    saveOperation();
}

function isDuplicatedOperator(operator) {
    if(isOperator(arrEntry[arrEntry.length - 1]) && numberCha === '') {
        arrEntry[arrEntry.length - 1] = operator;
    }else
    if(numberCha !== ''){
        //console.log('arraynumbercha && operator',numberCha, operator )
        if(arrEntry.length >= 4){
            equal()
            arrEntry.push(numberCha, operator);
            numberCha = '';
            showOperations(numberCha, operator)
        }
    }   
    // show operations com mais arrays
    //console.log('historic', historic)
    //console.log('lastHistoric', lastHistoric)
    contHistoric= historic.length
    lastHistoric= historic[contHistoric-1]
    showOperations(lastHistoric[0], lastHistoric[1])
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
    (holdTotal === 0) ? aux = 0 : aux = holdTotal;

    for (let index = 0 ; index < arrEntry.length - 2; index += 2 ) {
        (index === 0) ? paso = arrEntry[index] : paso = total;
        total = calculate(parseFloat(paso), parseFloat(arrEntry[index + 2]), arrEntry[index + 1]);
        holdTotal=total;
        historic.push([paso, arrEntry[index + 1], arrEntry[index + 2], holdTotal]);
        aux=0;
    }
    showResult(holdTotal)
    console.log('este es holdtotal', holdTotal);
    console.log('este es historico', historic);

    /*
    const TOTAL = calculate(parseFloat(arrEntry[0]), parseFloat(arrEntry[2]), arrEntry[1]);
    historic.push(arrEntry.concat([TOTAL]));
    arrEntry = [];
    numberCha = TOTAL;
    */
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

function showOperations(num, operador){
    ADD_DIV.innerHTML = num + operador;
    SCREEN_OPERATION.appendChild(ADD_DIV)
}

function showNumber(num){
    ADD_DIV.innerHTML= num;
    SCREEN_RESULT.appendChild(ADD_DIV)
}

function showResult(num){
    ADD_DIV.innerHTML = num;
    SCREEN_OPERATION.appendChild(ADD_DIV)
}



// let countNumbers = arrEntry.reduce((count,value) =>{ if(!isNaN(value)) return count+1; else return count; },0);
// let countOperators = arrEntry.reduce((count,value) =>{ if(isOperator(value)) return count+1; else return count; },0);