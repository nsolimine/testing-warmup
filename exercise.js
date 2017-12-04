var numbers = [0, 1, 2, 3, 4];


function addsNumbers(number) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};


module.exports = {
  addsNumbers
};
