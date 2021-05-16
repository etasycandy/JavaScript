// row 1
var a1 = 0;
var b1 = 0;

document.getElementById("a1").innerHTML = a1;
document.getElementById("b1").innerHTML = b1;
// Not a
if (!a1 == true) {
    document.getElementById("notA1").innerHTML = 0;
} else {
    document.getElementById("notA1").innerHTML = 0;
}

// Not b
if (!b1 == true) {
    document.getElementById("notB1").innerHTML = 1;
} else {
    document.getElementById("notB1").innerHTML = 0;
}
    
// a and b
document.getElementById("and1").innerHTML = a1 && b1;

// a or b
document.getElementById("or1").innerHTML = a1 || b1;


// row 2
var a2 = 0;
var b2 = 1;

document.getElementById("a2").innerHTML = a2;
document.getElementById("b2").innerHTML = b2;
// Not a
if (!a2 == true) {
    document.getElementById("notA2").innerHTML = 1;
} else {
    document.getElementById("notA2").innerHTML = 0;
}

// Not b
if (!b2 == true) {
    document.getElementById("notB2").innerHTML = 1;
} else {
    document.getElementById("notB2").innerHTML = 0;
}
    
// a and b
document.getElementById("and2").innerHTML = a2 && b2;

// a or b
document.getElementById("or2").innerHTML = a2 || b2;


// row 3
var a3 = 1;
var b3 = 0;

document.getElementById("a3").innerHTML = a3;
document.getElementById("b3").innerHTML = b3;
// Not a
if (!a3 == true) {
    document.getElementById("notA3").innerHTML = 1;
} else {
    document.getElementById("notA3").innerHTML = 0;
}

// Not b
if (!b3 == true) {
    document.getElementById("notB3").innerHTML = 1;
} else {
    document.getElementById("notB3").innerHTML = 0;
}
    
// a and b
document.getElementById("and3").innerHTML = a3 && b3;

// a or b
document.getElementById("or3").innerHTML = a3 || b3;


// row 4
var a4 = 1;
var b4 = 1;

document.getElementById("a4").innerHTML = a4;
document.getElementById("b4").innerHTML = b4;
// Not a
if (!a4 == true) {
    document.getElementById("notA4").innerHTML = 1;
} else {
    document.getElementById("notA4").innerHTML = 0;
}

// Not b
if (!b4 == true) {
    document.getElementById("notB4").innerHTML = 1;
} else {
    document.getElementById("notB4").innerHTML = 0;
}
    
// a and b
document.getElementById("and4").innerHTML = a4 && b4;

// a or b
document.getElementById("or4").innerHTML = a4 || b4;

