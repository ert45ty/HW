let a = prompt("nhap vao mang a voi cac phan tu");
let b = prompt("nhap vao mang b voi cac phan tu");
const arrA = a.split(",");
const arrB = b.split(",");
const arrC = [];
function returnDifference(arrA, arrB) {
  for (let i in arrA) {
    if (arrB.indexOf(arrA[i]) === -1) {
      arrC.push(arrA[i]);
    }
  }
  for (let j in arrB) {
    if (arrA.indexOf(arrB[j]) === -1) {
      arrC.push(arrB[j]);
    }
  }
  return arrC;
}
returnDifference(arrA, arrB);
console.log(arrA);
console.log(arrB);
console.log(arrC);
