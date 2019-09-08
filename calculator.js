function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function sum(listOfNumbers) {
  let total = 0;
  listOfNumbers.forEach(number => {
    total += number;
  });
  return total;
}

module.exports = {add, subtract, sum};
