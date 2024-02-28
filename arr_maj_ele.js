// WAP for Finding the Majority Element of an Array

const arr = [2,2,3,4,2,2,5];

function findingMajority(arr){
    const n = arr.length;
    for(let i = 0; i < n; i++){
        let cnt = 0;
        for(let j = 0; j < n; j++){
            if(arr[i] === arr[j]){
                cnt++;
            }
        }
        if(cnt > n / 2){
            return arr[i];
        }
    }
    return null;
}

console.log(findingMajority(arr));