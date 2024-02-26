// WAP to Determine the Frequency of Elements in an Array and Represent it as an Object.

const arr1 = [1,1,2,4,4,3,3,4,5,4,4,4,3,3];

function elementFrequencies(arr){
    const freq = {};

    for(const i of arr){
        if(freq[i]){
            freq[i]++;
        }
        else{
            freq[i] = 1;
        }
    }
    return freq;
}

const resArr = elementFrequencies(arr1);
console.log(resArr);