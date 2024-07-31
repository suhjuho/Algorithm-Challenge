function solution(maps) {
    const maze = maps.map((row) => row.split(""));
    const [rows, cols] = [maze.length, maze[0].length];
    const start = [0, 0];
    const lever = [0, 0];

    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (maze[y][x] === "S") {
                [start[0], start[1]] = [y, x];
            } else if (maze[y][x] === "L") {
                [lever[0], lever[1]] = [y, x];
            }
        }
    }
    
    function findPosition(maze, startPos, goal) {
        const queue = [[...startPos, 1]];
        const mazeCopied = maze.map((row) => [...row]);
        
        while (queue.length) {
            const [y, x, step] = queue.shift();
            
            for (let i = 0; i < 4; i++) {
                const [ny, nx] = [y + dy[i], x + dx[i]];
                
                if (0 <= ny && ny < rows && 0 <= nx && nx < cols) {
                    if (mazeCopied[ny][nx] === goal) {
                        return step;
                    }
                    
                    if (mazeCopied[ny][nx] !== "X") {
                        queue.push([ny, nx, step + 1]);
                        mazeCopied[ny][nx] = "X";
                    }
                }
            }
        }
        
        return -1;
    }
    
    const [findLever, findEnd] = [findPosition(maze, start, "L"), findPosition(maze, lever, "E")];
    
    if (findLever === -1 || findEnd === -1) {
        return -1;
    }
    
    return findLever + findEnd;
}
