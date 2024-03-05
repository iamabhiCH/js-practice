// WAP to Find the First Non-Repeated Element in an Array.

let arr = [5,8,5,3,4,8];
let x = arr.length;
let flag = false;

for(let i = 0; i < x; i++){
    let j;
    for(j = 0; j < x; j++){
        if(i != j && arr[i] == arr[j]){
            break;
        }
    }
    if(j == x){
        console.log("The first non repeated element is : ",arr[i]);
        flag = true;
        break;
    }
}

if(flag){
    console.log("All elements in the array are repeated.");
}