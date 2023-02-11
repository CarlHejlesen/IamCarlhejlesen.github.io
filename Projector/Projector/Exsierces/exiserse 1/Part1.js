/*
1)
* */
/*This is our DiceRoll*/
let diceRoll = [1, 6, 6, 2, 3, 4, 6];
/*
This Is our first function first excisersice,
We have implimeneted our is6 function in our get6v_1

* */
function get6v_1(diceRoll) { /* Function declaration and parameter(our array)*/
    let sixes = 0;
    diceRoll.forEach(element => {/*Here we make forloop that runs foreach(element)*/
        sixes += is6(element); /* sixes += function is6 this sends our element to be checked.
         if it is a 6, then if its a six it will be counted up*/
    });
    return sixes; /*This will then return how many sixes The array contains*/
}
/*
2)
This is our function that checks for the varibles v that parameter.$
Then it return 1 if is a 6 and 0 if not.
*/
function is6(v) {
    if (v === 6) {
        return 1;
    }
    return 0;
}

/*
This Is where We call our Function get6v_1 It will print 3:6
We give it diceRoll as parameter input
${function or variable calulation}
Must be in '' marks*/

//console.log(`${get6v_1(diceRoll)}:6`);

/*
3) gets6s_v3 fuction*/
const get6s_v3 = function (diceRoll, thecomparingfunction) {    /*This is a function with the parameters(Array, function)*/
    let dicenumber = 0;/* */
    diceRoll.forEach(element => {/*Same as before*/
        dicenumber += thecomparingfunction(element);/*Same as before but we use the parameter input as function is6*/
    });
    return dicenumber;
}
//is the same but diffrent names 4)
//
const find_dice_v1 = function (array, compare) {
    let dicenumber = 0;
    array.forEach(element => {
        dicenumber += compare(element);
    });
    return dicenumber;
}

find_dice_v1(diceRoll, is6); //function call

/**/

//This 5)

const islessThan4=function(variable){
    if(variable<=3){
        return 1;
    }
    else{
        return 0;
    }
}
console.log(`${find_dice_v1(diceRoll, is6)}:6`);
console.log(`${find_dice_v1(diceRoll, islessThan4)} :elements is less than 4`);
// 6)
let what=diceRoll.filter(dice=>dice==6).reduce((sum,dice)=>sum+dice,0);
console.log(`${what}::::`);
//It prints 18