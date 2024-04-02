/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if (s.length === 0) {
        return 0;
    }
    
    let startPointer = 0;
    let endPointer = 0;
    let repeatingCharacter = "";
    const repeatingCharacters = {};
    repeatingCharacters[s[0]] = true;
    let result = 1;

    while(startPointer <= s.length - 1 && endPointer <= s.length - 1) {
        if (repeatingCharacter === "" && endPointer < s.length - 1) {
            endPointer += 1;
            const newCharacter = s[endPointer];

            if (repeatingCharacters[newCharacter]) {
                repeatingCharacter = newCharacter;
            } else {
                repeatingCharacters[newCharacter] = true;
                result = Math.max(result, endPointer - startPointer + 1);
            }
        } else {
            startPointer += 1;
            const prevCharacter = s[startPointer - 1];
            const character = s[startPointer];
          
            repeatingCharacters[character] = true;

            if (repeatingCharacter === prevCharacter) {
                repeatingCharacters[prevCharacter] = true;
                repeatingCharacter = ""
            } else {
                repeatingCharacters[prevCharacter] = false;
            }
        }
    }

    return result;
};
