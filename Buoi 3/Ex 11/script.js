var A = [4,5,2,1,9,8,12,21,20,56,3];

document.getElementById("print").innerHTML = "Phần tử của mảng A = [" + A + "]";

function sort() {
    A.sort(function(a, b) {
        return b - a;
    })
    document.getElementById("result").innerHTML = "Sắp xếp theo chiều giảm dần A = [" + A + "]";
}

document.getElementById("btn").addEventListener("click", sort);