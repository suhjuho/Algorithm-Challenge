/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const numbers = nums.sort((a, b) => a - b);
    const threeSums = [];

    if (numbers.length < 3) {
        return threeSums;
    }

    for (let i = 0; i < numbers.length - 2; i += 1) {
        if (numbers[i] + numbers[i + 1] + numbers[i + 2] > 0) {
            break;
        }

        if (numbers[i] > 0) {
            break;
        }

        if (i > 0 && numbers[i] === numbers[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = numbers.length - 1;
        
        while (j < k) {
            const threeSum = numbers[i] + numbers[j] + numbers[k];

            if (threeSum === 0) {
                threeSums.push([numbers[i], numbers[j], numbers[k]]);

                while (numbers[j] === numbers[j + 1]) {
                    j += 1;
                }

                while (numbers[k] === numbers[k - 1]) {
                    k -= 1;
                }

                j += 1;
                k -= 1;
            } else if (threeSum > 0) {
                k -= 1;
            } else {
                j += 1;
            }
        }
    }

    return threeSums;
};
