var result='';
var resToArr=[];
var total;
var holdTotal=0;
var displayRes= document.getElementById('result');
var displayOperation = document.getElementById('showOperation');
var newP = document.createElement('p');
var dosPs= document.createElement('p');
var historic=[]

function addNumber(num){
    result+= num;
    showRes(num);
}

function showNUmber (){
    newP.innerHTML = result;
    displayRes.appendChild(newP);
}

function showNumberUp(){
    dosPs.innerHTML=''
    contHistoric= historic.length
    console.log(contHistoric)
    if (contHistoric < 2) {
        dosPs.innerHTML = `${resToArr[0]} ${resToArr[1]} `;
        console.log(dosPs)
    displayOperation.appendChild(dosPs)
    }else{
        dosPs.innerHTML = `${historic[0]} ${historic[1]} ${historic[2]} `;
        console.log(dosPs)
        displayOperation.appendChild(dosPs)
    }
}

function showResult (){
    
    dosPs.innerHTML = `${historic[0]} ${historic[1]} ${historic[2]} `;
    displayOperation.appendChild(dosPs)

    newP.innerHTML = `${historic[3]} `;
    displayOperation.appendChild(newP)
}

function showRes(res){
    if( res == '+' || res == '-' || res == '*' || res == '%' || res == '/' || res == '+-'){
        showNumberUp()
    }else
    if (res === '=') {
        showResult()
    }else{
        showNUmber()
    }

}

function addOperator(operator){
    if (resToArr.length >= 3 ) {
        console.log(resToArr.length)
        equal()

        
    }else{
        resToArr.push(result, operator);
        showRes(operator);
        result='';
    }
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
    resToArr.push(holdTotal)
    historic.push(resToArr);
    console.log(historic)

    resToArr=[];
    result= holdTotal;
    total=null;
    newP.innerHTML += ` =  ${holdTotal}`;
}

function clearAll(){
    result='';
    resToArr=[];
    newP.innerHTML= '';
    dosPs.innerHTML= '';
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
        newP.innerHTML= result;
    }
}
