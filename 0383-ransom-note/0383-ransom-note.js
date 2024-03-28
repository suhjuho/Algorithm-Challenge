/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const magazineLetters = {};

    for (let letter of magazine) {
        if (magazineLetters[letter]) {
            magazineLetters[letter] += 1;
        } else {
            magazineLetters[letter] = 1;
        }
    }

    let result = true

    for (let letter of ransomNote) {
        if (magazineLetters[letter] && magazineLetters[letter] !== 0) {
            magazineLetters[letter] -= 1;
        } else {
            result = false;
            
            return result
        }
    }

    return result;
};
