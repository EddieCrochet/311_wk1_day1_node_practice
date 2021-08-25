/*
* Checks if number is even or odd
* @params {number} num - the number we are checking
* @returns true if number is even or false if it's odd
*/
const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 ? false : true;
}

/**
 * 
 * 
 * 
 */
const sum = (arr) => {
  // write code for numbers.sum
  const reducer = (acc, cur) => acc + cur;
  return arr.reduce(reducer);
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let i = 0; i <= arr.length; i++) {
    for(let j = 0; j <= arr.length; j++){
      if(i + j == sum) return true;
    }
  }
  return false;
}

module.exports = {
  isEven,
  sum,
  comboSum
}