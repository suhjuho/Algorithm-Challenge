function solution(s) {    
    const jadenCaseString = s.split(" ").map((word) => {
        if (!word[0]) {
            return;
        }
        
        const a = word[0].toUpperCase();
        
        return a + word.slice(1).toLowerCase();
    }).join(" ");
    
    return jadenCaseString;
}
