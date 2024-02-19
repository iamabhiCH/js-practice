// WAP to get the same value from another array and assign to object of arrays.

let arr1 = [1,3,45,67,8,90,987,234,556,789]
let arr2 = [1,45,8,556]
let resArr = [];

// First Solution

// for(i = 0; i < arr1.length; i++){
//     for(j = 0; j < arr2.length; j++){
//         if(arr1[i] == arr2[j]){
//             resArr.push(arr1[i])
//         }
//     }
// }

// Second solution

arr1.forEach(val => 
    arr2.includes(val) && resArr.push(val));

console.log(resArr)