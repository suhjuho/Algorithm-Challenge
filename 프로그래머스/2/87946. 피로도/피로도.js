function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false);
    
    function exploreAllStage(step, hp) {
        if (step === dungeons.length) {
            return;
        }
        
        for (let i = 0; i < dungeons.length; i += 1) {
            if (!visited[i] && hp >= dungeons[i][0] && hp >= dungeons[i][1]) {
                answer = Math.max(answer, step + 1);
                visited[i] = true;
                exploreAllStage(step + 1, hp - dungeons[i][1]);
                visited[i] = false;
            }
        }
    }
    
    exploreAllStage(0, k);
    
    return answer;
}
