// WAP to Sort an Array using JavaScript when Array Elements has Different Data Types.

const arr = [7,true,"Abhishek",false,24,'Yadav','hahsabdab',29.0123,NaN,"iamabhi.07"];

const arr1 = arr.map(item => String(item));
arr1.sort();

console.log(arr1);
