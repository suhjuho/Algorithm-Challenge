function solution(k, tangerine) {
    let answer = 0;
    const counts = {};
    
    tangerine.forEach((size) => {
        counts[size] = (counts[size] || 0) + 1;
    });
    
    const tangerineCounts = Object.values(counts).sort((a, b) => b - a);
    
    for (const count of tangerineCounts) {
        answer += 1;
        
        if (k > count) {
            k -= count;
        } else {
            break;
        }
    }
    
    return answer;
}
