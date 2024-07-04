function solution(weights) {
  let answer = 0;
  const balancedWeight = {};
  const ratios = [1, 3 / 2, 2, 4 / 3];

  weights.sort((a, b) => b - a).forEach(weight => {
    ratios.forEach(ratio => {
        if (balancedWeight[weight * ratio]) {
            answer += balancedWeight[weight * ratio];
        }
    });
    
    balancedWeight[weight] =  (balancedWeight[weight] || 0) + 1;
  });

  return answer;
}
