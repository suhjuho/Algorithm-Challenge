/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const numCounts = {};

    nums.forEach((num) => {
        if (numCounts[num]) {
            numCounts[num] += 1;
        } else {
            numCounts[num] = 1;
        }
    });

    for(const numCount of Object.entries(numCounts)) {
        const [num, count] = numCount;

        if (count === 1) {
            return num;
        }
    }
};
