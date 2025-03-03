/*
array(mang) la mot dang dac bbiet cua object
duoc thier ke de luu tru cac gia tri theo thu tu va truy cap bang chi so(index), bat dau tu 0 
*/

//tao mang bang cap dau nguoac vuong[]
//ngoai ra con co cach tao bang constructor, tham khao series co ban

const traiCay = ["cam", "xoai", "nho", "tao"];
console.log(typeof traiCay);
console.log(traiCay);

// truy cap cac phan tu cua mang
console.log(traiCay[0]);

//mang long nhay va kieu du lieu trong mang
//mangco the chua bat ky loai du lieu nao, bao gom chuoi
//so, doi tuong, hoac tham chi cac mang khac

const mang = [1, "hello", true, null, undefined, [1, 2, 3]];
//truy cap cac phan tu long nhau

console.log(mang[5][0])
//push(): them phan tu vao cuoi mang
traiCay.push("dua");
console.log(traiCay);

//map: map se duyet qua tung phan tu cua mang, tao ra mang moi tu mang cu
const so = [1, 2, 3, 4, 5];
const so2 = so.map((item) => item * 2);