function submit() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    var swapHeight = height/100;

    var BMI = weight/(swapHeight*swapHeight);
    if (height < 0 || weight < 0) {
        alert("Lỗi dữ liệu!")
    } else {
        if ( BMI < 18.5){
            document.getElementById("result").innerHTML="Gầy, Thấp";

        } else if ( BMI <= 24.9) {
            document.getElementById("result").innerHTML="Bình thường, Trung Bình";

        } else if ( BMI <= 29.9) {
            document.getElementById("result").innerHTML="Hơi béo, Cao";

        } else if ( BMI <= 34.9) {
            document.getElementById("result").innerHTML="Béo phì cấp độ 1, Cao";

        } else if ( BMI <= 39.9) { 
            document.getElementById("result").innerHTML="Béo phì cấp độ 2, Rất cao";

        } else if ( BMI > 40) {
            document.getElementById("result").innerHTML="Béo phì cấp độ 3, Nguy hiểm";
        }
    }
}
document.getElementById("btn").addEventListener("click", submit);
