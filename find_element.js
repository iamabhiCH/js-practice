// WAP to find the existing element in an array an print its index

let arr = [12,34,56,78,90,123,445,678,901,4456];
let fe = 678;
let x = false;
let tmp = 0;

for(let i = 0; i<arr.length; i++){
    if(arr[i] == fe){
        x = true;
        tmp = i;
    }
}

if(x == true){
    console.log("Your element is present in array at index "+tmp);
}
else{
    console.log("Your element is not present in array.");
}