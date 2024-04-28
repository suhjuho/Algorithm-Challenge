/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
    const result = [];

    function getPermutations(numbers, visited) {
        if (numbers.length === nums.length) {
            result.push(numbers.slice());
            return;
        }

        for (let i = 0; i < nums.length; i += 1) {
            if (!visited[i]) {
                numbers.push(nums[i]);
                visited[i] = true;
                getPermutations(numbers, visited)
                numbers.pop();
                visited[i] = false;
            }
        }
    }    

    getPermutations([], Array(nums.length).fill(false));

    return result;
};
