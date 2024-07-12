function solution(friends, gifts) {
    const giftLog = Array.from(Array(friends.length), () => Array(friends.length).fill(0));
    const friendNumber = {};
    const giftRate = Array(friends.length).fill(0);
    const nextGift = Array(friends.length).fill(0);
    
    friends.forEach((friend, index) => {
        friendNumber[friend] = index;
    })
    
    gifts.forEach((gift) => {
        const [giver, receiver] = gift.split(" ");
        const [giverIndex, receiverIndex] = [friendNumber[giver], friendNumber[receiver]];
        
        giftRate[giverIndex] += 1;
        giftRate[receiverIndex] -= 1;
        giftLog[giverIndex][receiverIndex] += 1;
    });
    
    for (let i = 0; i < friends.length - 1; i += 1) {
        for (let j = i + 1; j < friends.length; j += 1) {
            if (giftLog[i][j] > giftLog[j][i]) {
                nextGift[i] += 1;
            } else if (giftLog[i][j] < giftLog[j][i]) {
                nextGift[j] += 1;
            } else {
                if (giftRate[i] > giftRate[j]) {
                    nextGift[i] += 1; 
                } else if (giftRate[i] < giftRate[j]) {
                    nextGift[j] += 1;
                } 
            }
        }
    }
    
    return Math.max(...nextGift);
}
