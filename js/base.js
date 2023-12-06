function calculatePowers(arr) {
    let results = [];
    for(let i = 0; i < arr.length; i++) {
        let parts = arr[i].split('^');
        let base = Number(parts[0]);
        let exponent = Number(parts[1]);
        let result = Math.pow(base, exponent);
        results.push(result);
    }
    return results;
}
