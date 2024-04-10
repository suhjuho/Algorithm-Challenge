/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
    if (mat.length === 0 || mat[0].length === 0)
        return [];

    const matrix = mat.map((row) => [...row]);
    const [colLength, rowLength] = [matrix.length, matrix[0].length];
    const queue = [];
    
    for (let i = 0; i < colLength; i += 1) {
        for (let j = 0; j < rowLength; j += 1) {
            if (matrix[i][j] === 0) {
                queue.push([i, j]);
            } else {
                matrix[i][j] = colLength * rowLength;
            }
        }
    }
    
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    
    while (queue.length > 0) {
        const [y, x] = queue.shift();

        for (let i = 0; i <= 4; i += 1) {
            const [ny, nx] = [y + dy[i], x + dx[i]];

            if (0 <= ny && ny < colLength && 0 <= nx && nx < rowLength && matrix[ny][nx] > matrix[y][x] + 1) {
                queue.push([ny, nx]);
                matrix[ny][nx] = matrix[y][x] + 1;
            }
        }
    }
    
    return matrix;
};
