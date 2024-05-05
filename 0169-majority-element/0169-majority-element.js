/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let count = 0;
    let element;

    nums.forEach((num) => {
        if (count === 0) {
            element = num;
            count += 1;
        } else if (element === num) {
            count += 1;
        } else {
            count -= 1;
        }
    });    

    return element;
};
