//WAP to print unique elements from two unsorted arrays using JavaScript.

let arr1 = [23,45,67,98,27,77,91,34,3,13];
let arr2 = [45,21,56,98,23,77,78,91,3,1];

let unqArr = [];

function findUnqElements(arr1, arr2, unqArr){
    for(let i = 0; i < arr1.length; i++){
        let flg = 0;
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr2.splice(j,1);
                j--;
                flg = 1;
            }
        }

        if(flg == 0){
            unqArr.push(arr1[i]);
        }
    }
    unqArr.push(arr2);
    return unqArr;
}

console.log("Unique elements in the two arrays are: "+ findUnqElements(arr1, arr2, unqArr).flat());