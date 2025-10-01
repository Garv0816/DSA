const arr = [4,5,2,555,1221 ,7,9,2]
let num = -Infinity
let secNum = -Infinity
for (let i=0 ; i<arr.length; i++){
    
    if(num < arr[i]){
        secNum = num;
        num = arr[i];
        

       
        

    }


}
console.log(num)
console.log(secNum)



// const arr2 = [7,9,2]

// let secLargest= 0;
// for (let i=0; i<arr2.length;i++){
//     if(secLargest < arr2.length)
//     {
//         secLargest= arr2[i]
//     }
// }
// console.log(secLargest)