/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
    const result = Array(nums.length).fill(0);
    let evenPointer = 0;
    let oddPointer = 1;

    nums.forEach((num) => {
        if (num > 0) {
            result[evenPointer] = num;
            evenPointer += 2;
        } else {
            result[oddPointer] = num;
            oddPointer += 2;
        }
    });

    return result;
};
