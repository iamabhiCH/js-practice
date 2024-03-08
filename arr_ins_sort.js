// Javascript for insertion  sort

const arr = [67,12,45,7,30,80,56,1,22];

function insertionSort(arr){
    let n = arr.length;
    let k;

    let i,j;
    for(i = 0; i < n; i++){
        k = arr[i];
        j = i - 1;
        for(j; j >= 0, arr[j]>k; --j){
            arr[j+1] = arr[j];
        }
        arr[j+1] = k;
    }
}


console.log("Original Array : ",arr);
insertionSort(arr);
console.log("Selection Array : ",arr);