// WAP to Find k Most Occurrences in the Given Array

function frequentElements(arr, k) { 
	const frequencyMap = new Map(); 
	
	for (let i = 0; i < arr.length; i++) { 
		const num = arr[i]; 
		frequencyMap.has(num) 
			? frequencyMap. 
				set(num, frequencyMap.get(num) + 1) 
			: frequencyMap.set(num, 1); 
	} 
	const sortedEntries = 
		[...frequencyMap.entries()] 
		.sort((a, b) => b[1] - a[1]); 
	const result = []; 
	for (let i = 0; i < k && 
			i < sortedEntries.length; i++) { 
			result.push(sortedEntries[i][0]); 
	} 
	return result; 
} 
const arr = [3, 1, 4, 4, 5, 2, 6, 1]; 
const k = 2; 
const kMostFrequent = frequentElements(arr, k); 
console.log(...kMostFrequent);
