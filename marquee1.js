const clearScreen = (screen, screen2) => {
  for (const i in screen) {screen[i] = " ", screen2[i] = " "};
};

const displayOnScreen = (index, screen, screen2) => 
  {
    const screens = [screen, screen2];
    const ind = index % 2;
    const ind2 = 1 - ind;
    console.log(screens[ind].join("") + "\n" + screens[ind2].join("")) 
  };

const drawScreen = (screen, screen2, name, currentOffset) => {
  for (let i = name.length - 1; i >= 0; i -= 2) {
    screen[((currentOffset - name.length) + i) % screen.length] = name[i % name.length];
    screen2[((currentOffset - name.length) + i+1) % screen2.length] = name[i + 1 % name.length];
  }
};

const main = () => {
  const name = "▫️▫️▫️▫️▫️▫️▫️▫️◼️".toUpperCase();
  const screen = " ".repeat(20).split("");
  const screen2 = " ".repeat(20).split("");
  let offset = 0;

  setInterval(() => {
    const index = ++offset % screen.length;
    console.clear();
    clearScreen(screen, screen2);
    drawScreen(screen, screen2, name, index);
    displayOnScreen(index, screen, screen2);
  }, 200);
};

main();
