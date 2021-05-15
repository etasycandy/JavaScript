function check() {
    var n = document.getElementById("n").value;

    if (n < 1) {
        document.getElementById("result").innerHTML = n + " không phải là số đối xứng."
    } else {
        function rever(n) {
            return (n === '') ? '':rever(n.substr(1)) + n.charAt(0);
        }

        if (n == rever(n)) {
            document.getElementById("result").innerHTML = n + " là số đối xứng."
        } else {
            document.getElementById("result").innerHTML = n + " không phải là số đối xứng."
        }
    }

}

document.getElementById("btn").addEventListener("click", check)