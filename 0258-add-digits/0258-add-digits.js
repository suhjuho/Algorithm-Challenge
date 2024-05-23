/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function(num) {
    let nums = num.toString().split("");
    let result;

    if (num < 10) {
        return num;
    }

    while (nums.length > 1) {
        result = 0;
        nums.forEach((number) => {
            result += parseInt(number);
        });

        nums = result.toString().split("");
    }

    return result;
};
