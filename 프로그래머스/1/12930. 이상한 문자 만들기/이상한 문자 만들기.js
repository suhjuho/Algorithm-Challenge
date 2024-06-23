function solution(s) {
    const words = s.split(" ");
    
    return words.map((word) => 
        word.split("").map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }).join("")
    ).join(" ");
}