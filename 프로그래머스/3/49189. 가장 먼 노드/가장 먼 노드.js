function solution(n, edge) {
    const nodes = [];
    const distances = Array(n).fill(n);
    const visited = {};
    let maxDistance = 0;
    
    distances[0] = 0;
    
    for (let i = 0; i < n; i += 1) {
        nodes.push([]);
    }
    
    edge.forEach((vertex) => {
        nodes[vertex[0] - 1].push(vertex[1] - 1);
        nodes[vertex[1] - 1].push(vertex[0] - 1);
    });
    
    const queue = nodes[0].map((el) => [0, el]);
    
    while (queue.length > 0) {
        const [start, end] = queue.shift();
        
        if (end === 0) {
            continue;
        }
        
        if (!visited[end]) {
            distances[end] = Math.min(distances[end], distances[start] + 1);
            maxDistance = Math.max(maxDistance, distances[end]);
            visited[end] = true;
            
            nodes[end].map((el) => [end, el]).forEach((el) => queue.push(el));
        }
    }
    
    let answer = 0;
    
    distances.forEach((distance) => {
        if (distance === maxDistance) {
            answer += 1;
        }
    });
    
    return answer;
}
