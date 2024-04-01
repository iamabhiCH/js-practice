/*
    JavaScript Program to Print Number Pattern
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
*/

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter number of line of the pattern : "));

for(let i = 1; i <= num; i++){
    let s = '';
    for(let j = 1; j <= i; j++){
        s += j+ ' ';
    }
    console.log(s);
}