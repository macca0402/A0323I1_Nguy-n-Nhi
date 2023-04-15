let num1=document.getElementById("number1").value;
let num2=document.getElementById("number2").value;
let KQ1,KQ2,KQ3,KQ4;
function action1() {
    KQ1=num1+num2;
    document.getElementById("result").innerText=KQ1;
}
function action2() {
    KQ2=num1-num2;
    document.getElementById("result").innerText=KQ2;
}
function action3() {
    KQ3=num1*num2;
    document.getElementById("result").innerText=KQ3;
}
function action4() {
    KQ4=num1/num2;
    document.getElementById("result").innerText=KQ4;
}