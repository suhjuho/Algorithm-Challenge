/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let index = 0;
    const numbers = {};

    for (let i = 0; i < nums.length; i += 1) {
        if (numbers[nums[i]]) {
            continue;
        }
        
        numbers[nums[i]] = true;
        nums[index] = nums[i];
        index += 1;
    }   

    return index;
};
