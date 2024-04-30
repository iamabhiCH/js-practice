// WAP to remove the duplicate element in array.

let arr = [12,34,245,45,78,90,12,4,56,34,78,90,89,9,7,4,56,4,12,90,24];

let arr1 = [...new Set(arr)];

console.log(arr1)
