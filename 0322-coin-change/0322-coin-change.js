/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    const counts = [0, ...Array(amount).fill(amount + 1)];

    coins.forEach((coin) => {
        for (let i = coin; i <= amount; i += 1) {
            counts[i] = Math.min(counts[i], 1 + counts[i - coin]);
        }
    });

    return counts[amount] > amount ? -1 : counts[amount];
};
