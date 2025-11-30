const diagonalLR = (name, plane, ind, r, c) => {
  const a = r;
  const b = c
  for (let index = 0; index < name.length; index++) {
    const planeIndex = (ind) % plane.length;
    plane[(planeIndex + r++) % (plane.length - 1 - b)][(planeIndex + c++) % (plane.length - 1 - a)] = name[(index + name.length) % name.length];
  }
};