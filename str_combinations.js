// WAP to generate all combinations of a string in JavaScript.

let cnt = 0;
let possibleCombinations = (str) => {
    let combinations = [];

    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            combinations.push(str.slice(i,j));
            cnt++;
        }
    }
    return combinations;
}

console.log(possibleCombinations("Abhishek Yadav"));
console.log("The total possible combinations of given string is : "+cnt);