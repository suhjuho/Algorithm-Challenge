/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    const count = {};
    let result = 0;

    s.split("").forEach((char) => {
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    });

    Object.values(count).forEach((c) => {
        result += Math.floor(c / 2) * 2;
    });

    return s.length > result ? result + 1 : result;
};
