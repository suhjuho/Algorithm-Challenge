/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function(points, k) {
    return points.sort((pointA, pointB) => (pointA[0] ** 2 + pointA[1] ** 2) - (pointB[0] ** 2 + pointB[1] ** 2)).slice(0, k);
};