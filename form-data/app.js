document.getElementById('agree').addEventListener('click',function(){
    document.getElementById('field').toggleAttribute('disabled');
});
function readData(){
    var form=[];
    var a=document.getElementById('form')
    for(var i=0;i<a.length;i++){
        var item=a[i].value;
        form.push(item);
        document.write(item+"<br>")
    }
}

