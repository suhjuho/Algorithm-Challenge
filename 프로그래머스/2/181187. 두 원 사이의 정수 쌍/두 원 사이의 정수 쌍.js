function solution(r1, r2) {
    const [outerR, innerR] = [Math.pow(r2, 2), Math.pow(r1, 2)];
    let count = 0;
          
    for (let x = r2; x > 0; x--) {
        const outer = Math.pow(r2, 2);
        const valueX = Math.pow(x, 2);
        const maxY = Math.floor(Math.sqrt(outer - valueX));
        const minY = Math.ceil(Math.sqrt(Math.pow(r1, 2) - valueX)) || 0;

        count += (maxY - minY + 1);
    }
    
    return 4 * count;
}
