/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    if (n < 3) {
        return n;
    }

    const result = [1, 2];

    for (let i = 2; i < n; i += 1){
        result.push(result[i -2] + result[i - 1]);
    }

    return result[n - 1];
};
