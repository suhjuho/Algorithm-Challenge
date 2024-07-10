function solution(word) {
    const dictionary = {};
    let index = 0;
    const vowels = ["A", "E", "I", "O", "U"];
    
    function makeDictionary(currentWord) {
        dictionary[currentWord] = index++;
        
        if (currentWord.length > 4) {
            return;
        }
        
        for (let i = 0; i < 5; i += 1) {
            makeDictionary(currentWord + vowels[i]);
        }
    }
    
    makeDictionary("");
    
    return dictionary[word];
}
