const INPUT_PATH = "../inputs/inputBoilerPlate.txt";

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : INPUT_PATH;
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(inputArguments) {
  let answer = 0;
  let N = Number(inputArguments.shift());

  while (N-- > 0) {
    const word = inputArguments.pop();
    const characters = {};
    let isGroupWord = true;
    characters[word[0]] = true;

    for (let i = 1; i < word.length; i++) {
      if (characters[word[i]] && word[i - 1] !== word[i]) {
        isGroupWord = false;
        break;
      }

      characters[word[i]] = true;
    }

    if (isGroupWord) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(input));
