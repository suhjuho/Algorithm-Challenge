/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
    let indexPointer = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] !== 0) {
            nums[indexPointer] = nums[i];
            indexPointer += 1;
        } 
    }
    
    for (let i = indexPointer; i < nums.length; i += 1) {
        nums[i] = 0;
    }
};
