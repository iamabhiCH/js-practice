// WAP to remove Objects from Associative Array in JavaScript 

function deleteObjects(){
    let arr = new Object();

    arr['key'] = "ABC";
    arr['company'] = "Google";
    arr['name'] = "Manish Y";

    console.log(arr['name']);
    delete arr['name'];
    console.log(arr['name']);
}

deleteObjects();