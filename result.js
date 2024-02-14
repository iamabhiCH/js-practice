// Write a function that takes sum and prints it in passive tense

function printSumInPassiveTense(sum) {
    if (typeof sum !== 'number') {
        console.error('Input is not a number');
        return;
    }

    const passiveSentence = `The sum was calculated and is ${sum}.`;
    console.log(passiveSentence);
}

// Example usage:
const mySum = 15 + 20;
printSumInPassiveTense(mySum);
