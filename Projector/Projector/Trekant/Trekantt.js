let a;
let b;
let c;


document.getElementById("mybut").onclick = function () {
    a = document.getElementById("indputA").value;
    b = document.getElementById("indputB").value;
    a = Number(a);
    b = Number(b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("labelC").innerHTML = "Side C " + c ;
}

