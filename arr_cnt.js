// WAP to Count Unequal Element Pairs from the Given Array

const countUnequalPairs = ( 
	inputArray) => { 
	inputArray.sort((a, b) => a - b); 
	let unEqualPairsCount = 0; 
	for ( 
		let i = 0; 
		i < inputArray.length;) { 
		let currentElement = 
			inputArray[i]; 
		let j = i + 1; 
		for (let num of inputArray.slice(j)) { 
			if ( 
				num !== currentElement) { 
				unEqualPairsCount++; 
			} 
		} 
		i = j;} 
	return unEqualPairsCount; 
}; 

const testArray = [1, 1, 2]; 
console.log( 
	countUnequalPairs(testArray) 
);
