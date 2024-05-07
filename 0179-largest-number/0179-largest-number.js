/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function(nums) {
    const numbers = nums.map((num) => num.toString());

    numbers.sort((a, b) => parseInt(a + b) > parseInt(b + a) ? -1 : 1);

    if (numbers[0] === "0") {
        return "0";
    }

    return numbers.join("");    
};
