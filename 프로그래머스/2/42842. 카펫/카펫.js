function solution(brown, yellow) {
    const answer = [];
    const total = brown + yellow;
    const cases = [];
    
    for (let i = 2; i <= Math.floor(total / 2); i += 1) {
        if (total % i === 0) {
            cases.push([i, total / i]);
        }
    }
    
    for (let i = 0; i < cases.length; i += 1) {
        const [row, col] = cases[i];
        const calculatedBrown = row * 2 + 2 * (col - 2);
        
        if (brown === calculatedBrown) {
            return [col, row];
        }
    }
}