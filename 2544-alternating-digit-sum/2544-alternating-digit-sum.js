/**
 * @param {number} n
 * @return {number}
 */
const alternateDigitSum = function(n) {
    let result = 0;

    n.toString().split("").forEach((number, index) => {
        if (index % 2 === 0) {
             result += parseInt(number);
        } else {
            result -= parseInt(number);
        }
    });

    return result;
};
