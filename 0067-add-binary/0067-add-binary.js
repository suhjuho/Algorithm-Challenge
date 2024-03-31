/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let result = "";

    const reverseA = a.split("").reverse().map(Number);
    const reverseB = b.split("").reverse().map(Number);
    const maxLength = Math.max(reverseA.length, reverseB.length);

    let carry = 0;

    for (let i = 0; i < maxLength; i++) {
        if (!reverseA[i]) {
            reverseA[i] = 0;
        }

        if (!reverseB[i]) {
            reverseB[i] = 0;
        }

        if (reverseA[i] + reverseB[i] + carry === 3) {
            result += "1";
            carry = 1;
        } else if (reverseA[i] + reverseB[i] + carry === 2) {
            result += "0";
            carry = 1;
        } else {
            result += reverseA[i] +reverseB[i] + carry;
            carry = 0;
        }
    }

    if (carry === 1) {
        result += "1";
    }

    return result.split("").reverse().join("");
};
