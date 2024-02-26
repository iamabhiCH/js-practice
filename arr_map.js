// mapObj to array in js

const mapObj = new Map();

mapObj.set(1,'Abhishek')
mapObj.set(2,'Akash')
mapObj.set(3,'Manish')
mapObj.set(4,'Shahsi')

console.log(mapObj);

let arr = [...mapObj].map((e) => e)

console.log(arr);