const input = require("./input");
const lines = input.getLines("./tag4.txt").filter((line) => line !== "");

const getRandomNumbers = () => {
  return lines.shift().split(",");
};

const getBoards = () => {
  const boards = [];

  do {
    let temp = [];
    for (let i = 0; i < 5; i++) {
      const currentLine = lines.shift();
      const numbers = currentLine
        .split(" ")
        .filter((num) => num !== "")
        .map((num) => {
          return { num: num, marked: false };
        });
      temp.push(numbers);
    }
    boards.push(temp);
  } while (lines.length != 0);

  return boards;
};

const bingoNumbers = getRandomNumbers();
const boards = getBoards();

const getFirstWinning = () => {
  do {
    const number = bingoNumbers.shift();

    for (const board of boards) {
      for (const lines of board) {
        const index = lines.findIndex((o) => o.num === `${number}`);
        if (index !== -1) {
          lines[index].marked = true;
        }
      }

      // Check win vertical
      let temp = [];
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          temp.push(board[j][i]);
        }
        if (temp.filter((o) => !o.marked).length === 0) {
          const index = boards.indexOf(board);
          boards.splice(index, index + 1);
          return { num: number, board: board };
        }
        temp = [];
      }

      // Check win horizontal
      for (const lines of board) {
        if (lines.filter((o) => !o.marked).length === 0) {
          const index = boards.indexOf(board);
          boards.splice(index, index + 1);
          return { num: number, board: board };
        }
      }
    }
  } while (bingoNumbers.length != 0);

  return -1;
};

const getLastWinning = () => {
  let win
  let lastWin
  do {
    win = getFirstWinning()
    if (win !== -1) {
      lastWin = win;
    }
  } while (win !== -1);
  return lastWin;
};

const resultPart1 = () => {
  const win = getFirstWinning();
  if (win === -1) return -1;

  const unmarkedNumbers = [];
  win.board.forEach((lines) => {
    lines
      .filter((o) => !o.marked)
      .map((o) => o.num)
      .forEach((o) => unmarkedNumbers.push(Number(o)));
  });

  const sumUnmarked = unmarkedNumbers.reduce((a, b) => a + b);

  return sumUnmarked * win.num;
};

const resultPart2 = () => {
  let win = getLastWinning();

  if (win === -1) {
    return -1;
  }

  const unmarkedNumbers = [];
  win.board.forEach((lines) => {
    lines
      .filter((o) => !o.marked)
      .map((o) => o.num)
      .forEach((o) => unmarkedNumbers.push(Number(o)));
  });

  console.log(unmarkedNumbers);

  const sumUnmarked = unmarkedNumbers.reduce((a, b) => a + b);

  console.log("Unmarked Sum", sumUnmarked);
  console.log("Win number", win.num);
  return sumUnmarked * win.num;
};

input.part(1);
console.log("Result", resultPart1());
input.part(2);
console.log("Result", resultPart2());
