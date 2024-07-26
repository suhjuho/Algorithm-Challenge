const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  const [N, K] = inputArguments[0].split(" ").map(Number);
  const queue = [[N, 0]];
  const visited = { N: true };

  while (queue.length > 0) {
    const [number, step] = queue.shift();

    if (number === K) {
      return step;
    }

    if (number - 1 >= 0 && !visited[number - 1]) {
      visited[number - 1] = true;
      queue.push([number - 1, step + 1]);
    }

    if (number + 1 <= 100000 && !visited[number + 1]) {
      visited[number + 1] = true;
      queue.push([number + 1, step + 1]);
    }

    if (number * 2 <= 100000 && !visited[number * 2]) {
      visited[number * 2] = true;
      queue.push([number * 2, step + 1]);
    }
  }

  return -1;
}

console.log(solution(input));
