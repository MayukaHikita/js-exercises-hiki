// 絶対値を計算する関数
export function abs(x) {
  if (x >= 0) {
    return x;
  }
  else {
    return -x;
  }
}

// 2つの数値を足す関数
export function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}

// 階乗を計算する関数
export function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}
