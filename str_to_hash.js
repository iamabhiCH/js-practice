//  How to create hash from string in JavaScript

let str1 = "Abhishek Yadav";

function strToHash(str){
    let hs = 0;

    if(str.length == 0) return hs;

    for(let i = 0; i < str.length; i++){
        ch = str.charCodeAt(i);
        hs = ((hs << 5) - hs) + ch;
        hs = hs & hs;
    }
    return hs;
}

console.log(strToHash(str1));