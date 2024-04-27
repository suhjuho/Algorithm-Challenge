/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    const bits = n.toString(2).padStart(32, "0").split("").reverse().join("");
    let result = 0;

    for (let i = 0; i < bits.length; i += 1) {
        if (bits[i] === "1") {
            result += 2 ** (32 - 1 - i);
        }
    }

    return result;
};
