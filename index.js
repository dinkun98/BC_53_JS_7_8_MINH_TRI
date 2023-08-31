// Bài 1:
// Bước 1: Cho người dùng nhập vào số n
// Bước 2: lấy n người dùng nhập vào và push vô mảng, sau đó dùng vòng lặp for tính tổng
// Bước 3: xuất kết quả
var mang = [];
document.getElementById("btnThemSo").onclick = function () {
  var n = +document.getElementById("n").value;
  mang.push(n);
  document.getElementById("mang").innerHTML = mang;
};

document.getElementById("btnTinhTong").onclick = function () {
  var tong = 0;
  for (index = 0; index < mang.length; index++) {
    if (mang[index] > 0) {
      tong += mang[index];
    }
  }
  document.getElementById("tongSoNguyen").innerHTML = "Kết Quả: " + tong;
};

// Bài 2:
// Bước 1: Cho nhập n số tùy ý
// Bước 2: tao bien dem và dùng vòng lặp đếm tổng số dương
// Bước 3: xuất kết quả
document.getElementById("btnDem").onclick = function () {
  var dem = 0;
  for (index = 0; index < mang.length; index++) {
    if (mang[index] > 0) {
      dem += 1;
    }
  }
  document.getElementById("demSoDuong").innerHTML = "Có " + dem + " số dương";
};

// Bài 3:
// Bước 1: Cho nhập n số tùy ý
// Bước 2: dùng Math.min để tìm số nhỏ nhất
// Bước 3: xuất kết quả
document.getElementById("btnTimMin").onclick = function () {
  min = Math.min(...mang);
  document.getElementById("min").innerHTML = min;
};

// Bài 4:
// Bước 1: Cho nhập n số tùy ý
// Bước 2: tạo mảng mới để push số dương vào, dùng Math.min để tìm số dương nhỏ nhất
// Bước 3: xuất kết quả
document.getElementById("btnTimDuongMin").onclick = function () {
  var mangMinDuong = [];
  for (var index = 0; index <= mang.length; index++) {
    if (mang[index] > 0) {
      mangMinDuong.push(mang[index]);
    }
  }
  console.log(mangMinDuong);
  var soDuongNho = Math.min(...mangMinDuong);
  document.getElementById("minDuong").innerHTML =
    "Số dương nhỏ nhất là: " + soDuongNho;
};

//Bài 5
// Bước 1: Cho nhập n số tùy ý
// Bước 2: dùng findLast để tìm số chẵn cuối cùng
// Bước 3: xuất kết quả
document.getElementById("btnTimLastEvenNumber").onclick = function () {
  var mangMoi = mang.slice(0);

  const found = mangMoi.findLast((element) => element % 2 == 0);

  document.getElementById("soChanCuoi").innerHTML =
    "Số chẵn cuối trong mảng là: " + found;
};

// Bài 6
// Bước 1: cho nhập 2 vị trí
// Bước 2: lưu số ở vị trí 1 vô biến tạm rồi hoán vị số ở hai vị trí trong mảng
// bước 3: xuất kết quả
document.getElementById("btnChangePosition").onclick = function () {
  var mangMoi2 = mang.slice(0);
  var vitri1 = +document.getElementById("n1").value;
  var vitri2 = +document.getElementById("n2").value;

  temp1 = mangMoi2[vitri1];
  mangMoi2[vitri1] = mangMoi2[vitri2];

  mangMoi2[vitri2] = temp1;

  document.getElementById("doiChoResult").innerHTML = mangMoi2;
};

// Bài 7:
// Bước 1: Cho nhập vào n số
// Bước 2: dùng sort để xếp tăng dần
// Bước 3: xuất kết quả
document.getElementById("btnTangDan").onclick = function () {
  var mangMoi3 = mang.slice(0);
  mangMoi3.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("tangDan").innerHTML = mangMoi3;
};

// Bài 8:
// Bước 1: Cho nhập vào số n
// Bước 2: viết hàm kiểm tra số nguyên tố rồi push số đỏ vô mảng mới để tìm số nguyên tố đầu tiên
// Bước 3: xuất kết quả
function isPrime(m) {
  if (m < 2) return false;

  for (let k = 2; k < m; k++) {
    if (m % k == 0) {
      return false;
    }
  }
  return true;
}
document.querySelector("#btnTimSoNguyenTo").onclick = function () {
  let result = [];
  var check;

  for (var index = 0; index < mang.length; index++) {
    check = isPrime(mang[index]);
    if (check) {
       result.push(mang[index]);
    }
  }

  //   mang.forEach(function (element) {
  //     const item = isPrime(element);
  //     if (item) {
  //       result.push(element);
  //     }
  //   });

  let output = result.toString() === "";

  if (output) {
    document.getElementById("soNguyenTo").innerHTML = "Mảng không có số nguyên tố nên trả về -1";
  } else {
    document.getElementById("soNguyenTo").innerHTML = result[0];
  }
};

// Bài 9:
// Bước 1: Cho người dùng nhập vào số tùy ý
// Bước 2: dùng Number.isInteger để tìm ra số nguyên và dùng biến đếm để count
// Bước 3: xuất kết quả
var mangSoNguyen = [];
document.getElementById("btnThemSoNguyen").onclick = function () {
  var n = +document.getElementById("n4").value;
  mangSoNguyen.push(n);
  document.getElementById("mangSoNguyen").innerHTML = mangSoNguyen;
};

document.getElementById("btnDemSoNguyen").onclick = function () {
  dem = 0;
  for (var index = 0; index < mangSoNguyen.length; index++) {
    if (Number.isInteger(mangSoNguyen[index])) {
      dem += 1;
    }
  }
  if (dem > 0) {
    document.getElementById("demSoNguyen").innerHTML =
      "Có " + dem + " số nguyên";
  } else {
    document.getElementById("demSoNguyen").innerHTML = "Không có số nguyên nào";
  }
};

// Bài 10:
// Bước 1: Nhập vào n số
// Bước 2: dùng biến dem và if để lưu ra số dương và âm
// Bước 3: xuất kết quả so sánh
document.getElementById("btnDemSoDuongAm").onclick = function () {
  am = 0;
  duong = 0;
  for (var index = 0; index < mang.length; index++) {
    if (mang[index] > 0) {
      duong += 1;
    } else {
      am += 1;
    }
  }

  if (am > duong) {
    document.getElementById("ketQuaAmDuong").innerHTML = "Số âm > Số dương";
  } else if (duong > am) {
    document.getElementById("ketQuaAmDuong").innerHTML = "Số dương > Số âm";
  } else {
    document.getElementById("ketQuaAmDuong").innerHTML = "Đề nghị nhập số";
  }
};
