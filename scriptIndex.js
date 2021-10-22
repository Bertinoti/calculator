var result='';
var resToArr=[];
var total;
var holdTotal=0;
var displayRes= document.getElementById('result');
var divDisplay = document.getElementById('result');
var newP = document.createElement('p');

function addNumber(num){
    result+= num;
    showRes(num);
}

function showRes(res){
    newP.innerHTML += res;
    displayRes.appendChild(newP);
}

function addOperator(operator){
    showRes(operator);
    resToArr.push(result, operator);
    result='';
    return resToArr;
}

function equal(){
    ( holdTotal === 0) ? aux=0 : aux = holdTotal;
    resToArr.push(result);

    for (let index = 0 ; index < resToArr.length; index += 2 ) {
        (index === 0) ? paso = resToArr[index] : paso = total ;
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

    resToArr=[];
    result= holdTotal;
    total=null;
    newP.innerHTML += ` =  ${holdTotal}`;
}

function clearAll(){
    result='';
    resToArr=[];
    newP.innerHTML= '';
}


var cuerpoweb = document.body;
var primeravisualiza =document.getElementById("primero")
var segundavisualiza= document.getElementById("segunda")

function visualiza_primero() {
    document.getElementById('primero').style.visibility='visible';
    document.getElementById('primero').style.display='block';
    document.getElementById('segundo').style.visibility='hidden';
    document.getElementById('segundo').style.display='none';
    cuerpoweb.classList.toggle("oscuro");
};
function visualiza_segundo() {
    document.getElementById('segundo').style.visibility='visible';
    document.getElementById('segundo').style.display='block';
    document.getElementById('primero').style.visibility='hidden';
    document.getElementById('primero').style.display='none';
    cuerpoweb.classList.toggle("oscuro");
};

function convertSign() {
    if(result != '') {
        (Math.sign(result) == 1 || result == '0') ? result = -result : result = Math.abs(result);
    }
}
