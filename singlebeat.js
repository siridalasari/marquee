const createGrid = (rows, columns) => {
  const grid = [];
  for (let index = 0; index < rows; index++) {
    grid.push("..".repeat(columns).split(" "));
  }
  return grid;
};

const displayGrid = (grid) => console.log(grid.map((x) => x.join("")).join("\n"));
  //console.log(`\x1B[48;5;231m${grid.map((x) => x.join("")).join("\n")}\x1B[0m`);
  
const clearGrid = (grid) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      grid[i][j] = "  ";
    }
  }
};


const LR = (beek, grid, start, end) => {
  const row = start;
  for(let col = start; col <= end ; col++) {grid[row][col] = beek};
}

const TB = (beek, grid, start, end) => {
  const col = end;
  for(let row = start; row <= end; row++)grid[row][col] = beek;
}

const RL = (beek, grid, start, end) => {
  const row = end;
  for(let col = end; col >= start ; col--) grid[row][col] = beek;
}

const BT = (beek, grid, start, end) => {
  const col = start;
  for(let row = end; row >= start ; row--) grid[row][col] = beek;
}

const generateBorder = (grid, beek,start, end) => {
        console.clear();
        clearGrid(grid, 10, 10);
        LR(beek,grid, start, end);
        TB(beek,grid, start + 1, end);
        RL(beek,grid, start, end);
        BT(beek,grid, start, end - 1);
        displayGrid(grid);
}

const main = () => {

let start = -1;
let end = 10;
let a = 5;
let b = 4;
    setInterval(() =>
    {
      const grid = createGrid(10, 10);
      start < 5 ? generateBorder(grid,"🔴",++start, --end) : generateBorder(grid,"🔵", a--, b++);
      if(a === 0) {
        a = 5;
        b = 4;
        start = -1;
        end = 10;
      }
    }, 100);

};

main();