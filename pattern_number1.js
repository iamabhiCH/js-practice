/*
    JavaScript Program to Print Number Pattern
            1          
          1 2 3        
        1 2 3 4 5      
      1 2 3 4 5 6 7    
    1 2 3 4 5 6 7 8 9  
*/

const prompt = require('prompt-sync')();

const num = parseInt(prompt("Enter the line of the pattern : "));

for(let i = 1; i < num; i++){
    let arr = [];
    let cnt = 1;

    for(let j = 1; j < 2 * num; ++j){
        if(i + j >= num + 1 && (i >= j - num + 1)){
            arr.push(cnt);
            cnt++;
        }
        else{
            arr.push(' ');
        }
    }
    console.log(arr.join(' '));
}