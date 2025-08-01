function fizzbuzz(n) {
  Array.from({ length: n }, (x, i) => i + 1).forEach((num) => {
    console.log(
      num % 15 === 0
        ? "FizzBuzz"
        : num % 3 === 0
        ? "Fizz"
        : num % 5 === 0
        ? "Buzz"
        : num
    );
  });
}
function sumOfSquaredDifference(f, g) {
  return f
    .map((value, index) => (value - g[index]) ** 2)
    .reduce((x, y) => x + y, 0);
    //前回の処理結果、今処理している配列の要素、現在のインデックス、元の配列、初期値
}
function sumOfEvensIsLargerThan42(array) {
  return array.filter((num) => num % 2 === 0).reduce((x, y) => x + y, 0) >= 42;
}


fizzbuzz(15);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

const f = [1, 2, 3];
const g = [4, 5, 6];
console.log(sumOfSquaredDifference(f, g)); // 27

const array = [20, 20, 1, 3, 2];
console.log(sumOfEvensIsLargerThan42(array)); // true
