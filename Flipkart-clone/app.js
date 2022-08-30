// Login button over effect
document.getElementById('login-button').addEventListener('mouseover',mouseOver)   
function mouseOver(){
    document.getElementById('login-hover').style.visibility="visible";
}
document.getElementById('login-hover').addEventListener('mouseover',mouseOver)   
function mouseOver(){
    document.getElementById('login-hover').style.visibility="visible";
}
document.getElementById('login-hover').addEventListener('mouseout',mouseDown)
function mouseDown(){
    document.getElementById('login-hover').style.visibility="hidden";
}
document.getElementById('login-button').addEventListener('mouseout',mouseDown)
function mouseDown(){
    document.getElementById('login-hover').style.visibility="hidden";
}
// ----------------------------------------------------------------
// reading form data
function registerData(){
    a=document.getElementsByTagName('input');
        var userName=a[1].value;
        var password=a[2].value;
        return userName,password;
}

