// WAP to Rearrange Array such that Even Positioned are Greater than Odd.

let arr = [2, 4, 3, 5, 6];
let newArr = arrRearrange(arr);

function arrRearrange(arrayInput) {
    const n = arrayInput.length;
    const descSortedArray = arrayInput.slice().sort((a, b) => b - a);
    const rearrangedArray = [];
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            rearrangedArray[i] = descSortedArray.pop();
        } else {
            rearrangedArray[i] = descSortedArray.shift();
        }
    }
    return rearrangedArray;
}

console.log(newArr);
