function solution(n) {
    let number = n;
    let answer = "";
    
    while (number > 0) {
        const remain = number % 3;
        
        answer = remain === 0 ? "4" + answer : remain + answer;
        number = Math.floor((number - 1) / 3);
    }
        
    return answer;
}
