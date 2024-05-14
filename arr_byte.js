// WAP to Convert Byte Array to JSON.

let arr = new Uint8Array([65,66,72,73,83,72,69,75,689,342,2407]);
let txtDecoder = new TextDecoder();
let res = txtDecoder.decode(arr);

console.log(res);
