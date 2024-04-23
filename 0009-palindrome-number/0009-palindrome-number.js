/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const numbers = x.toString().split("");
    const len = numbers.length;

    for (let index = 0; index <= Math.floor(len / 2); index += 1) {
        if (numbers[index] !== numbers[len - 1 - index]) {
            return false;
        }
    }

    return true;
};
