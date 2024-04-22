// WAP to Find Maximum prft by Buying and Selling a Share at Most Twice using Array

let pr = [12,45,67,89,126,890,6789];
let x = pr.length;

function maxprft(arr, n){
    let prft = new Array(n);
    for(let i = 0; i < n; i++){
        prft[i] = 0;
    }

    let mxPrft = arr[ n - 1];
    for(let i = n - 2; i >= 0; i--){
        if(arr[i] > mxPrft){
            mxPrft = arr[i];
        }
        prft[i] = Math.max(prft[i + 1], mxPrft - arr[i]);
    }

    let mnPrft = arr[0];
    for(let i = 1; i<n; i++){
        if(arr[i] < mnPrft){
            mnPrft = arr[i];
        }
        prft[i] = Math.max(prft[i - 1],prft[i] + (arr[i] - mnPrft)); 
    }

    let res = prft[n - 1];
    return res;
}

console.log("Maximum prft : "+ maxprft(pr,x));
