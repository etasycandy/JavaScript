function result() {
    var n = document.getElementById("n").value;
    var A = [];

    if (n < 1) {
        alert("Lỗi dữ liệu!\n(Lưu ý: Giá trị của N không thể nhỏ hơn 1)")
    } else {
        for (let i = 1; i <= n; i++) {
            var f0 = 0, f1 = 1, fn = 1; 
    
            if (i <= 1) {
                A.push(1);
            } else {
                for (let j = 1; j < i; j++) {
                    f0 = f1;
                    f1 = fn;
                    fn = f0 + f1;
                }
            }
            if (fn <= n) {
                A.push(fn);
            }
        }
    }
    document.getElementById("result").innerHTML = " => Dãy số Fibonacci bé hơn " + n + " : " + A.join(" ");
}

document.getElementById("btn").addEventListener("click", result)