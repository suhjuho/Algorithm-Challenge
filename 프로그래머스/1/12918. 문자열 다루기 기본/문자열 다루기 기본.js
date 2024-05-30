function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    for (let i = 0; i < s.length; i += 1) {        
        if (s.charCodeAt(i) < 48 || s.charCodeAt(i) > 57) {
            return false;
        }
    }
    
    return true;
}
