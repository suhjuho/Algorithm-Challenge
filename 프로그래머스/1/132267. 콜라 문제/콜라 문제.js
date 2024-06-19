function solution(a, b, n) {
    let total = 0;
    let left = n;
    
    while (left >= a) {
        total += Math.floor(left / a) * b;
        left -= Math.floor(left / a) * (a - b);
    }
    
    return total;
}
