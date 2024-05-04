/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    const getWater = (start, end) => (end - start) * Math.min(height[start], height[end]);
    let [startLine, endLine, maxWater] = [0, height.length - 1, 0];

    while (startLine < endLine) {
        const water = getWater(startLine, endLine);

        maxWater = Math.max(maxWater, water);

        if (height[startLine] < height[endLine]) {
            startLine += 1;
        } else {
            endLine -= 1;
        }
    }

    return maxWater;
};
