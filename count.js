// WAP that counts from 0 - 1000 and prints it.

let cnt = 0;

for (let i = 0; i <= 1000; i++) {
    cnt += i;
    if (i % 100 == 0) {
        console.log(i);
    }
    else{
        continue;
    }
}

console.log("Count of 0 - 1000 is : " + cnt);
