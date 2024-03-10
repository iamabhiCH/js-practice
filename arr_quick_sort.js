// Javascript program for quick sort.

const arr = [11, 89, 24, 56, 78, 9, 91, 10];

function arrayPartition(arr, x, y) {
    let pt = arr[y];
    let i = x - 1;

    for (let j = x; j <= y - 1; j++) {
        if (arr[j] < pt) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[y]] = [arr[y], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, x, y) {
    if (x >= y) {
        return;
    }

    let m = arrayPartition(arr, x, y);
    quickSort(arr, x, m - 1);
    quickSort(arr, m + 1, y); // Fix here
}

console.log("Original Array: " + arr);
quickSort(arr, 0, arr.length - 1);
console.log("Sorted Array: " + arr);