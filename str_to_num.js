// WAP to convert long number into abbreviated string in JavaScript.


let numb = 1232873422;

console.log(numb);

function convertStr(str){
    let s1 = ["","k","m","b","t"];

    let sNum = Math.floor((""+str). length / 3);
    let val = parseFloat(
        (sNum != 0
            ? str / Math.pow(1000, sNum)
            : str
        ).toPrecision(2)
    );

    if(val % 1 != 0){
        val = val.toFixed(1);
    }

    return val + s1[sNum];
}

console.log(convertStr(numb));