//bai 1a
function kiemTraAmDuong(n){
    if (n<0){
        console.log('n la so am') 
    }    
    else if(n>0){

        console.log('n la so duong')
    }    
    else{
        console.log('n la so khong am, khong duong')
    }
}
kiemTraAmDuong(-1)

//bai 1b
function kiemTraChanLe(n){
    if (n%2==0){
        console.log('n la so chan')
    }
    else{
        console.log('n la so le')
    }
}
kiemTraChanLe(3)
//bai 1c
function timSoLonNhat(a,b,c){
    if(a>b && a>c){
        console.log(a,'a la so lon nhat')
    }
    else if(b>a && b>c){
        console.log(b,'b la so lon nhat')
    }
    else{
        console.log(c,'c la so lon nhat')
    }
}
timSoLonNhat(5,7,4)

function kiemTraSoLonNhat(a,b,c){
    let max=a
    if (max<b){
        max=b
    }
    if (max<c){
        max=c
    }
    console.log(max,'la so lon nhat')
}
kiemTraSoLonNhat(50,100,150)
//bai 1d
function kiemTraNamNhuan(n){
    if (n%4==0 && n%100 !=0){
        console.log(n,'la nam nhuan')
    }
    if(n%4==0 && n%400==0){
        console.log(n,'la nam nhuan')
    }
    else{
        console.log(n,'la nam khong nhuan')
    }
}
kiemTraNamNhuan(1600)
kiemTraNamNhuan(2000)
kiemTraNamNhuan(2004)
kiemTraNamNhuan(2015)
kiemTraNamNhuan(1900)
//bai 1e
function kiemTraNguyenAmPhuAm(n){
    if(n='a','o'){
        console.log(n,'la mot nguyen am')
    }
    else{
        console.log(n,'la mot phu am')
    }
}
kiemTraNguyenAmPhuAm('o')


// Bai 2

let a = 2
let b = 3
let c = 1
function giaiPhuongTrinhBac2(a,b,c){
    let delta = b*b-4*a*c
    if(delta<0){
        return 'Phuong trinh vo nghiem'
    }
    else if (delta==0){
        return ` phuong trinh co nghiem x1= x2 =${-b / (2*a)}`
    }
    else{
        const x1=(-b +Math.sqrt(delta))/(2*a)
        const x2=(-b +Math.sqrt(delta))/(2*a)

        return (x1,x2)
    }
}
let ketqua = giaiPhuongTrinhBac2(5,6,7)
console.log(ketqua)

//Bai 2d


function tinhCuocDienThoai(soPhut){
    const phiThueBao =25000
    let tongChiPhi = 0
    let chiPhi = 0

    if (soPhut >=0 && soPhut <=50){
        chiPhi=soPhut*600
    }     
    else if (soPhut>=50 && soPhut <=200){
        chiPhi=50*600+(soPhut-50)*400
    }
    else if (soPhut >200){
        chiPhi=50*600 +150*400+(soPhut-200)*200
    }
    tongChiPhi=phiThueBao +chiPhi

    return tongChiPhi
}
let tongChiPhi = tinhCuocDienThoai(255)
console.log('tongChiPhi=',tongChiPhi)