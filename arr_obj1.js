// WAP to Find Index of an Object by Key and Value in an Array.

let nameArr = [
    {course: "Frontend Development", price: 3899},
    {course: "Backend Development", price: 4589},
    {course: "DevOps", price: 6500},
    {course: "FullStack Development", price: 10999},
    {course: "Data Science Bootcamp", price: 15999}
]

let k = "course";
let l = "DevOps";
let ind = -1;

for(let i = 0; i < nameArr.length; i++){
    if(nameArr[i][k] === l){
        ind = i;
        break;
    }
}

console.log(ind);