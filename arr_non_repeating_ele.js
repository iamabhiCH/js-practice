// WAP to create an array containing non-repeating elements in JavaScript.

const n = 7;

const arr = [];
if(n == 0){
    console.log(null)
}

do{
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if(!arr.includes(randomNum)){
        arr.push(randomNum);
    }

}while(arr.length < n)

console.log(arr);