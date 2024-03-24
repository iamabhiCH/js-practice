// WAP to check a given string is an anagram of another string in JavaScript.

let str1 = "abcd";
let str2 = "dcba";

function  isAnagram(str1, str2){
    if(str1.length != str2.length){
        return  false;
    }

    let a = str1.split('').sort().join("");
    let b = str2.split('').sort().join("");

    let res = (a === b);
    return res;
}


console.log(isAnagram(str1,str2));