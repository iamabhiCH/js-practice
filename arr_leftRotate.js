// WAP for Left Rotate by One in an Array.

arr = [6,5,4,3,2,1];

function arrRotation(arr){
    if(arr.length == 1){
        return arr;
    }

    return arr.map((_, index, array) =>
        array[(index + 1) % array.length]);
} 

const res = arrRotation(arr);

console.log("Original Array : " + arr);
console.log("Array after Left Rotation : "+res);
