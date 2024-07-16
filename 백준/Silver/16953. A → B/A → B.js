const INPUT_PATH = "../inputs/A->B.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [start, goal] = inputArguments[0].split(" ").map(Number);
  const queue = [[start, 1]];

  while (queue.length > 0) {
    const [number, times] = queue.shift();

    if (number === goal) {
      return times;
    }

    if (number * 2 <= goal) {
      queue.push([number * 2, times + 1]);
    }

    if (number * 10 + 1 <= goal) {
      queue.push([number * 10 + 1, times + 1]);
    }
  }

  return -1;
}

console.log(solution(input));
