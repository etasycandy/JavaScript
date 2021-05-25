
class Student {
    // hàm khởi tạo
    constructor(name, gender, mSub1, mSub2) {
        this.name = name;
        this.mark = (mSub1 + mSub2)/2; // Điểm tích luỹ
        if (gender == 1) {
            this.gender = 'Nam';
        } else if (gender == 0) {
            this.gender = 'Nữ';
        } else {
            this.gender = 'Bê Đê' // Không xác định được giới tính
        }
        this.subjects = [{Title: 'Toán', Mark: mSub1}, {Title: 'Lý', Mark: mSub2}] ;
    }
    
    // method
    showInfo() {
        return `${this.name} - ${this.mark}`;
    }

}


// Danh sách sinh viên (1)
var student1 = new Student('Trần Đình Hoàng', 1, 9, 10);
var student2 = new Student('Nguyễn Thanh Bình', 1, 10, 10);
var student3 = new Student('Nguyễn Thị Việt Ánh', 0, 0, 0);
var student4 = new Student('Nguyễn Văn Phước Toàn', 1, 5, 6);
var student5 = new Student('Trần Thanh Nam', 2, 7, 9);
var student6 = new Student('Đỗ Thái Dương', 1, 10, 10);
var student7 = new Student('Dương Trường Thọ', 1, 7, 7);
var student8 = new Student('Phan Thị Anh', 0, 8, 7);
var student9 = new Student('Hoàng Thị Thư Thái', 0, 0, 0);
var student10 = new Student('Lê Quang Thành', 1, 5, 6);

// Sửa điểm môn học
student1.subjects[0].Mark = 10; // sub[0] = Toán
student1.subjects[1].Mark = 10;  // sub[1] = Lý


// Tạo danh sách sinh viên
var listStudent = [];

// Add sinh viên vào SV
listStudent.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);



// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ

function sortLonBe() {
    // -- Từ lớn đến bé (2)
    return listStudent.sort(function(a, b){return b.mark - a.mark});
}

function sortBeLon() {
    // -- Từ bé đến lớn (3)
    return listStudent.sort(function(a, b){return a.mark - b.mark});
}

//  Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0 (4)
function sinhVienNu() {
    // -- Tạo danh sách sinh viên nữ
    var svNu = [];
    // -- Add các sinh viên nữ có điểm tích luỹ lớn hơn 5.0 từ danh sách SV vào danh sách svNu
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].gender == 'Nữ' && listStudent[i].mark > 5) {
            svNu.push(listStudent[i]);
        }
    }
    return svNu;
}

// Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0 (5)
function gioiToanLy() {
    // -- Tạo danh sách mới
    var svToanLy = [];
    // -- Add các sinh viên có điểm toán hoặc lý lớn hơn 8.0
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].subjects[0].Mark > 8 || listStudent[i].subjects[1].Mark > 8) {
            svToanLy.push(listStudent[i]);
        }
    }
    return svToanLy;
}

// Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất (6)
function markMathMax() {
    // -- Tạo danh sách mới
    var svToanCao = [];
   
    // -- Sắp xết các sinh viên có điểm toán từ lớn đến bé
    sortLonBe();

    // -- Trường hợp bỏ qua các sinh viên cùng có điểm toán bằng nhau
    // svToanCao.push(SV[0]);
    

    // -- Trường hợp lấy tất cả các sinh viên cùng có điểm toán bằng nhau
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].subjects[0].Mark == listStudent[0].subjects[0].Mark) {
            svToanCao.push(listStudent[i]);
        }
    }
    return svToanCao;
}
    
function markMathMin() {
    // -- Tạo danh sách mới
    var svToanThap = [];

    // -- Sắp xết các sinh viên có điểm toán từ lớn đến bé
    sortLonBe();

    // -- Trường hợp bỏ qua các sinh viên cùng có điểm toán bằng nhau
    // svToanThap.push(SV[9]);
    
    // -- Trường hợp lấy tất cả các sinh viên cùng có điểm toán bằng nhau
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].subjects[0].Mark == listStudent[9].subjects[0].Mark) {
            svToanThap.push(listStudent[i]);
        }
    }
    return svToanThap;
}

// // Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0 (7)
function deleteStudent0() {
    // -- Tạo danh sách mới
    var sv0 = [];
    // -- Lưu lại các sinh viên có điểm tích luỹ khác 0 vào mảng sv0
    for (let i = 0; i < listStudent.length; i++) {
        if (listStudent[i].mark != 0) {
            sv0.push(listStudent[i]);
        }
    }
    return sv0;
}

// console.log(sortLonBe()); // sắp xếp từ lớn đến bé;
// console.log(sortBeLon()); // sắp xếp từ bé đến lớn
// console.log(sinhVienNu()); // Print sinh viên Nữ có điểm tích luỹ > 5
// console.log(gioiToanLy()); // Print các sinh viên có điểm toán hoặc lý > 8
// console.log(markMathMax()); // Print sinh viên có điểm toán cao nhất
// console.log(markMathMin()); // Print sinh viên có điểm toán thấp nhất
// console.log(deleteStudent0()); // Xoá các sinh viên có điểm tích luỹ = 0;



Display()
// Hiển thị
function Display() {
    var  listproduct = "";
    for (var i = 0; i < listStudent.length; i++) {

        // if (i == 0 || i % 2 == 0) {
        //     listproduct += '<tr class = "grey">';
        // } else {
        //     listproduct += '<tr class = "whiteSmoke">';
        // }

        listproduct += '<tr>';

        listproduct += '<td id="indexSTT">' + (i+1) + '</td>';

        listproduct += '<td id="indexName">' + listStudent[i].name + '</td>';

        listproduct += '<td id="indexGender">' + listStudent[i].gender + '</td>';
        
        listproduct += '<td id="indexMarkMaths">' + listStudent[i].subjects[0].Mark + '</td>';

        listproduct += '<td id="indexMarkPhysical">' + listStudent[i].subjects[1].Mark + '</td>';
        
        listproduct += '<td id="indexGPA">' + listStudent[i].mark + '</td>';

        listproduct += '</tr>'; 
    }
    document.getElementById("listStudent").innerHTML = listproduct;
}

document.getElementById("btn-sx").addEventListener("click", sortLonBe());

