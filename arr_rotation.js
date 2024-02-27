// WAP the Rotation Count in Rotated Sorted array in JavaScript

let arr = [4,5,6,7,8,1,2,3];

function rotationCount(arr){
    let tmp = arr.length;
    let minimumIndex = 0;
    let minVal = arr[0];

    for(let i = 1; i < tmp; i++){
        if(arr[i] < minVal){
            minVal = arr[i];
            minimumIndex = i;
        }
    }

    var rtCnt = minimumIndex % tmp;
    return rtCnt;
}

let x = rotationCount(arr);
console.log(x);