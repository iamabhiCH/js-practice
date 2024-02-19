// WAP to splice an array without mutating the original Array.
// By the help of splice method we extract the elements of array.

let myArr = ["I", "Me", "Mine", "Mera", "Hamara", "Hum"]

let extractArr = myArr.splice(4,6);
console.log(extractArr);
console.log(myArr)