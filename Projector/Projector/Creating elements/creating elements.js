

let input = "this is an element";

//here we link the button with an variable
const button =document.querySelector('.button');

//We link an variable to the location of where we want to create elements.
const focus_on_list  =document.querySelector('.list_for_containers ul');


button.onclick = function () {
  const newobject =document.createElement('li');
newobject.innerHTML=input;
focus_on_list.appendChild(newobject);
};




