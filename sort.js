const numbers = [-1, -7, -20,20];

const sortedArr = [];

numbers.forEach((number) =>
  setTimeout(() => {
    sortedArr.push(number);
    console.log(sortedArr);
  }, (((number + number) * 100) / number) + number)
);
