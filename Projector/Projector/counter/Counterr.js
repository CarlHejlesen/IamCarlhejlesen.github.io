


let a;


document.getElementById("but1").onclick = function (){
    a=document.getElementById("number").innerHTML;
    a=Number(a)
    a-=1;
    document.getElementById("number").innerHTML=a;

}
document.getElementById("but2").onclick = function (){

    document.getElementById("number").innerHTML="0";

}
document.getElementById("but3").onclick = function (){
    a=document.getElementById("number").innerHTML;
    a=Number(a)
    a+=1;
    document.getElementById("number").innerHTML=a;


}