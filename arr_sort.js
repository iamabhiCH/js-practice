// WAP to Sort an Associative Array by its Values

let arr = [];

arr.push({name:'Abhishek', age:'21'});
arr.push({name:'Abhinav', age:'22'});
arr.push({name:'Akash', age:'23'});
arr.push({name:'Manish', age:'21'});
arr.push({name:'Roshan', age:'20'});

let sortedArrList = arr.sort(function (a,b){
    return a.age - b.age;
});

console.log(sortedArrList);