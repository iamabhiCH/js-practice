// WAP to create half of the string in uppercase and the other half in lowercase.

let str = "abhishekyadav";
let len = str.length;

let firstHalfStr = '';
let secondHalfStr = '';

for(let i = 0; i < Math.ceil(len/2); i++) {
    firstHalfStr += str[i];
}
for(let i = Math.ceil(len / 2); i < len; i++) {
    secondHalfStr += str[i];
}

let newStr = firstHalfStr.toLocaleUpperCase() + secondHalfStr.toLowerCase();
console.log("New String: ",newStr);