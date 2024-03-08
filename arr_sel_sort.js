// Javascript for selection sort

const arr = [45,7,23,90,12,1,30];

function swap(arr, x,y){
    [arr[x],arr[y]] = [arr[y], arr[x]];
}

function selectionSort(arr){
    let x = arr.length;
    let mn;

    for(let i = 0; i < x-1; i++){
        mn = i;
        for(let j = i+1; j < x; j++){
            if(arr[j] < arr[mn]){
                mn = j;
            }
        }
        if(mn != 1)
        swap(arr,i,mn);
    }
}

console.log("Original array : " + arr);
selectionSort(arr);
console.log("Sorted Array : " + arr);