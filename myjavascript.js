
//let a_oldal = 20, b_oldal = 55;
let a_oldal = Number(prompt("Kérem az 'a' oldal hosszát: ", ""));
let b_oldal = Number(prompt("Kérem az 'b' oldal hosszát: ", ""));

let kerulet = 2 * (a_oldal + b_oldal);
let terulet = a_oldal * b_oldal;
let arany = 400 / (a_oldal + b_oldal);
let a_oldal_arany = a_oldal * arany;
let b_oldal_arany = b_oldal * arany;
let a_left = 100 + (a_oldal_arany / 2) - 10;
let a_top = 100 + (b_oldal_arany) + 15;
let b_left = 100 + a_oldal_arany + 20;
let b_top = 100 + (b_oldal_arany / 2) - 10;

let szamolas_bal = b_left + 50

a_oldal_arany = String(a_oldal_arany)+'px'
b_oldal_arany = String(b_oldal_arany)+'px'
a_left = String(a_left)+'px'
a_top = String(a_top)+'px'
b_top = String(b_top)+'px'
b_left = String(b_left)+'px'
szamolas_bal = szamolas_bal+'px'

document.getElementById("a_oldal1").innerHTML = a_oldal;
document.getElementById("a_oldal2").innerHTML = a_oldal;
document.getElementById("b_oldal1").innerHTML = b_oldal;
document.getElementById("b_oldal2").innerHTML = b_oldal;

document.getElementById("kerulet").innerHTML = kerulet;
document.getElementById("terulet").innerHTML = terulet;

a_oldal = "a = " + String(a_oldal)
b_oldal = "b = " + String(b_oldal)
document.getElementById("a").innerHTML = a_oldal;
document.getElementById("b").innerHTML = b_oldal;

document.getElementById("teglalap").style.width=a_oldal_arany;
document.getElementById("teglalap").style.height=b_oldal_arany;
document.getElementById("a").style.left=a_left;
document.getElementById("a").style.top=a_top;
document.getElementById("b").style.top=b_top;
document.getElementById("b").style.left=b_left;
document.getElementById("szamolas").style.left=szamolas_bal;
