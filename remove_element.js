// WAP to remove falsy element from the array

let arr = [23, 0, "abhi", false, true, NaN, 12, "hi", undefined, [], ""];
let arr1 = [];

for(let i = 0; i <= arr.length; i++){
    if(arr[i]){
        arr1.push(arr[i]);
    }
}

console.log(arr1);