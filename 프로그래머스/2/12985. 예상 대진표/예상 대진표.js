function solution(n,a,b) {
    let [numberA, numberB] = [a, b];
    let answer = 0;
    
    while (true) {
        answer += 1;
        numberA = (numberA % 2 === 1) ? (numberA + 1) / 2 : numberA / 2;
        numberB = (numberB % 2 === 1) ? (numberB + 1) / 2 : numberB / 2;
        
        if (numberA === numberB) {
            return answer;
        }
    }
}
