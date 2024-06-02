function solution(numbers, target) {
    let answer = 0;
    
    function getTargetNumber(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                answer += 1;
            }
            
            return;
        }
        
        getTargetNumber(index + 1, sum + numbers[index]);
        getTargetNumber(index + 1, sum - numbers[index]);
    }
    
    getTargetNumber(0, 0);
    
    return answer;
}