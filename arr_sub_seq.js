// WAP  to find the Longest Consecutive Sequence of Numbers in an Array

let arr = [32,56,78,21,57,34,32,20,79,90,25];

function longestSubSeq(arr){
    if(arr == null || arr.length == 0){
        return 0;
    }

    let set = new Set(arr);
    let cnt = 0;

    for(let tmp of arr){
        if(!set.has(tmp -1)){
            let count = 0;
            while(set.has(count + tmp)){
                count++;
            }
            cnt = Math.max(
                cnt,
                count
            );
        }
    }
    return cnt;
}

console.log(longestSubSeq(arr));