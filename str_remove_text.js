// WAP to remove text from a string in JavaScript

let str = "bskjbsvjhsvsknvbsdh xczvgsdhvbhsdvbjhsvhjshvsdhvz hjsvjhvhcvjhvvsdj";

function removeText(str){
    console.log("Original String  : "+str);
    
    let str1 = str.replace("xczvgsdhvbhsdvbjhsvhjshvsdhvz", "");
    return str1;
}

console.log("New String : "+removeText(str));