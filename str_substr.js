// WAP to find substring of a string

const str = "Hello, I am abhishek yadav";

// first method
console.log(str.substring(0, 4));

// second method
console.log(str.substr(0, 15));

// third method
console.log(str.slice(0, 13));

// fourth method

let fakeStr = "";
for(let i = 0; i < 16; i++){
    fakeStr += str[i];
}
console.log(fakeStr);