/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
    const sortedNums = nums.slice().sort((a, b) => b - a);
    const smallerCount = {};
    const result = [];

    sortedNums.forEach((num, index) => {
        smallerCount[num] = nums.length - index - 1;
    });

    nums.forEach((num) => {
        result.push(smallerCount[num]);
    });

    return result;
};
