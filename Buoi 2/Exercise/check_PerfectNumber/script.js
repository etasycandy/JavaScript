function check() {
    var n = document.getElementById("n").value;
    var S = 0;

    if (n < 6) {
        document.getElementById("result").innerHTML = n + " không phải là số hoàn hảo."
    } else {
        for (let i = 1; i < n; i++) {
            if (n % i == 0) {
                S += i;
            }
        }
        if (S == n) {
            document.getElementById("result").innerHTML = n + " là số hoàn hảo."
        } else {
            document.getElementById("result").innerHTML = n + " không phải là số hoàn hảo."
        }    
    }
}
document.getElementById("btn").addEventListener("click", check);