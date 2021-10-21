var result='';

function addNumber(num){
    result+= num;
    console.log(result)
}

resToArr=[];

function addOperator(operator){
    resToArr.push(result, operator);
    console.log(resToArr)
    result='';
    return resToArr;
}

var total;
var holdTotal=0;

function equal(){
    ( holdTotal === 0) ? aux=0 : aux = holdTotal;
    resToArr.push(result)
    console.log(resToArr)
    
    for (let index = 0 ; index < resToArr.length; index += 2 ) {
        (index === 0) ? paso = resToArr[index] : paso = total ;
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
        holdTotal+=aux;
        aux=0;
        console.log(index);
    }
    resToArr=[];
    result= holdTotal;
    console.log(total)
    total=null;
    //total= parseInt(resToArr[0]+resToArr[1]+resToArr[2]);
}

function clearAll(){
    result=''
    resToArr=[]

}
