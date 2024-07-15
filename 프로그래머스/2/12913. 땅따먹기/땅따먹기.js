function solution(land) {
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            const prevRow = land[i - 1].slice();
            prevRow.splice(j, 1);
            
            land[i][j] += Math.max(...prevRow);
        }
    }

    return Math.max(...land[land.length - 1]);
}
