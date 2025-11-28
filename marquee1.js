const clearScreen = (screen, screen2, screen1) => {
  for (const i in screen) {screen[i] = " ", screen2[i] = " ", screen1[i] = " "};
};

const displayOnScreen = (index, screen, screen1, screen2) => 
  {
    const screens = [screen, screen2];
    const ind = index % 2;
    const ind2 = 1 - ind;

    console.log(screens[ind].join("") +"\n"+ screen1.join("") +"\n" + screens[ind2].join("")) 
  };

const drawScreen = (screen,screen1, screen2, name, currentOffset) => {
  for (let i = name.length - 1 ; i >= 0; i -= 2) {
    if(currentOffset % 2 === 0){
      screen1[((currentOffset - name.length) + i) % screen.length] = name[i % name.length];
      screen1[((currentOffset - name.length) + i + 1) % screen.length] = name[i + 1 % name.length];
    }
    else{

      screen[((currentOffset - name.length) + i) % screen.length] = name[i % name.length];
      screen2[((currentOffset - name.length) + i + 1) % screen2.length] = name[i + 1 % name.length];
    }
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
