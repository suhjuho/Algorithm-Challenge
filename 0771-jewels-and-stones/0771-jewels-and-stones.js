/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = function(jewels, stones) {
    const jewelMap = {};
    let result = 0;

    jewels.split("").forEach((jewel) => {
        jewelMap[jewel] = true;
    });

    stones.split("").forEach((stone) => {
        if (jewelMap[stone]) result += 1;
    });

    return result;
};
