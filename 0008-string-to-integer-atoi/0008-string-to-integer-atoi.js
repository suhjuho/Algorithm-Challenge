/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    const result = [];
    const str = s.trim();
    let isNegative = false;
  
    for (let i = 0; i < str.length; i += 1) {
        if (i === 0 && str[i] === "-") {
            isNegative = true;
            continue;
        }

        if (i === 0 && str[i] === "+") {
            isNegative = false;
            continue;
        }

        if (48 <= str[i].charCodeAt() && str[i].charCodeAt() <= 57) {
            result.push(str[i]);
        } else {
            break;
        }
    }

    if (result.length === 0) {
        return 0;
    }

    const answer = parseInt(result.join(""), 10);

    if (isNegative) {
        return round(answer, isNegative) * -1;
    }

    return round(answer, isNegative);
};

function round(number, isNegative) {
    if (!isNegative && number > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }

    if (isNegative && number > 2 ** 31) {
        return 2 ** 31;
    }

    return number;
}
