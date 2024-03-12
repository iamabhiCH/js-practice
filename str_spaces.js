// WAP to replace multiple spaces with single space in JavaScript.

let str1 = "Hello,    I am    Abhishek         Yadav";
console.log(str1);

let str = str1.replace(/\s+/g, ' ');
console.log(str);