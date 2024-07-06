function solution(dirs) {
    let answer = 0;
    let currentPosition = [0, 0];
    const directions = {
        "U": [0, 1],
        "D": [0, -1], 
        "R": [1, 0], 
        "L": [-1, 0]
    };
    const moveHistory = {};
    
    for(const dir of dirs) {
        const direction = directions[dir];
        const postPosition = [currentPosition[0] + direction[0], currentPosition[1] + direction[1]];
        
        if (postPosition[0] > 5 || postPosition[0] < -5 || postPosition[1] < -5 || postPosition[1] > 5) {
            continue;
        }
        
        const forwardMove = currentPosition.join("") + postPosition.join("");
        const backwardMove = postPosition.join("") + currentPosition.join("");
        
        if (!moveHistory[forwardMove] || !moveHistory[backwardMove]) {
            moveHistory[forwardMove] = true;
            moveHistory[backwardMove] = true;
            
            answer += 1;
        }
        
        
        currentPosition = postPosition;
    }
    
    
    return answer;
}
