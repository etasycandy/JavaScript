function sum() {
    var n = document.getElementById("n").value;
    var x = document.getElementById("x").value;

    var S = 1;

    for (let i = 1; i <= n; i++) {
        S += Math.pow(x,i)/i;        
    }
    document.getElementById("result").innerHTML = "Result = " + S;
}
document.getElementById("btn").addEventListener("click", sum);