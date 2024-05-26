/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function(nums) {
    const result = Array(nums.length - 1).fill(false);
    result.push(true);

    for (let i = nums.length - 2; i >= 0; i -= 1) {
        let isReachable = false;

        for (let j = Math.min(i + nums[i], nums.length - 1); j >= i; j -= 1) {
            if (result[j]) {
                isReachable = true;
                break;
            }
        }

        result[i] = isReachable;
    }

    return result[0];
};
