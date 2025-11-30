const createGrid = (rows, columns) => {
  const grid = [];
  for (let index = 0; index < rows; index++) {
    grid.push("..".repeat(columns).split(" "));
  }
  return grid;
};

const displayGrid = (grid) => {
  //"\x1B[47m" + text + "\x1B[0m"
  //\x1B[48;5;214m ${string} \x1B[0m
  console.log(`\x1B[48;5;231m${grid.map((x) => x.join("")).join("\n")}\x1B[0m`);
};

const clearGrid = (grid) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid[i][j] = "  ";
    }
  }
};

const snakeOngrid = (a, j, grid) => {
  //console.log(a, a.length)
  for (let index = 3; index >= 0; index--) {
    const y = ((j + index) + 1) <= 10 ? j + index : 9;
    const x = (y + 1) < 11? 0 : index;
    console.log(j,"+",index,":", j +index,"[",x,y,"]")
    //console.log("[",0,pos,"]", a[index])
    grid[x][y] = a[index];
  }
}

const main = () => {
let j = 0;
  setInterval(() =>
    {
      console.clear();
      const grid = createGrid(10, 10);
      clearGrid(grid, 10, 10);
      snakeOngrid([..."🟡🟡🟡🟤"], j++ % 10, grid)
      displayGrid(grid);

     }, 3000);
};

main();
