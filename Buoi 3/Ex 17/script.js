var A = [4,5,2,1,9,28,12,21,6,20,56,3,496];

document.getElementById("print").innerHTML = "Phần tử của mảng A = [" + A + "]";

function result() {
    var B = [];
    

    for (let i = 0; i < A.length; i++) {
        var S = 0;
        for (let j = 1; j < A[i]; j++) {
            if (A[i] % j == 0) {
                S += j;
            }
        }
        if (A[i] == S) {
            B.push(A[i]);
        }
    }
    document.getElementById("result").innerHTML = "Các giá trị trong mảng A là số hoàn hảo : " + B;
}

document.getElementById("btn").addEventListener("click", result);