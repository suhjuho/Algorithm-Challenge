function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    const stack = [0];
    
    numbers.forEach((number, index) => {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < number) {
            answer[stack.pop()] = number;
        }
        
        stack.push(index);
    });
    
    return answer;
}
