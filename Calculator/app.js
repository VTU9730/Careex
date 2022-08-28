var a=document.getElementsByClassName('button');
var fina='';
function getValue(value){
    fina=String(fina)+String(value);
    document.getElementById('para').innerHTML=fina;
    operation(fina);
    
}
function operation(input){
    var output=eval(input);
    document.getElementById('equal').addEventListener('click',function(){
        document.getElementById('para').innerHTML=output;
    }) 
}
function clearPara(){
    document.getElementById('para').innerHTML='';
    fina='';
}
function clearLast(){
    // console.log(fina);
    var para=fina.split('');
    // console.log(para);
    var removeLast=para.pop();
    // console.log(removeLast);
    var madhu=para.join('')
    // console.log(fina);
    // console.log(para);
    document.getElementById('para').innerHTML=madhu;
    fina=madhu;
}
