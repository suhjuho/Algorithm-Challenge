function solution(maps) {
    const dy = [1, -1, 0, 0];
    const dx = [0, 0, 1, -1];
    const [rows, cols] = [maps.length, maps[0].length];
    const queue = [[0, 0, 1]];        

    while(queue.length) {
        const [y, x, step] = queue.shift();

        if(y === rows - 1 && x === cols - 1) {
            return step;
        }

        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if(ny >= 0 && ny < rows && nx >= 0 && nx < cols && maps[ny][nx] === 1) {
                queue.push([ny, nx, step + 1]);
                maps[ny][nx] = 0;
            }
        }
    } 
    
    return -1;
}
