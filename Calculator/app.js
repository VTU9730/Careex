var a=document.getElementsByClassName('button');
var fina='';
function getValue(value){
    // fina=String(fina)+String(value);
    fina=fina+value;
    document.getElementById('para').innerHTML=fina;
    operation(fina);
    
}
function operation(input){
    var output=eval(input);
    document.getElementById('equal').addEventListener('click',function(){
        document.getElementById('para').innerHTML=output;
        fina=output;
    })  
    return fina;
}
function operator(operand){
    fina=fina+operand;
    document.getElementById('para').innerHTML=fina;

}
function clearPara(){
    document.getElementById('para').innerHTML='';
    fina='';
}
function clearLast(){
    var para=fina.split('');
    var removeLast=para.pop();
    var madhu=para.join('')
    document.getElementById('para').innerHTML=madhu;
    fina=madhu;
}
