var A = [4,5,2,1,9,8,12,21,20,56,3];

document.getElementById("print").innerHTML = "Phần tử của mảng A = [" + A + "]";

function result() {
    var B = [];
    for (let i = 0; i < A.length; i++) {
        var count = 0;
        if (A[i] > 1) {
            for (let j = 1; j <= A[i]; j++){
                if (A[i] % j == 0) {
                    count++;
                }
            }
            if (count == 2) {
                B.push(A[i])
            }
        }
    }
    document.getElementById("result").innerHTML = "Các giá trị trong mảng A là số nguyên tố : " + B;
}

document.getElementById("btn").addEventListener("click", result);