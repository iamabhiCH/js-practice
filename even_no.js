// WAP that prints all the even numbers in an array

let arr = [12,34,56,78,902,1121,6721,9981];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    }
}