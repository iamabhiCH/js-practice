// WAP to Find Largest Subarray with a Sum Divisible by k

const arr = [12,3,4,90,30,1];
let k = 1;

function findLargestSubArray(arr, k){
    let ml = 0;

    for(let s = 0; s < arr.length; s++){
        let cs = 0;
        for(let e = s; e < arr.length; e++){
            cs += arr[e];

            if(cs % k === 0 && (e - s + 1) > ml){
                ml = e - s + 1;
            }
        }
    }
    return ml;
}

console.log(findLargestSubArray(arr, k));