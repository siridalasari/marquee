const clearScreen = (screen, screen2, screen1) => {
  for (const i in screen) screen[i] = " ", screen2[i] = " ", screen1[i] = " ";
};

const displayOnScreen = (screen, screen1, screen2) => {
  console.log(
    screen.join("") + "\n" + screen1.join("") + "\n" +
      screen2.join(""),
  );
};


const drawScreen = (screen, screen1, screen2, name, currentOffset) => {
  const screenIndex = (currentOffset - name.length) ;
  const screens = [screen, screen2]
  if(currentOffset % 2 === 0){
    for (let i = name.length - 1; i >= 0; i -= 1)
      screen1[screenIndex + i % screen.length] = name[i % name.length];
  }
  else {
    for (let i = name.length - 1; i >= 0; i -= 1)
      currentScreen = screens[i % screens.length];
      screens[i % screens.length][screenIndex + i % screen.length] = name[i % name.length];
  }
};

const main = () => {
  const name = "sirisha".toUpperCase();
  const screen = " ".repeat(20).split("");
  const screen1 = " ".repeat(20).split("");
  const screen2 = " ".repeat(20).split("");
  let offset = 0;

  setInterval(() => {
    const index = ++offset % screen.length;
    console.clear();
    clearScreen(screen, screen1, screen2);
    drawScreen(screen, screen1, screen2, name, index);
    displayOnScreen(index, screen, screen1, screen2);
  }, 500);
};

main();
