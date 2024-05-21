/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function(matrix) {
    const zeroPosition = [];

    for (let y = 0; y < matrix.length; y += 1) {
        for (let x = 0; x < matrix[0].length; x += 1) {
            if (matrix[y][x] === 0) {
                zeroPosition.push([y, x]);
            }
        }
    }

    zeroPosition.forEach((pos) => {
        const [y, x] = pos;

        for (let nx = 0; nx < matrix[0].length; nx += 1) {
            matrix[y][nx] = 0;  
        }

        for (let ny = 0; ny < matrix.length; ny += 1) {
            matrix[ny][x] = 0;  
        }
    });
};
