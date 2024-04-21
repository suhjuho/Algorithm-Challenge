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

    for (const number of Object.entries(existNumber)) {
        if(!number[1]) {
            return number[0];
        }
    }
};
