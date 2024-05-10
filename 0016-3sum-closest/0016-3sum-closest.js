/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    const numbers = nums.slice().sort((a, b) => a - b);
    let result = numbers[0] + numbers[1] + numbers[2];

    for (let i = 0; i < numbers.length - 2; i += 1) {
        let [left, right] = [i + 1, numbers.length - 1];
        
        while(left < right) {
            const sum = numbers[i] + numbers[left] + numbers[right];

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
