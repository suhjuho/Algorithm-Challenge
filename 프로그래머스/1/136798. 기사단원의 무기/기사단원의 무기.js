function solution(number, limit, power) {
    let answer = 0;
    
    for (let knight = 1; knight <= number; knight += 1) {
        const weapon = getDivisorCount(knight);
        
        answer += weapon <= limit ? weapon : power;
    }
    
    return answer;
}

function getDivisorCount(n) {
    let divisors = 0;
    
    for (let i = 1; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) {
            divisors += 2;
            
            if (i * i === n) {
                divisors -= 1;
            }
        }
    }
    
    return divisors;
}
