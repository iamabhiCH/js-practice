// WAP that reverse all the elements of array

let arr = [12,23,1,45,89,443,123,98,90,80,115,788,332];
let arr1 = [];

for(let i = arr.length - 1; i >= 0; i--){
    arr1.push(arr[i]);
}

console.log(arr1)