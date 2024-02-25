// WAP to Merge two Sorted Arrays into a Single Sorted Array.

const arr1 = [1,12,23,35,49];
const arr2 = [14,26,37,48];

function mergeTwoSortedArray(arr1, arr2){
    let arr4 = arr1.reduce(
        (outputVar, arr1Ele) => {
            while( arr2.length && arr2[0] < arr1Ele){
                outputVar.push(arr2.shift());
            }
            outputVar.push(arr1Ele);
            return outputVar;
        },
        []
    );
    return arr4.concat(arr2);
}

const arr3 = mergeTwoSortedArray(arr1, arr2);
console.log(arr3);