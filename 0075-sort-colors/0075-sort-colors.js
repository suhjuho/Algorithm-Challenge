/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    const countNums = { 0: 0, 1: 0, 2: 0 };
    
    nums.forEach((num) => {
        countNums[num] += 1;
    });

    for (let i = 0; i < nums.length; i += 1){
        if (countNums[0] > 0) {
            nums[i] = 0;
            countNums[0] -= 1;
        } else if (countNums[1] > 0) {
            nums[i] = 1;
            countNums[1] -= 1;
        } else {
            nums[i] = 2;
        }
    }

    return nums;
};
