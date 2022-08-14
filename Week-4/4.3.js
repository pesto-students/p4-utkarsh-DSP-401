// example - 1
// const array = ['a', 'b', 'c'];
// const it = array[Symbol.iterator]();
// console.log(it.next());
// =========================================================
// example - 2
//const str = 'hello';

// calling the Symbol.iterator() method
// const strIterator = str[Symbol.iterator]();

// // gives String Iterator
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// console.log(strIterator.next());
// ==========================================================
//example - 3
// const arr = [1, 2 ,3];

// // calling the Symbol.iterator() method
// const arrIterator = arr[Symbol.iterator]();

// // gives Array Iterator
// for (let index = 0; index < arr.length; index++) {
//     console.log(arrIterator.next());
// }

// ===========================================================
// Create an Object


const fib = (countt) => {
    return {
      [Symbol.iterator]: () => {
        let currentNumber = 0,
          nextNumber = 1,
          sum;
        let currentIndex = 0;
        return {
          next() {
  
            if (currentIndex < countt) {
              currentIndex++;
              sum = currentNumber + nextNumber;
              currentNumber = nextNumber;
              nextNumber = sum;
              // console.log("--------------------------")
              // console.log('currentNumber', currentNumber)
              // console.log("--------------------------")
              return { value: currentNumber, done: false };
            } else {
              return { done: true };
            };
          }
        };
      }
    }
  }
  

  console.log(...fib(12));

//   =================================

function myNumbers() {
    let currentNumber = 0,
    nextNumber = 1,
    sum;
    let currentIndex = 0;
    return {
      next: function() {
        if (currentIndex < countt) {
            currentIndex++;
            sum = currentNumber + nextNumber;
            currentNumber = nextNumber;
            nextNumber = sum;
            // console.log("--------------------------")
            // console.log('currentNumber', currentNumber)
            // console.log("--------------------------")
            return { value: currentNumber, done: false };
          } else {
            return { done: true };
          };
      }
    };
  }
  const n = myNumbers();
  
  console.log(n.next())