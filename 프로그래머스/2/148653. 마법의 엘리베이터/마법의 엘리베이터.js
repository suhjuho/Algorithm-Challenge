function solution(storey) {
    let answer = 0;
    const floor = ("0" + storey.toString()).split("").map(Number);
    
    while (floor.length > 0) {
        const number = floor.pop();
        
        if (number <= 5) {
            if (number === 5 && floor[floor.length - 1] >= 5) {
                answer += 10 - number;
                floor[floor.length - 1] += 1;
            } else {
                answer += number;
            }
            continue;
        } 
        
        if (number < 10) {
            answer += 10 - number;
            floor[floor.length - 1] += 1;
            continue;
        }
      
        if (number === 10) {
            floor[floor.length - 1] += 1;
        } 
      
    }
     
    return answer;
}
