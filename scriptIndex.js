var result='';
var total;
var holdTotal=0;
var resToArr=[];
var historic=[];
var cuerpoweb = document.body;
var displayRes= document.getElementById('result');
var displayOperation = document.getElementById('showOperation');
//var primeravisualiza =document.getElementById("primero");
//var segundavisualiza= document.getElementById("segunda");
var pUno = document.createElement('div');
var pDos= document.createElement('div');
var contHist= historic.length
var historicResult= historic[contHist-1]
var disponibleOpe = false;
var historico=document.getElementById("historico")



function addNumber(num){
        result+= num;
        console.log(result)
        showRes(num);
        disponibleOpe = true;
}

function showNumber (){
    pUno.innerHTML = result;
    displayRes.appendChild(pUno);
}

function showNumberUp(){
    //console.log(contHist)
    if( contHist > 3){
        pDos.innerHTML = ` ${historicResult[3]} `;
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

function showResult (){
    contHist= historic.length
    historicResult= historic[contHist-1]
    pDos.innerHTML =`${historicResult[0]} ${historicResult[1]} ${historicResult[2]} =` ;
    displayOperation.appendChild(pDos);

    pUno.innerHTML = `${historicResult[3]} `;
    displayRes.appendChild(pUno);
}

function showResultEqual(){
    pDos= historicResult[4]
    displayOperation.appendChild(pDos)
}

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

function mostrar (){
    showHistoric()
    cont = historic.length;
    console.log(historic[cont - 1])
}
function addOperator(operator){
    if(disponibleOpe) {
        if (resToArr.length >= 2 ) {
            //console.log(resToArr.length)
            equal()
            resToArr.push(result, operator);
            showRes(operator);
            result='';
            disponibleOpe = false
        }else{
            resToArr.push(result, operator);
            showRes(operator);
            result='';
            disponibleOpe = false
            }
    }
    
    return resToArr;

    // if (resToArr.length >= 2 ) {
    //     //console.log(resToArr.length)
    //     equal()
    //     resToArr.push(result, operator);
    //     showRes(operator);
    //     result='';
    //     mostrar()
    // }else{
    //     //Comprovar si resultado es un numero
    //     if( !isNaN( result.slice(0, -1) )  && (result !== '' || ) {
    //         resToArr.push(result, operator);
    //         showRes(operator);
    //         result='';
    //         mostrar()
    //     } else {
    //         resToArr.push(0, operator);
    //         mostrar()
    //     }
    //}
    //return resToArr;
}

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
    console.log(historic)

    mostrar()

    resToArr=[];
    result= holdTotal;
    total=null;
    disponibleOpe = true
    //newP.innerHTML += ` =  ${holdTotal}`;
}

function clearAll(){
    result='';
    resToArr=[];
    pUno.innerHTML= '';
    pDos.innerHTML= '';
}

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
        pUno.innerHTML= result;
    }
}

function oculto() {
    var desaparecer = document.getElementById("myDIV");
    if (desaparecer.style.display === "none") {
        showHistoric()
        desaparecer.style.display = "block";
    } else {
        desaparecer.style.display = "none";
    }
}


function showHistoric(){
    resetHistorichtml()
historic.forEach(element => {
    let itemP=document.createElement("p")

    itemP.innerHTML= `${element[0]} ${element[1]} ${element[2]} = ${element[3]}`
    historico.appendChild(itemP)


    console.log(itemP.innerHTML)
});
}

function resetHistorichtml(){
   while(historico.firstChild){
    historico.removeChild(historico.lastChild)}
   }
