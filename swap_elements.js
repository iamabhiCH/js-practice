// WAP to swap first and last elements in array

let arr = [12,45,78,67,34,90,224,115,670];

let x = arr[0];
let n = arr.length;
let y = arr[n-1];

arr[0] = y;
arr[n-1] = x;

console.log(arr)