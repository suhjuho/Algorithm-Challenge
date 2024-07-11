function solution(jobs) {
    let index = 0;
    let time = 0;
    let total = 0;
    const length = jobs.length;
    
    jobs.sort((a, b) => a[0] - b[0]);
    
    const taskQueue = [];
    
    while (index < jobs.length || taskQueue.length > 0) {
        if (index < jobs.length && time >= jobs[index][0]) {
            taskQueue.push(jobs[index]);
            index += 1;
            
            taskQueue.sort((a, b) => a[1] - b[1]);
            continue;
        }
        
        if (taskQueue.length > 0) {
            const task = taskQueue.shift();
            
            total += time - task[0] + task[1];
            time += task[1];
        } else {            
            time = jobs[index][0];
        }
    }
    
    return Math.floor(total / length);
}
