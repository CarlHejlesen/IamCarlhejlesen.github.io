





let random;


document.getElementById("mybut").onclick= function (){
    random=Math.floor(Math.random()*6)+1;
    document.getElementById("label1").innerHTML= random;
    random=Math.floor(Math.random()*6)+1;
    document.getElementById("label2").innerHTML= random;
    random=Math.floor(Math.random()*6)+1;
    document.getElementById("label3").innerHTML= random;
    random=Math.floor(Math.random()*6)+1;
    document.getElementById("label4").innerHTML= random;
    random=Math.floor(Math.random()*6)+1;
    document.getElementById("label5").innerHTML= random;
    random=Math.floor(Math.random()*6)+1;
    document.getElementById("label6").innerHTML= random;


}