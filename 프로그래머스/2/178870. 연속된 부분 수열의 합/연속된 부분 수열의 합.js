function solution(sequence, k) {
    let startIndex = 0;
    let lastIndex = 0;
    let totalSum = sequence[0];
    const results = [];
    
    while (startIndex <= lastIndex) { 
        if (totalSum < k && lastIndex === sequence.length - 1) {
            break;
        }
        
        if (totalSum < k) {
            lastIndex += 1;
            totalSum += sequence[lastIndex];
        } else if (totalSum > k) {
            startIndex += 1;
            totalSum -= sequence[startIndex - 1];
        }
        
        if (totalSum === k) {
            results.push([startIndex, lastIndex]);
            startIndex += 1;
            totalSum -= sequence[startIndex - 1];
        }
            
        if (startIndex === sequence.length - 1 && lastIndex === sequence.length - 1) {
            break;
        }
    }
    
    results.sort((resultA, resultB) => (resultA[1] - resultA[0] + 1) - (resultB[1] - resultB[0] + 1));
    
    return results[0];
}