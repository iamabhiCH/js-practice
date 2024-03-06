// JavaScript Program for K-th Largest Sum Contiguous Subarray

let arr = [24,56,-190,70,25,13,9];
let n = arr.length;
let k = 7;

function kthContSubarray(arr, n, k){
    let res = [];
    for(let i = 0; i < n; i++){
        let s = 0;

        for(let j = i; j < n; j++){
            s += arr[j];
            res.push(s);
        }
    }

    res.sort();
    res.reverse();

    return res[k - 1];
}

console.log(kthContSubarray(arr,n,k));