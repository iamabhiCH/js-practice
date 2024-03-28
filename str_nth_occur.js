// WAP to get nth occurrence of a string in JavaScript.

let str = "abhishek abcd ab aby abhi iamabhi heyabcd iabhi";
let searchString = "ab";

let oc = 3;
console.log(
    oc + "rd occurance of a '" + searchString + "' in " + str + "'."
);

function getPosition(str, sbstr, i) {
    return str.split(sbstr, i).join(sbstr).length;
}

function findNthOccurrence() {
    console.log(getPosition(str, searchString, oc));
}

findNthOccurrence();
