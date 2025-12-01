const makeScreen = (rows, cols) => {
  let screen = [];
  let line = 0;
  while (line < rows) {
    screen.push(" ".repeat(cols).split(""));
    line++;
  }
  return screen;
};

const screen = makeScreen(5, 9);

const drawOnScreen = (screen, x, y, character) => {
  screen[x][y] = character;
  return screen.map((e) => e.join("")).join("\n");
};

let verticalX1 = 0;

// vertical - at front:
const verticalUp = setInterval(() => {
  console.clear();
  console.log(drawOnScreen(screen, verticalX1, 0, "*"));
  verticalX1 = verticalX1 < 4 ? verticalX1 + 1 : horizontalY2();
}, 500);

//horizontal - at bottom:
const horizontalY2 = () => {
  clearInterval(verticalUp);
  let horizontalY1 = 0;
  const horizontalBottomId = setInterval(() => {
    console.clear();
    console.log(drawOnScreen(screen, 4, horizontalY1, "* "));
    horizontalY1 = horizontalY1 < 4
      ? horizontalY1 + 1
      : verticalDown(horizontalBottomId);
  }, 500);
};

// vertical - at back:
const verticalDown = (horizontalBottomId) => {
  clearInterval(horizontalBottomId);
  let verticalX2 = 3;
  const vertical = setInterval(() => {
    console.clear();
    console.log(drawOnScreen(screen, verticalX2, 8, "*"));
    verticalX2 = verticalX2 > 1 ? verticalX2 - 1 : horizontalTop(vertical);
  }, 500);
};

//horizontal - at top:
const horizontalTop = (vertical) => {
  clearInterval(vertical);
  let horizontalX = 4;
  
  const horizontalid = setInterval(() => {
    console.clear();
    console.log(drawOnScreen(screen, 0, horizontalX, "* "));
    horizontalX = horizontalX > 0
      ? horizontalX - 1
      : clearInterval(horizontalid);
  }, 500);
};