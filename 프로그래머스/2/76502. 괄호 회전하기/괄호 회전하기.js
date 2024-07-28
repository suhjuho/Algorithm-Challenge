const parenthesis = {
    "]": "[",
    "}": "{",
    ")": "("
}

function solution(s) {
    let answer = 0;
    let string = s;
    const length = s.length;
    
    for (let i = 0; i < length; i++) {
        if (isRightParentalString(string)) {
            answer++;
        }
        
        string = string.slice(1) + string[0];
    }
    
    return answer;
}

function isRightParentalString(s) {
    const stack = [];
    
    for (const bracket of s) {
        if (stack.length > 0 && stack[stack.length - 1] === parenthesis[bracket]) {
            stack.pop();
        } else {
            stack.push(bracket);
        }
    }
    
    return stack.length > 0 ? false : true;
}
