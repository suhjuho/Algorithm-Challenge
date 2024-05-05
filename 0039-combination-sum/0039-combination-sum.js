/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const combinations = [];

    candidates.sort((a, b) => a - b);

    function findCombination(start, combination, target, sum) {
        if (sum > target || start >= candidates.length) {
            return;
        }

        if (target === sum) {
            combinations.push(combination.slice());
            return;
        }

        for (let i = start; i < candidates.length; i += 1) {
            findCombination(i, [...combination, candidates[i]], target, sum + candidates[i]);
        }
    }

    findCombination(0, [], target, 0);

    return combinations;
};
