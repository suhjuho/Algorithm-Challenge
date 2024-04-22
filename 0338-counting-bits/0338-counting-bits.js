/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const result = [];

    function checkBits(num) {
        let bits = 0;
       
        while (num > 1) {
            if (num % 2 === 1) {
                bits += 1;
            }

            num = Math.floor(num / 2);
        } 

        if (num === 1) {
            bits += 1;
        }

        return bits;
    }

    for (let i = 0; i < n + 1; i += 1) {
        result.push(checkBits(i));
    }

    return result;
};
