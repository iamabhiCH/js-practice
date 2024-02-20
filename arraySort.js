// WAP to Sort an Array which Contain 1 to n Values.

let arr = [5,67,89,9,10,34,56,2,1,3,5,4,78,99,112,1012,80,1014];

// 1st method
// const arr1 = Array.from(new Set(arr)).sort((a,b) => a-b);

// 2nd method
const arr1 = Array.from(arr).sort((a,b) => a-b);

console.log("Sorted Array : " , arr1);