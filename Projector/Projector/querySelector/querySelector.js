
//This is how to acces things in classes by id and by html
const getbyh2 = document.querySelector("h2");
console.log(getbyh2);
const getbyid = document.querySelector("#header");
console.log(getbyid);

const getbyclass = document.querySelector(".box");
console.log(getbyclass);

const getcontainer2 = document.querySelector("#container2");
console.log(getcontainer2);

const containbo = getcontainer2.querySelector(".box");
console.log(containbo);

//how to acces all things by using queryselctorall
const allthings=document.querySelectorAll(".box2");
console.log(allthings);