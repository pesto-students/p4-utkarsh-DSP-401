// 6.1 - max sum contious sub array 
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let maxNumber = 0;
let sum = 0;
arr.forEach((element) => {
  sum += element;

  console.log("element => ", element);
  console.log("sum => ", sum);
  if (sum > maxNumber) {
    maxNumber = sum;
  }
  if (sum < 0) {
    sum = 0;
  }

  console.log("maxNumber => ", maxNumber);
});

console.log("maxNumber => ", maxNumber);
