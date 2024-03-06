//WAP  Merge Two Arrays Without Creating a New Array

let arr1 = [12,34,56,7,8,90,11];
let arr2 = [3,5,77,80,10,72,29,16];

Array.prototype.push.apply(arr1, arr2);
console.log(arr1);