const CELL = "  ";
const createScreen = ({width, height}) => {
  return Array.from(
    { length: height },
    () => Array.from({ length: width }, () => CELL),
  );
};

const displayScreen = (grid) => {
  console.log(`\x1B[48;5;231m${grid.map((x) => x.join("")).join("\n")}\x1B[0m`);
};

const clearScreen = (screen, {width, height}) => {
  console.clear();
  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      screen[row][column] = CELL;
    }
  }
};

const addCharOnScreen = () => {
  
}

const drawSnake = (snakeBody, startIndex, screen, xCoordinate) => {
  console.log(xCoordinate);

  for (let index = snakeBody.length - 1; index >= 0; index--) {
    const y = ((startIndex + index) + 1) <  screen.length? startIndex + index : 9;
    const x = Math.abs((startIndex + index) < screen.length ? 0 : xCoordinate--);
    console.log(startIndex, "+", index, ":", startIndex + index, { x, y });
    screen[x][y] = snakeBody[index];
  }
};

const main = () => {
  const snake = {
    startIndex: 0,
    body: [..."🟡🟡🟡🟤"],
  };
  const screenSize = {
    height : 10,
    width : 10
  }

  const screen = createScreen(screenSize);

  setInterval(() => { 

    clearScreen(screen, screenSize); 

    drawSnake(snake.body, snake.startIndex++ % 19, screen, (snake.startIndex + 1) % 9);

    displayScreen(screen);
  }, 300);  
};

main();
