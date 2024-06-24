function solution(food) {
    const foods = [];
    
    for (let i = 1; i < food.length; i += 1) {
        const count = Math.floor(food[i] / 2);
        
        for (let j = 0; j < count; j += 1) {
            foods.push(i.toString());
        }
    }
    
    return foods.join("") + "0" + foods.reverse().join("");
}
