//bai 1a,b
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let tongPhanTu = 0
let doDaiMang = arr.length
for(let i= 0; i<doDaiMang; i=i+1){
    tongPhanTu = tongPhanTu + arr[i]
    console.log('Phan tu thu %s = %s', i, arr[i])
}  
console.log('Tong gia tri PT trong mang la',tongPhanTu)

//bai 1c
let max=arr[0]
let min=arr[0]
for(let i= 0; i<doDaiMang; i=i+1){
    if (max<arr[i]){
        max=arr[i]
    }

    if (min>arr[i]){
        min=arr[i]
    }
}
console.log(max,'la so lon nhat')
console.log(min,'la so nho nhat')
//1d
const trungBinhCong = tongPhanTu/doDaiMang
console.log('trungBinhCong:',trungBinhCong)
//1e 
let arr1 =[]
let j = 0
for (let i = doDaiMang -1; i >=0;i=i-1){ 
    arr1[j] =arr[i]
    j=j+1
}
console.log(arr1)
//1f


//1g
for(let i = doDaiMang - 1;i >=0; i--){
    arr[i+1]=arr[i]
}
arr[0]= 1712
console.log('do dai mang luc dau:',doDaiMang)
console.log('do dai mang luc sau:',arr.length)
console.log(arr)
//1h
const doDaiMangMoi= arr.length
let checkTangDan= true
for (let i = 0; i <doDaiMangMoi; i++) {
    if (arr[i+1]<arr[i]) {
        checkTangDan = false
        break
    }
}
if (checkTangDan === true) {
    console.log('Day la mang tang dan')
}
else {
    console.log('Day la mang khong tang dan')
}
//1i
for (let i =0;i <doDaiMangMoi;i++){
    for (let j=i+1;j <doDaiMangMoi;j++){
        if (arr[i]> arr[j]){
            let tam = arr[i]
            arr[i]=arr[j]
            arr[j ]= tam
        }
   }
}

console.log(arr)

//1i undefined
i=0
while(arr[i] !==undefined) {
    let j=i+1
    while(arr[j] !==undefined){
        if (arr[i]> arr[j]){
            let tam = arr[i]
            arr[i]=arr[j]
            arr[j ]= tam
        }
   }
}

console.log(arr)

//cau k
i=0

