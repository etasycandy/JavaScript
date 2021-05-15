var A = [4,5,2,1,9,8,12,21,16,20,56,3];

document.getElementById("print").innerHTML = "Phần tử của mảng A = [" + A + "]";

function result() {
    var B = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % Math.sqrt(A[i]) == 0) {
            B.push(A[i]);
        }
    }
    document.getElementById("result").innerHTML = "Các giá trị trong mảng A là số chính phương : " + B;
}

document.getElementById("btn").addEventListener("click", result);