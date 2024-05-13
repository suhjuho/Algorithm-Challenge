/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {
    const len = nums.length;
    const step = k % len;
    const visited = Array(len).fill(false);

    let currentIndex = 0;
    let currentValue = nums[currentIndex];
    let count = 0;

    while (count < len) {
        const newIndex = (currentIndex + step) % len;
        const nextValue = nums[newIndex];

        if (visited[newIndex]) {
            currentIndex = (currentIndex + 1) % len;
            currentValue = nums[currentIndex];
            continue;
        }

        nums[newIndex] = currentValue;  
        currentIndex = newIndex;
        currentValue = nextValue;
        visited[newIndex] = true;
        count += 1;
    }
};
