/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const history = new Map();

    for (const num of nums) {
        if (history.get(num)) {
            return true;
        } else {
            history.set(num, "true")
        }
    };

    return false;
};
