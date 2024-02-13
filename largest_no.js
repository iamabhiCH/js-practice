// WAP to print the biggest number in array
// WAP that prints all the male people's first name given a complex object
// WAP that reverse all the elements of array

let arr = [123,452,123,11414,14223, 20998,23,4567,45600, 56778,112780];
let v = arr[0];

for(let i = 0; i < arr.length; i++){
    if(arr[i] >= v){
        v = arr[i];
    }
}

console.log("The largest no of this array is : "+ v);