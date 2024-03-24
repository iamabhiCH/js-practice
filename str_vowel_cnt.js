// WAP to get a number of vowels in a string in JavaScript.

let str = "abhishekYAdavabhiABCDIamABHI";

function countVowels(str){
    let v = "aeiouAEIOU";
    let cnt  = 0;

    for(let i = 0; i < str.length;  i++){
        if(v.indexOf(str[i]) != -1){
            cnt++;
        }
    }
    return cnt;
}

console.log("The number of vowels in "+str+" is: "+countVowels(str));