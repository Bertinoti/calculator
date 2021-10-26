//Global Variables
var result='';
var total;
var holdTotal=0;
var resToArr=[];
var historic=[];
var cuerpoweb = document.body;
var displayRes= document.getElementById('result');
var displayOperation = document.getElementById('showOperation');
var pUno = document.createElement('div');
var pDos= document.createElement('div');
var contHist= historic.length
var historicResult= historic[contHist-1]
var historico=document.getElementById("historico")


// Add number and call function to display
function addNumber(num){
    result+= num;
    showRes(num);
}

// functions do display inputs
//display one number 
function showNumber (){
    pUno.innerHTML = result;
    displayRes.appendChild(pUno);
}

//display numbers and operators
function showNumberUp(){
    if( contHist > 3){
        pDos.innerHTML = historicResult[3]
        displayOperation.appendChild(pDos);
        displayRes=""
    }else{
        pUno.innerHTML= ''
        if (contHist < 2) {
            pDos.innerHTML = `${resToArr[0]} ${resToArr[1]} `;
            displayOperation.appendChild(pDos);
        }else{
            pDos.innerHTML = `${historicResult[0]} ${historicResult[1]} ${historicResult[2]} `;
            displayOperation.appendChild(pDos);
        }
    }
}

// display result when add operations
function showResult (){
    pDos.innerHTML = historic[0][3]
    displayOperation.appendChild(pDos);
    pUno.innerHTML = ''
    displayRes.appendChild(pUno);
}

// Display results when press equal
function showResultEqual(){
    pDos= historicResult[4]
    displayOperation.appendChild(pDos)
}


//choose the right function to call
function showRes(res){
    if( res == '+' || res == '-' || res == '*' || res == '%' || res == '/' || res == '+-'){
        showNumberUp();
    }else
    if (res === '=') {
        showResult();
    }else{
        showNumber();
    }
}

function isOperator(value){
    const operators= ['+', '-', '*', '/', '%']
    return operators.includes(value)
}

//add operator
/*function addOperator(operator){
    if( resToArr[resToArr.length-1] ){}
    if (resToArr.length >= 2 ) {
        equal()
        resToArr.push(result, operator);
        showRes(operator);
        resToArr.push(result, operator);
    }else{
        resToArr.push(result, operator);
        showRes(operator);
        result='';
        }
    return resToArr;
}*/

function addOperator(operator){
    if( result !== ''){
        resToArr.push(result)
        result=''
    }
    if(resToArr.length <= 2) {
        resToArr.push(operator);
        equal()
        //resToArr.push(result, operator);
        showRes(operator);
    }else
    if (resToArr.length >= 3) {
    //console.log(resToArr.length >= 3)
        if (isOperator( resToArr[resToArr.length-1])) {
        //console.log('before caso 2 operadores',resToArr)
        delete resToArr[1]
        //console.log('AFTER caso 2 operadores',resToArr)
        resToArr[1] = operator;
        delete resToArr[2]
        resToArr = resToArr.filter((v)=> {if (v && v != '') return v } )
        console.log(resToArr)
        showRes(operator)
    }else{
        //console.log(resToArr)
        equal()
        showRes(operator);
        //console.log(resToArr)
        //console.log('caso 1 operadores con 2 numeros',resToArr)
        }
    }
    return resToArr;
}

// function to calculate each operation
// proccess all operation and return result
// hold each result until finished all operation
// add in Historic array all operation and result

function equal(){
    if(result == '') {
        return false;
    }

    ( holdTotal === 0) ? aux=0 : aux = holdTotal;
    resToArr.push(result);

    if(resToArr.length < 3) {
        return false;
    }

    for (let index = 0 ; index < resToArr.length; index += 2 ) {
        (index === 0) ? paso = resToArr[index] : paso = total;
        switch (resToArr[index+1]){
            case '+':
                total= parseFloat(paso)  + parseFloat(resToArr[index+2]);
                aux += total;
                break;
            case '-':
                total= parseFloat(paso)  - parseFloat(resToArr[index+2]);
                aux += total;
                break;
            case '*':
                total= parseFloat(paso)  * parseFloat(resToArr[index+2]);
                aux += total;
                break;
            case '/':
                total= parseFloat(paso)  / parseFloat(resToArr[index+2]);
                aux += total;
                break;
            case '%':
                total= parseFloat(paso)  % parseFloat(resToArr[index+2]);
                aux += total;
                break;
        }
        holdTotal=total;
        aux=0;
    }
    resToArr.push(holdTotal)
    historic.push(resToArr);
    showHistoric()
    
    resToArr=[];
    result= holdTotal;
    total=null;
}

//convert the Number sign
function convertSign() {
    if(result != '') {
        (Math.sign(result) == 1 || result == '0') ? result = -result : result = Math.abs(result);
        pUno.innerHTML= result;
    }
}

// clean all arrays except Historic
function clearAll(){
    result='';
    holdTotal=0
    resToArr=[];
    pUno.innerHTML= '';
    pDos.innerHTML= '';
}

//change toggle button dark mode
function visualiza_primero() {
    document.getElementById('primero').style.visibility='visible';
    document.getElementById('primero').style.display='block';
    document.getElementById('segundo').style.visibility='hidden';
    document.getElementById('segundo').style.display='none';
    cuerpoweb.classList.toggle("oscuro");
};

//change to Ligth mode
function visualiza_segundo() {
    document.getElementById('segundo').style.visibility='visible';
    document.getElementById('segundo').style.display='block';
    document.getElementById('primero').style.visibility='hidden';
    document.getElementById('primero').style.display='none';
    cuerpoweb.classList.toggle("oscuro");
};

//Display Historic
function oculto() {
    var desaparecer = document.getElementById("myDIV");
    if (desaparecer.style.display === "none") {
        showHistoric()
        desaparecer.style.display = "block";
    } else {
        desaparecer.style.display = "none";
    }
}

//Print array Historic
function showHistoric(){
    resetHistorichtml()

    let reverseHistoric= historic.reverse();
    reverseHistoric.forEach(element => {
        let itemP=document.createElement("p")
        itemP.innerHTML= `${element[0]} ${element[1]} ${element[2]} = ${element[3]}`
        historico.appendChild(itemP)
    });
}

//clear display Historic
function resetHistorichtml(){
    while(historico.firstChild){
    historico.removeChild(historico.lastChild)}
}
