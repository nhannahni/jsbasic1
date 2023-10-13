//
let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

 //i
 let soLuongPhantu =arr.length
 tong = 0
 i=0
 do{tong = tong +arr[i]
    i= i + 1
 }while(i<soLuongPhantu)
 console.log('Trung Binh Cong:',tong /soLuongPhantu)

 //cau e
 function daoNguoc(){
    let i=0
    let j=arr.length -1
    let temp=0
    do{
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]= temp
        i= i+1
        j=j-1

    }while(i<j)
    console.log(arr)
 }
 daoNguoc()

 //f
 