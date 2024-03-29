/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let [start, middle, end] = [1, Math.floor((1 + n) / 2), n];

        if (isBadVersion(1)) {
            return 1;
        }

        while (true) {
            if (isBadVersion(middle)) {
                [middle, end] = [Math.floor((start + middle) / 2), middle];
            } else {
                [start, middle] = [middle, Math.floor((middle + end) / 2)];
            }

            if (end - start <= 1) {
                break;
            }
        }

        return end;
    };
};