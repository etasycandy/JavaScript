function swap() {
    var n = document.getElementById("n").value;

    function rever(n) {
        return (n === '') ? '':rever(n.substr(1)) + n.charAt(0);
    }
    var a = rever(n);

    document.getElementById("result").innerHTML = "Số nghịch đảo của " + n + " là : " + a;
}

document.getElementById("btn").addEventListener("click", swap);
