const list = document.querySelector('#container ul');

function textBox(numberx, numbery) {
    numbery = Number(numbery) + 1;
    for (let b = 1; b < numbery; b++) {
        const newobject = document.createElement('li');
        list.appendChild(newobject);

        for (let i = 1; i <= numberx; i++) {
            newobject.innerHTML += '<input type="text" id="MytxBox" name="">';
        }
        newobject.innerHTML += '<button class="buttonn" >Remove</button>'
        //list.innerHTML +='<br/>';
    }

    const close = document.querySelectorAll('.buttonn');
    let num = close.length;
    for (let i = 0; i < num; i++) {
        close[i].addEventListener('click', function () {
            close[i].parentElement.remove();
        })
    }
}

document.getElementById("button1").onclick = function () {
    let numberx = document.getElementById("times_x").value;
    let numbery = document.getElementById("times_y").value;
    textBox(numberx, numbery);
}


