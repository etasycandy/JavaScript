function check() {
    var n = document.getElementById("n").value;
    var count = 0;
    if (n <= 0) {
        document.getElementById("result").innerHTML = n + " không phải là số nguyên tố."
    } else {
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count ++;
            }
        }
        if (count == 2) {
            document.getElementById("result").innerHTML = n + " là số nguyên tố."
        } else {
            document.getElementById("result").innerHTML = n + " không phải là số nguyên tố."
        }
    }
}

document.getElementById("btn").addEventListener("click", check);