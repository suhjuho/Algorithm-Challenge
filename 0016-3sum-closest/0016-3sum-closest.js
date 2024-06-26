/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < nums.length - 2; i += 1) {
        let [left, right] = [i + 1, nums.length - 1];
        
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === target) {
                return sum; 
            }

            if (sum < target) {
                left += 1;
            } else {
                right -= 1;
            }

            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum;
            }
            
        }
    }

    return result;
};
