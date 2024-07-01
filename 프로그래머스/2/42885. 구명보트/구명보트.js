function solution(people, limit) {
    let boats = 0;
    let startPointer = 0;
    let endPointer = people.length - 1;
    const sortedPeople = people.sort((a, b) => a - b);
    
    while (startPointer <= endPointer) {
        if (people[startPointer] + people[endPointer] <= limit) {
            startPointer += 1;
            endPointer -= 1;
        } else {
            endPointer -= 1;
        }
        
        boats += 1;
    }
    
    return boats;
}
