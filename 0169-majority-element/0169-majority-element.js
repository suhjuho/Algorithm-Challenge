/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const limit = Math.floor(nums.length / 2);
    const counts = {};

    nums.forEach((num) => {
        if (counts[num]) {
            counts[num] += 1;
        } else {
            counts[num] = 1;
        }
    });

    for (const count in counts) {
        if (counts[count] > limit) {
            return count;
        }
    }
};