/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const result = [];
    const length = nums.length;

    const formerProduct = new Array(length).fill(1);
    const letterProduct = new Array(length).fill(1);

    for (let i = 1; i < length; i += 1) {
        formerProduct[i] = formerProduct[i - 1] * nums[i - 1];
    }
    
    for (let i = length - 2; i >= 0; i -= 1) {
        letterProduct[i] = letterProduct[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < length; i += 1) {
        result.push(letterProduct[i] * formerProduct[i]);
    }

    return result;
};
