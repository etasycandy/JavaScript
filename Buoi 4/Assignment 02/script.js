// Định dạng tiền tệ
const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
})

var result = [];

// Đẩy mảng result vào local
function Save(){
    localStorage.setItem('listResult',JSON.stringify(result))
}

// Get giá trị trong mảng result 
function load(){
    result = JSON.parse(localStorage.getItem('listResult'));
} 

// Xuất giá trị trong mảng result
if (localStorage.getItem("listResult") != null) {
    load();
}
if (localStorage.getItem("listResult") == null) {
    Save();
}

// reload mảng result
var clearr = function(){
    result = [];
    Save();
    window.location.reload();
}

function getM(){
    var date = document.getElementById("date").value;

    date.getMonth();
}

// Thực hiện tính toán
var tinhToan = function(){

    // Xoá hết dữ liệu cũ
    clearr();

    // Dữ liệu đầu vào
    var date = new Date(document.getElementById("date").value);
    var time = document.getElementById("time").value;
    var money = document.getElementById("tien-vay").value;
    var lai = document.getElementById("lai-suat").value;

    // get lấy thông số ngày, tháng, năm.
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var sDate = [];

    // Định dạng hiển thị ngày (dd)
    if (day < 10) {
        day = '0' + day;
    }
    // Định dạng hiển thị tháng (mm)
    if (month < 10) {
        month = '0' + month;
    }
    // Định dạng hiển thị năm (yyyy)
    if (year < 10) {
        year = '000' + year;
    } else if (year < 100) {
        year = '00' + year;
    } else if (year < 1000) {
        year = '0' + year;
    } else {
        year = year;
    }

    sDate.push(day, month, year);

    // xuất date "dd/mm/yyyy"
    var date = sDate.join('/');

    var tienTraHangThang = Math.round(money / time);
    var moneyConLai = money;

    for (let i = 0; i < 1; i++) {
        var item0 = {
            date,
            i,
            moneyConLai,
        
        }
        result.push(item0);
    }
    
    for (let i = 1; i <= time; i++){
        // xử lý ngày/tháng/năm
        month = parseInt(sDate[1]);
        year = parseInt(sDate[2]);
        if (month >= 12) {
            month = 1;
            year += 1;
        } else {
            month += 1;
        }

        // Định dạng hiển thị tháng (mm)
        if (month < 10) {
            month = '0' + month;
        }
        // Định dạng hiển thị năm (yyyy)
        if (year < 10) {
            year = '000' + year;
        } else if (year < 100) {
            year = '00' + year;
        } else if (year < 1000) {
            year = '0' + year;
        } else {
            year = year;
        }

        sDate[1] = month;
        sDate[2] = year;
        
        // xuất date "dd/mm/yyyy"
        date = sDate.join('/');

        var tienLai = Math.round(moneyConLai * (lai / 100) / 12);
        moneyConLai -= tienTraHangThang; 
        if (moneyConLai < 10) {
            tienTraHangThang += moneyConLai;
            moneyConLai -= moneyConLai;
        }
        var total = tienTraHangThang + tienLai;
        var item = {
            date,
            i,
            moneyConLai,
            tienTraHangThang,
            tienLai,
            total
        }
        result.push(item);
        Save();
        window.location.reload();
        Total();
        Display();
    }
}

// Tính tổng cộng
var Total = function(){
    var tongGoc = 0;
    var tongLai = 0;
    var totalGocLai = 0;

    for (var i = 1; i < result.length; i++) {
        tongGoc += result[i].tienTraHangThang; 
        tongLai += result[i].tienLai; 
        totalGocLai += result[i].total; 
    }

    document.getElementById("totalTienTra").innerText = formatter.format(tongGoc);
    document.getElementById("totalTienLai").innerHTML = formatter.format(tongLai);
    document.getElementById("totalTotal").innerHTML = formatter.format(totalGocLai);
}
Total();
Display()

// Hiển thị
function Display() {
    var  listproduct = "";
    for (var i = 0; i < result.length; i++) {

        if (i == 0 || i % 2 == 0) {
            listproduct += '<tr class = "grey">';
        } else {
            listproduct += '<tr class = "whiteSmoke">';
        }

        listproduct += '<td id="indexDate">' + result[i].date + '</td>';
        listproduct += '<td id="indexSTT">' + result[i].i + '</td>';
        if (result[i].moneyConLai) {
            listproduct += '<td id="indexMoney">' + formatter.format(result[i].moneyConLai) + '</td>';
        } else {
            listproduct += '<td>0</td>';
        }
        if (result[i].tienTraHangThang) {
            listproduct += '<td id="indexTienTra">' + formatter.format(result[i].tienTraHangThang) + '</td>';
        } else {
            listproduct += '<td></td>';
        }
        if (result[i].tienLai) {
            listproduct += '<td id="indexLaiTra">' + formatter.format(result[i].tienLai) + '</td>';
        } else {
            listproduct += '<td></td>';
        }
        if (result[i].total) {
            listproduct += '<td id="indexTotal">' + formatter.format(result[i].total) + '</td>';
        } else {
            listproduct += '<td></td>';
        }  
        listproduct += '</tr>'; 
    }
    document.getElementById("list").innerHTML = listproduct;
}
