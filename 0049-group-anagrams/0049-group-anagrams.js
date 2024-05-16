/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const result = [];
    const anagramIndex = {};
    let lastIndex = 0;

    strs.forEach((str) => {
        const sortedString = str.split("").sort().join("");
        
        if (anagramIndex[sortedString] !== undefined) {
            result[anagramIndex[sortedString]].push(str);
        } else {
            result.push([str]);
            anagramIndex[sortedString] = lastIndex;
            lastIndex += 1;
        }
    });

    return result;
};
