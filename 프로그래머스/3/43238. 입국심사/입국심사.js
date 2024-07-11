function solution(n, times) {
    let [start, end] = [1, Math.max(...times) * n];
    let middle = Math.floor((start + end) / 2);
    
    while (start < end) {
        middle = Math.floor((start + end) / 2);
        
        let people = 0;
        
        times.forEach((time) => {
            people += Math.floor(middle / time);
        });
        
        if (people < n) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    
    return start;
}
