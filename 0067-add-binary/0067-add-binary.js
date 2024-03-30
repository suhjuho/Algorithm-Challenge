/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    let result = "";

    const aa = a.split("").reverse().map(Number);
    const bb = b.split("").reverse().map(Number);
    const maxLength = Math.max(aa.length, bb.length);

    let carry = 0;

    for (let i = 0; i < maxLength; i++) {
        if (!aa[i]) {
            aa[i] = 0;
        }

        if (!bb[i]) {
            bb[i] = 0;
        }

        if (aa[i] + bb[i] + carry === 3) {
            result += "1";
            carry = 1;
        } else if (aa[i] + bb[i] + carry === 2) {
            result += "0";
            carry = 1;
        } else {
            result += aa[i] +bb[i] + carry;
            carry = 0;
        }
    }

    if (carry === 1) {
        result += "1";
    }

    return result.split("").reverse().join("");
};
