const clearScreen = (screen) => {
  for (const i in screen) screen[i] = " ";  
}

const displayOnScreen = (screen) =>
  console.log(screen.join(""));

const drawScreen = (screen, name, index) => {
  for(let i = 0; i < name.length; i++){
  screen[((index + i) % screen.length)] = name[i % name.length];
}
}

const main = () => {
const name = "sirisha".toUpperCase();
const screen = " ".repeat(20).split("");
let count = 0;
  setInterval(() => {
    const index = ++count % screen.length;
    console.clear();
    clearScreen(screen);
    drawScreen(screen, name, index);
    displayOnScreen(screen);
  }, 300);
}

main();