function giaithua() {
    var n = document.getElementById("n").value;
    var chan = 1;
    var le = 1;

    if (n < 1) {
        alert("ERROR! (N > 0)");
    } else {
        if (n % 2 == 0) {
            for (let i = 1; i <= n; i++) {
                if (i % 2 == 0) {
                    chan *= i;
                }
            }
            document.getElementById("result").innerHTML = n + "! = " + chan;
        } else {
            for (let i = 1; i <= n; i++) {
                if (i % 2 != 0) {
                    le *= i;
                }  
            }
            document.getElementById("result").innerHTML = n + "! = " + le;
        }
    }
}

document.getElementById("btn").addEventListener("click", giaithua);