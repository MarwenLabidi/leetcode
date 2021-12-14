var getPermutation = function(n, k) {
    const numbers = [];
    const factorial = new Array(n + 1);
    let str = '';
    let sum = 1;
    factorial[0] = 1;
    for(let i = 1; i <= n; i++) {
        sum *= i;
        factorial[i] = sum;
    }
    
    for(let i = 1; i <= n; i++) {
        numbers.push(i);
    }
    
    k--;
    
    for(let i = 1; i <= n; i++) {
        let index = Math.floor(k/factorial[n - i]);
        str += numbers[index].toString();
        numbers.splice(index, 1);
        k -= index * factorial[n - i];
    }
    
    return str;
};