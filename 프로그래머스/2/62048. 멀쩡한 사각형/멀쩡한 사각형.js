function solution(w, h) {
    return w * h - (w + h - getGCD(w, h));
}

const getGCD = (num1, num2) => {
    let gcd = 1;

    for(let i = 2; i <= Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0){
            gcd = i;
        }
    }

    return gcd;
}
