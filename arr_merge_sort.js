// Javascript program for merge sort 

const arr = [24, 57, 8, 99, 12, 5];

function merge(arr, left, middle, right) {
    let x1 = middle - left + 1;
    let x2 = right - middle;

    let arr1 = new Array(x1);
    let arr2 = new Array(x2);

    for (let i = 0; i < x1; ++i) {
        arr1[i] = arr[left + i];
    }
    for (let i = 0; i < x2; ++i) {  // Fix here
        arr2[i] = arr[middle + 1 + i];
    }

    let i = 0, j = 0, k = left;

    while (i < x1 && j < x2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }

    while (i < x1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < x2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

function mergeSort(arr, x, y) {
    if (x >= y) { return }

    let md = x + parseInt((y - x) / 2);
    mergeSort(arr, x, md);
    mergeSort(arr, md + 1, y);
    merge(arr, x, md, y);
}

console.log("Original Array : " + arr);
mergeSort(arr, 0, arr.length - 1);
console.log("Sorted Array : " + arr);