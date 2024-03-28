/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    const result = [];

    sortedIntervals.forEach((interval) => {
        if (result.length === 0) {
            result.push(interval);
        } else {
            const prevInterval = result.pop();
            if (prevInterval[1] >= interval[0]) {
                const newInterval = [prevInterval[0], Math.max(interval[1], prevInterval[1])];
                result.push(newInterval);
            } else {
                result.push(prevInterval);
                result.push(interval);
            }
        }


    });

    return result;
};
