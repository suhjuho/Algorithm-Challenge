/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    const result = Array.from(Array(rowsCount), () => Array(colsCount).fill(0));

    for (let i = 0; i < this.length; i += 1) {
        const col = Math.floor(i / rowsCount);
        const row = col % 2 === 0 ? (i % rowsCount) : rowsCount - 1 - (i % rowsCount);

        result[row][col] = this[i];
    } 

    return result;
}
