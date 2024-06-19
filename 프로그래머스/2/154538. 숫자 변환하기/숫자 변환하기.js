function solution(x, y, n) {
    let step = -1;
    const queue = [x];
    const visited = {};
    
    while (true) {
        step += 1;
        const tempQueue = [];
        
        if (queue.length === 0){
            break;
        }
        
        while(queue.length > 0) {
            const number = queue.pop();
            
            if (number === y) {
                return step;
            }
            
            if (visited[number] || number > y) {
                continue;
            }
            
            visited[number] = true;
            tempQueue.push(number + n);
            tempQueue.push(number * 2);
            tempQueue.push(number * 3);
        }
        
        tempQueue.forEach((num) => {
            queue.push(num);
        });
        
    }
    
    return -1;
}
