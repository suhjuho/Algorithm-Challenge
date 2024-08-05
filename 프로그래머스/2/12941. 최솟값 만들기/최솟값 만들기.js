function solution(A,B){
    const sortedA = A.sort((a, b) => a - b);
    const sortedB = B.sort((a, b) => b - a);
    let index = -1;
    let answer = 0;
    
    while (++index < A.length) {
        answer += sortedA[index] * sortedB[index];
    }
    
    return answer;
}
