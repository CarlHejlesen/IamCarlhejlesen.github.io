let knapcounter=1;



document.getElementById("dive").innerHTML += '<button id="knap'+knapcounter+'" type="button">click</button>';
document.getElementById("dive").innerHTML += '<label id="labell'+knapcounter+'">true</label>';
let lab=document.getElementById("labell1");
let knap_true_or_false = true;
const knap = document.getElementById("knap1");
knap.addEventListener("click", function () {
    if (knap_true_or_false) {
        console.log("clicked clicked");
        knap_true_or_false = false;
        lab.innerHTML="false";
    } else {
        console.log("knap 2");
        knap_true_or_false = true;
        lab.innerHTML="true";
    }
});
let create =function(){
    knapcounter+=1;
    document.getElementById("dive").innerHTML += '<button id="knap'+knapcounter+'" type="button">click</button>';

}

knapcounter+=1;
document.getElementById("dive").innerHTML += '<button id="knap'+knapcounter+'" type="button">first</button>';

let q=document.getElementById('knap'+knapcounter);








