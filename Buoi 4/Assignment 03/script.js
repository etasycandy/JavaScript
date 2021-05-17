
class Student {
    // hàm khởi tạo
    constructor(name, mark, gender, mSub1, mSub2) {
        this.name = name;
        this.mark = mark; // Điểm tích luỹ
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

Student.prototype.className = 'IT';

// Danh sách sinh viên (1)
var s1 = new Student('Trần Đình Hoàng', 8, 1, 9, 10);
var s2 = new Student('Nguyễn Thanh Bình', 9, 1, 10, 10);
var s3 = new Student('Nguyễn Thị Việt Ánh', 0, 0, 0, 0);
var s4 = new Student('Nguyễn Văn Phước Toàn', 1, 1, 5, 6);
var s5 = new Student('Trần Thanh Nam', 7, 2, 7, 9);
var s6 = new Student('Đỗ Thái Dương', 9, 1, 10, 10);
var s7 = new Student('Dương Trường Thọ', 6, 1, 7, 7);
var s8 = new Student('Phan Thị Anh', 7, 0, 8, 7);
var s9 = new Student('Hoàng Thị Thư Thái', 0, 0, 0, 0);
var s10 = new Student('Lê Quang Thành', 4, 1, 5, 6);

// Sửa điểm môn học
s1.subjects[0].Mark = 10; // sub[0] = Toán
s1.subjects[1].Mark = 7;  // sub[1] = Lý


// Tạo danh sách sinh viên
var SV = [];

// Add sinh viên vào SV
SV.push(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);

// Sắp xếp danh sách sinh viên theo thứ tự điểm tích luỹ

    // -- Từ lớn đến bé (2)
    SV.sort(function(a, b){return b.mark - a.mark});

    // -- Từ bé đến lớn (3)
    // + Đảo +
    SV.reverse();
    // + Or +
    SV.sort(function(a, b){return a.mark - b.mark});

//  Lọc ra danh sách sinh viên là nữ và có điểm tích luỹ lớn hơn 5.0 (4)

    // -- Tạo danh sách sinh viên nữ
    var svNu = [];
    // -- Add các sinh viên nữ có điểm tích luỹ lớn hơn 5.0 từ danh sách SV vào danh sách svNu
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].gender == 'Nữ' && SV[i].mark > 5) {
            svNu.push(SV[i]);
        }
    }

// Lọc ra danh sách sinh viên có điểm toán hoặc lý lớn hơn 8.0 (5)

    // -- Tạo danh sách mới
    var svToanLy = [];
    // -- Add các sinh viên có điểm toán hoặc lý lớn hơn 8.0
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].subjects[0].Mark > 8 || SV[i].subjects[1].Mark > 8) {
            svToanLy.push(SV[i]);
        }
    }

// Tìm sinh viên có điểm môn Toán cao nhất và thấp nhất (6)

    // -- Tạo danh sách mới
    var svToanCao = [];
    var svToanThap = [];
    // -- Sắp xết các sinh viên có điểm toán từ lớn đến bé
    SV.sort(function(a, b){return b.subjects[0].Mark - a.subjects[0].Mark});

    // -- Trường hợp bỏ qua các sinh viên cùng có điểm toán bằng nhau
    svToanCao.push(SV[0]);
    svToanThap.push(SV[9]);

    // -- Trường hợp lấy tất cả các sinh viên cùng có điểm toán bằng nhau
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].subjects[0].Mark == SV[0].subjects[0].Mark) {
            svToanCao.push(SV[i]);
        }
        if (SV[i].subjects[0].Mark == SV[9].subjects[0].Mark) {
            svToanThap.push(SV[i]);
        }
    }

// Xoá khỏi danh sách sinh viên có điểm tích luỹ là 0 (7)

    // -- Tạo danh sách mới
    var sv0 = [];
    // -- Lưu lại các sinh viên có điểm tích luỹ khác 0 vào mảng sv0
    for (let i = 0; i < SV.length; i++) {
        if (SV[i].mark != 0) {
            sv0.push(SV[i]);
        }
    }


// Student.prototype.sub1.mark = '1';

console.log(SV);
// console.log(svNu);
// console.log(svToanLy);
// console.log(svToanCao);
// console.log(svToanThap);
// console.log(sv0);


// console.log(showInfo());


