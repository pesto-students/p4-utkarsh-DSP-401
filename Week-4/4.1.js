const getNumber = function getNumber() {
    return Math.round(Math.random() * 100);
  }
  
  let divisible = 5;
  let promise = new Promise(function(reslove, reject) {
    let getNumbe = getNumber();
    console.log(getNumbe);
    if (getNumbe % divisible === 0) {
      reject({ getNumbe, divisible });
    } else {
      reslove(getNumbe);
    }
  
  });
  
  promise.then((value) => {
    console.log('Wow! ' + value);
  }).catch(error =>
    console.log("Whoops! This Number is " + error.getNumbe + " and divisible by " + error.divisible)
  );
  
  