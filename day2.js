// const arr = [4,5,2,555,1221 ,7,9,2]
// let num = -Infinity
// let secNum = -Infinity
// for (let i=0 ; i<arr.length; i++){
    
//     if(num < arr[i]){
//         secNum = num;
//         num = arr[i];
        

       
        

//     }


// }
// console.log(num)
// console.log(secNum)


// let num = -768;
// // let arr = String(num).split('')
// // console.log(arr.length)
// let count = 0
// while(num>1){

//     num = num/10
//     count++
    
    
   
// }

// console.log(count)


// let palindromNum = 12321;
// function Palindrom(num){
//     let rev =0;
//     let rem=palindromNum
//     while(palindromNum>0){
//         rem= palindromNum%10
//         rem = rev;
//         rem = (palindromNum/10)
//         rev = (rem*10) + rev

//     }

//     console.log(rev)
    
// }
// Palindrom(palindromNum)


//armstron number

function armstron(){
let num = 1534 ;
let arr = String(num).split('').map((numbers)=>numbers*numbers*numbers);
let sum =0;
arr.map((num)=> sum += num);
// console.log(sum)

if(sum == num){
    console.log("Yes is a Anstron number")
}
else{
    console.log("No it is not a Anstron number")
}

}

armstron();