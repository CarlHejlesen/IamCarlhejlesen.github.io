let roll, elem, sourze; //Declares variables of unknown types
let rolls=[]; //Declares an array of unknown type
let allUrls=[]; //Declares an array of unknown type

const finalpath1 = "Terninger/Dice_"; //Declares a constant of unknown type
const finalpath2 = ".png";            //Declares a constant of unknown type


let firsturl= document.getElementById("pic1").src; //firsturl is now equal to the total path of pic1's source path
//Here we find index of where the path we are interested starts
let indexfind=firsturl.indexOf('Terninger'); //


//Here we cut the path, so we end with the realtive path: Terninger/Dice_1.png
let relative_path= firsturl.slice(indexfind);
//this will give us the direct path :D,   :http://localhost:63342/new%20try/Projecter/Yatzy/
let first_path=firsturl.slice(0, indexfind);

for(let i=1;i<13;i++){allUrls[i]=first_path+finalpath1+i+finalpath2;}



document.getElementById("mybut").onclick = function () {
    for (let i = 1; i < 7; i++) {
        roll = Math.floor((Math.random() * 6) + 1);
        rolls[i]=roll;
        elem = String("pic" + String(i));
        sourze = String("Terninger/Dice_" + String(roll) + ".png");

        document.getElementById(elem).src = sourze;
    }
}


document.getElementById("pic1").onclick = function (){
    var ses = document.getElementById("pic1").src;

    if(ses==="http://localhost:63342/new%20try/Projecter/Yatzy/Terninger/Dice_1.png"){
        document.getElementById("pic1").src = "Terninger/Dice_7.png";
    }
    else {
        // den printer http://localhost:63342/new%20try/Projecter/Yatzy/Terninger/Dice_5.png   Det betyder at sammenligningen forgår med alt for meget
        alert(allUrls[3]);
    }
    //document.getElementById("pic1").src = "http://localhost:63342/new%20try/Projecter/Yatzy/Terninger/Dice_5.png";
}