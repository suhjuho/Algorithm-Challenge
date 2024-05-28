/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function(words, k) {
    const countFrequency = {};
    const wordList = [];

    words.forEach((word) => {
        if (countFrequency[word]) {
            countFrequency[word] += 1;
        } else {
            countFrequency[word] = 1;
            wordList.push(word);
        }
    });

    wordList.sort();
    wordList.sort((a, b) => countFrequency[b] - countFrequency[a]);

    return wordList.slice(0, k);
};
