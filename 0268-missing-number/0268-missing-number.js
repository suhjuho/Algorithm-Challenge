/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const len = nums.length;
    const existNumber = {};

    for (let i = 0; i <= len; i += 1) {
        existNumber[i] = false;
    }

    nums.forEach((num) => {
        existNumber[num] = true;
    });

    let result;

    Object.entries(existNumber).forEach((el) => {
        if(!el[1]) {
            result = el[0];
        }
    });

    return result;
};
