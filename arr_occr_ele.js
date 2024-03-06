// JavaScript Program to Find the Most Frequently Occurring Element in an Array

let arr = [12,45,67,34,34,2,11,34];

function mostOccrElement(arr){
    const cnt = arr.reduce((ac, num) => {
        ac[num] = (ac[num] || 0) + 1;
        return ac;
    }, {}); 

    return Object.keys(cnt).reduce((a,b) =>
        (cnt[a] > cnt[b] ? a : b)
    );
}

console.log(mostOccrElement(arr));