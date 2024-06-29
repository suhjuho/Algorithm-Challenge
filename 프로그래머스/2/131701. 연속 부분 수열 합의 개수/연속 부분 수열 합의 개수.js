function solution(elements) {
    const sums = {};
    const maxSum = elements.reduce((acc, cur) => acc + cur);
    const twoElements = elements.concat(elements);
    let [startPointer, endPointer] = [0, 0];
    
    elements.forEach((element) => {
        sums[element] = true;
    });
    
    for (let i = 0; i < twoElements.length; i += 1) {
        let tempSum = twoElements[i];
        
        for (let j = i + 1; j < twoElements.length; j += 1) {
            tempSum += twoElements[j];
            
            if (tempSum > maxSum) {
                break;
            }
            
            sums[tempSum] = true;
        }
    }
    
    return Object.keys(sums).length;
}
