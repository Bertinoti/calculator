var result='';

function addNumber(num){
    result+= num;
    showRes(num)
    console.log('addNumber',  result)
}

var divDisplay = document.getElementById('result');
var newP = document.createElement('p')
function showRes(res){
    //newP.innerHTML= ''
    newP.innerHTML += res;
    displayRes.appendChild(newP)
}

resToArr=[];

function addOperator(operator){
    showRes(operator)
    resToArr.push(result, operator);
    console.log('addOperator', resToArr)
    result='';
    console.log('endop', result)
    return resToArr;
}

var total;
var holdTotal=0;
var displayRes= document.getElementById('result')
function equal(){
    ( holdTotal === 0) ? aux=0 : aux = holdTotal;
    resToArr.push(result)
    console.log('equal holdTotal', holdTotal)
    console.log('equal result before', result)
    console.log('array before op', resToArr)
    console.log('equal aux', aux)
    
    for (let index = 0 ; index < resToArr.length; index += 2 ) {
        (index === 0) ? paso = resToArr[index] : paso = total ;
        console.log('inside For ', paso,total )
        switch (resToArr[index+1]){
            case '+':
                total= parseFloat(paso)  + parseFloat(resToArr[index+2])
                aux += total
                break;
            case '-':
                total= parseFloat(paso)  - parseFloat(resToArr[index+2])
                aux += total
                break;
            case '*':
                console.log(paso)
                total= parseFloat(paso)  * parseFloat(resToArr[index+2])
                aux += total
                break;
            case '/':
                total= parseFloat(paso)  / parseFloat(resToArr[index+2])
                aux += total
                break;
            case '%':
                total= parseFloat(paso)  % parseFloat(resToArr[index+2])
                aux += total
                break;
        }
        console.log('holdTotal end ',  holdTotal)
        console.log('aux end', aux)
        holdTotal=total;
        aux=0;
        //console.log(index);
    }

    resToArr=[];
    result= holdTotal;
    console.log('result end==', result)
    console.log('total end ==', total)
    console.log('holdTotal end ==', holdTotal)
    console.log('array ', resToArr)
    total=null;
    newP.innerHTML += ` =  ${holdTotal}`
    //total= parseInt(resToArr[0]+resToArr[1]+resToArr[2]);
}

function clearAll(){
    result=''
    resToArr=[]
    newP.innerHTML= ''

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
