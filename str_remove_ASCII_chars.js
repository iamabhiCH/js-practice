// WAP to remove all Non-ASCII characters from the string using JavaScript 

let str = "Abhish©©©ek??Yadav ©©®®®iam££abhi ";
console.log(str);

function removeNonASCIIchars(){
    str = str.replace(/[^\x00-\x7F]/g, "");
    console.log(str);
}

removeNonASCIIchars();