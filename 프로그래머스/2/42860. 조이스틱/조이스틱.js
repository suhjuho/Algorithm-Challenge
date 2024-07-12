function solution(name) {
    let steps = name.length;
    let controlCount = 0;
    
    for (let i = 0; i < name.length; i += 1) {
        const alphabet = name[i];
        const controls = alphabet.charCodeAt() - "A".charCodeAt()
    
        controlCount += Math.min(controls, 26 - controls);
        
        let nextIndex = i + 1;
        
        while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
            nextIndex += 1;
        }
        
        steps = Math.min(steps, i * 2 + name.length - nextIndex, i + (name.length - nextIndex) * 2);
    }
    
    controlCount += steps;
     
    return controlCount;
}
