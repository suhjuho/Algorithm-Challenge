/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function(m, n) {
     return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}
