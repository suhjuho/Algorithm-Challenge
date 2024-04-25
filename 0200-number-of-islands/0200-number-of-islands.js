/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
    let island = 0;
    const [rows, cols] = [grid.length, grid[0].length];

    for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
            if (grid[y][x] === "1") {
                markLand(grid, [y, x]);
                island += 1;
            }
        }
    }
    
    return island;
};

function markLand (grid, startPoint) {
    const [rows, cols] = [grid.length, grid[0].length];
    const queue = [startPoint];
    const [dy, dx] = [[-1, 0, 1, 0], [0, 1, 0, -1]];

    while (queue.length > 0) {
        const [row, col] = queue.pop();

        for (let i = 0; i < 4; i += 1) {
            const [nextRow, nextCol] = [row + dy[i], col + dx[i]];

            if (0 > nextRow || nextRow >= rows || 0 > nextCol || nextCol >= cols) {
                continue;
            }

            if (grid[nextRow][nextCol] === "1") {
                grid[nextRow][nextCol] = "0";
                queue.push([nextRow, nextCol]);
            }
        }
    }
}
