/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    const result = [[]];

    function getCombination(start, subset, subsetLength) {
        if (subset.length >= subsetLength) {
            result.push(subset.slice());
            return;
        }

        for (let i = start; i < nums.length; i += 1) {
            subset.push(nums[i]);
            getCombination(i + 1, subset, subsetLength);
            subset.pop();
        }
    }    

    for (let subsetLength = 1; subsetLength <= nums.length; subsetLength += 1) {
        getCombination(0, [], subsetLength);
    }

    return result;
};
