// WAP to find unique characters of a string in JavaScript.

let str1 = "Abhishek Yadav";
let str2 = "iamabhiCH";

function findUnique(str) {
    let uniq = "";
 
    for (let i = 0; i < str.length; i++) {
        if (uniq.includes(str[i]) === false) {
            uniq += str[i]
        }
    }
    return uniq;
}

console.log(findUnique(str1));
console.log(findUnique(str2));
console.log(findUnique("ka haal baa"));