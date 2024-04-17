/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    const minLength = Math.min(...strs.map((str) => str.length));
    let result = "";

    for (let i = 0; i < minLength; i += 1) {
        let isSame = true;
        const character = strs[0][i];

        strs.forEach((str) => {
            if (str[i] !== character) {
                isSame = false;
            }
        });

        if (!isSame) {
            return result;
        }

        result += character;
    }

    return result;
};
