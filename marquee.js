const clearScreen = (screen) => {
  for (const i in screen) screen[i] = " ";
};

const displayOnScreen = (screen) => console.log(screen.join(""));

const drawScreen = (screen, name, currentOffset) => {
  for (let i = 0; i < name.length ; i++) {
    screen[(currentOffset + i) % screen.length] = name[i % name.length];
  }
};

const main = () => {
  const name = "sirisha".toUpperCase();
  const screen = " ".repeat(20).split("");
  let offset = 0;

  setInterval(() => {
    const index = ++offset % screen.length;
    console.clear();
    clearScreen(screen);
    drawScreen(screen, name, index);
    displayOnScreen(screen);
  }, 200);
};

main();
