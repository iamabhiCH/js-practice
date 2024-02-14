// Write a function that displays this result in the pretty format

function displaySumInPrettyFormat(sum) {
    if (typeof sum !== 'number') {
        console.error('Input is not a number');
        return;
    }

    const prettyFormattedResult = `
        ╔════════════════════════════╗
        ║     Pretty Formatted Sum    ║
        ╠════════════════════════════╣
        ║   The sum is: ${sum}       ║
        ╚════════════════════════════╝
    `;
    console.log(prettyFormattedResult);
}

// Example usage:
const mySum = 15 + 20;
displaySumInPrettyFormat(mySum);
