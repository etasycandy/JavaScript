function check() {
    var A = [6,12,24,63,28,103,19,496,13,21,52];

    for (let i = 0; i < A.length; i++) {
        var S = 0;
        if (A[i] >= 6) {
            for (let j = 1; j < A[i]; j++) {
                if (A[i] % j == 0) {
                    S += j;
                }
            }
            if (A[i] == S) {
                // document.write(A[i] + " ");
                console.log(A[i])
            }
        }
    }
}

document.getElementById("btn").addEventListener("click", check);