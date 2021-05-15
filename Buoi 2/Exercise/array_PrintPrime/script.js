function check() {
    var A = [1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < A.length; i++) {
        var count = 0;
        for (let j = 1; j <= A[i]; j++) {
            if (A[i] % j == 0) {
                count++;
            }
        }
        if (count == 2) {
            // document.write(A[i] + " ");
            console.log(A[i])
        }
    }
}

document.getElementById("btn").addEventListener("click", check);



