function solution(nums) {
    const phoneketmons = {};
    
    nums.forEach((num) => {
        phoneketmons[num] = true;
    });
    
    return Math.min(Object.keys(phoneketmons).length, nums.length / 2);
}
