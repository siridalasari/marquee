const createPlane = (rows, columns) => {
  const plane = [];

  for (let index = 0; index < rows; index++) {
    plane[index] = "⬜️".repeat(columns).split("");
  }

  return plane;
};

const clearPlane = (plane, rows, columns) => {
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      plane[row][column] = "⬜️";
    }
  }
  //plane.map(x => x.map(() => " "));
};

let debug = 0;

const diagonalLR = (name, plane, ind) => {
  console.log("--------------iteration - ", debug, "-------------------")
  for (let index = 0; index < name.length && ((ind + index) <= plane.length - 1 ); index++) {
    const planeIndex = ind + index;
    //console.log("iteration", ind, "index", index, "length",plane.length,"\n", ind ,"+",index,"::", ind + index ,"%", plane.length, "::", (ind + index) % plane.length);
    plane[planeIndex][planeIndex] = name[index];
  }
  console.log("---------------iteration completed-------------------")
};

const diaonalRL = () => {
    for (let index = name.length - 1; index >= 0; index--) {
    const planeIndex = (ind + index) % plane.length;
    plane[planeIndex][planeIndex] = name[(index + name.length) % name.length];
  }
  for (let index = 0; index < array.length; index++) {
    for (let index = 0; index < array.length; index++) {
    } 
  }

};

const drawOnPlane = (name, plane, ind) => {
  diagonalLR(name, plane, ind);
  //diagonalRl(name, plane, ind);
};

const displayPlane = (plane) => {
  console.log(plane.map((x) => x.join("")).join("\n"));
};

const main = () => {
  const rows = 10;
  const columns = 10;
  const name = "hello";
  const plane = createPlane(rows, columns);

  // setInterval(() => {
  //   const index = debug++ % plane.length;
  //   console.log("debug", debug, "index", index);
  //   // console.clear();
  //   // clearPlane(plane, rows, columns);
  //   // drawOnPlane(name, plane, index);
  //   displayPlane(plane);
  // }, 300);
};

main();
