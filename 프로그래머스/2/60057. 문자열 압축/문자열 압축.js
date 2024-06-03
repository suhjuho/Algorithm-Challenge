function solution(s) {
    let minLength = s.length;
    const maxLength = Math.floor(s.length / 2);
    
    for (let step = 1; step <= maxLength; step += 1) {
        const countUnits = [];
        const units = [];
        let length = 0;
        
        for (let i = 0; i < s.length; i += step) {
            const unit = s.slice(i, i + step);
            
            if (units[units.length - 1] === unit) {
                countUnits[countUnits.length - 1] += 1;
            } else {
                units.push(unit);
                countUnits.push(1);
            }
        }
        
        length = units.join("").length + countUnits.filter(el => el > 1).join("").length;
        minLength = Math.min(minLength, length)
    }
    
    return minLength;
}
