/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const count = {};
    const result = [];

    nums.forEach((num) => {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    });

    Object.entries(count).forEach((el) => {
        if (el[1] >= 2) {
            result.push(el[0]);
        }
    });
    
    return result;
};
