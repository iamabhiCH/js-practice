// WAP to create an object from two arrays.

let arr1 = [1,2,3,4,5,6,7]
let arr2 = ["Abhishek","Manish","Roshan","Akash S","Akash M","Abhinav","Chandan Tiwari"]

function convertToObj(a,b){
    if(a.length != b.length || a.length == 0 || b.length == 0){
        return null;
    }

    let myObj = {}

    a.forEach((i,j) =>
    {
        myObj[i] = b[j];
    }); return myObj;
}

console.log(convertToObj(arr1,arr2));
