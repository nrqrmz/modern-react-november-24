const randomNumbers = [7, -11, 5, 18, 3, 9, 14, 1, 6, -22];

const orderNumbers = (array) => {
  let evenNumbers = [];
  let oddNumbers = [];

  // Tu codigo acá
  array.forEach(number => {
    if (number > 0) {
      evenNumbers.push(number)
    } else {
      oddNumbers.push(number)
    }
  });

  return [evenNumbers, oddNumbers]
}

const [positive, negative] = orderNumbers(randomNumbers)

// console.log(orderNumbers(randomNumbers));
console.log(positive);
console.log(negative);
