function solution(triangle) {
    if (triangle.length === 1) {
        return triangle[0][0];
    }
    
    const arr = triangle.map((li) => [...li]);
    
    for (let i = 1; i < arr.length; i += 1) {
        for (let j = 0; j <= i; j += 1) {
            if (j === 0) {
                arr[i][j] += arr[i - 1][j];
            } else if (j === i) {
                arr[i][j] += arr[i - 1][j - 1];
            } else {
                arr[i][j] += Math.max(arr[i - 1][j - 1], arr[i - 1][j]);    
            }
        }
    }
    
    return Math.max(...arr[arr.length - 1]);
}
