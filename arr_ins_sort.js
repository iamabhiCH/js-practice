// Javascript for insertion  sort

const arr = [67,12,45,7,30,80,56,1,22,59];

function insertionSort(arr){
    let n = arr.length;
    let ab;

    let i,j;
    for(i = 0; i < n; i++){
        ab = arr[i];
        j = i - 1;
        for(j; j >= 0, arr[j]>ab; --j){
            arr[j+1] = arr[j];
        }
        arr[j+1] = ab;
    }
}


console.log("Original Array is : ",arr);
insertionSort(arr);
console.log("Selection Array is : ",arr);
