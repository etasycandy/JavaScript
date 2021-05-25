
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
var s1 = new Student('Trần Đình Hoàng', 1, 9, 10);
var s2 = new Student('Nguyễn Thanh Bình', 1, 10, 10);
var s3 = new Student('Nguyễn Thị Việt Ánh', 0, 0, 0);
var s4 = new Student('Nguyễn Văn Phước Toàn', 1, 5, 6);
var s5 = new Student('Trần Thanh Nam', 2, 7, 9);
var s6 = new Student('Đỗ Thái Dương', 1, 10, 10);
var s7 = new Student('Dương Trường Thọ', 1, 7, 7);
var s8 = new Student('Phan Thị Anh', 0, 8, 7);
var s9 = new Student('Hoàng Thị Thư Thái', 0, 0, 0);
var s10 = new Student('Lê Quang Thành', 1, 5, 6);

// Sửa điểm môn học
s1.subjects[0].Mark = 10; // sub[0] = Toán
s1.subjects[1].Mark = 10;  // sub[1] = Lý


// Tạo danh sách sinh viên
var SV = [];

// Add sinh viên vào SV
SV.push(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);



// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ

function sortLonBe() {
    // -- Từ lớn đến bé (2)
    return SV.sort(function(a, b){return b.mark - a.mark});
}

function sortBeLon() {
    // -- Từ bé đến lớn (3)
    return SV.sort(function(a, b){return a.mark - b.mark});
}

//  Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0 (4)
function sinhVienNu() {
    // -- Tạo danh sách sinh viên nữ
    var svNu = [];
    // -- Add các sinh viên nữ có điểm tích luỹ lớn hơn 5.0 từ danh sách SV vào danh sách svNu
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].gender == 'Nữ' && SV[i].mark > 5) {
            svNu.push(SV[i]);
        }
    }
    return svNu;
}

// Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0 (5)
function gioiToanLy() {
    // -- Tạo danh sách mới
    var svToanLy = [];
    // -- Add các sinh viên có điểm toán hoặc lý lớn hơn 8.0
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].subjects[0].Mark > 8 || SV[i].subjects[1].Mark > 8) {
            svToanLy.push(SV[i]);
        }
    }
    return svToanLy;
}

// Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất (6)
function markMathMax() {
    // -- Tạo danh sách mới
    var svToanCao = [];
   
    // -- Sắp xết các sinh viên có điểm toán từ lớn đến bé
    SV.sort(function(a, b){return b.subjects[0].Mark - a.subjects[0].Mark});

    // -- Trường hợp bỏ qua các sinh viên cùng có điểm toán bằng nhau
    // svToanCao.push(SV[0]);
    

    // -- Trường hợp lấy tất cả các sinh viên cùng có điểm toán bằng nhau
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].subjects[0].Mark == SV[0].subjects[0].Mark) {
            svToanCao.push(SV[i]);
        }
    }
    return svToanCao;
}
    
function markMathMin() {
    // -- Tạo danh sách mới
    var svToanThap = [];

    // -- Sắp xết các sinh viên có điểm toán từ lớn đến bé
    SV.sort(function(a, b){return b.subjects[0].Mark - a.subjects[0].Mark});

    // -- Trường hợp bỏ qua các sinh viên cùng có điểm toán bằng nhau
    // svToanThap.push(SV[9]);
    
    // -- Trường hợp lấy tất cả các sinh viên cùng có điểm toán bằng nhau
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].subjects[0].Mark == SV[9].subjects[0].Mark) {
            svToanThap.push(SV[i]);
        }
    }
    return svToanThap;
}

// // Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0 (7)
function deleteStudent0() {
    // -- Tạo danh sách mới
    var sv0 = [];
    // -- Lưu lại các sinh viên có điểm tích luỹ khác 0 vào mảng sv0
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].mark != 0) {
            sv0.push(SV[i]);
        }
    }
    return sv0;
}

console.log(sortLonBe()); // sắp xếp từ lớn đến bé;
console.log(sortBeLon()); // sắp xếp từ bé đến lớn
console.log(sinhVienNu()); // Print sinh viên Nữ có điểm tích luỹ > 5
console.log(gioiToanLy()); // Print các sinh viên có điểm toán hoặc lý > 8
console.log(markMathMax()); // Print sinh viên có điểm toán cao nhất
console.log(markMathMin()); // Print sinh viên có điểm toán thấp nhất
console.log(deleteStudent0()); // Xoá các sinh viên có điểm tích luỹ = 0;



