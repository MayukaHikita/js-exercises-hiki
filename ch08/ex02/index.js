// べき乗を計算する関数(再帰)
export function power(base, n) {
  if (n === 0) {
    return 1; // べき乗の指数が0の場合は1を返す(nは正の整数だが。)
  }
  let result = 1;
  if (n % 2 === 0) {
    result = power(base, n / 2) * power(base, n / 2);
  } else {
    result = base * power(base, n - 1);
  }
  return result;
}

// べき乗を計算する関数(ループ)
export function powerLoop(base, n) {
  let array = [];
  while (n >= 1) {
    array.push(n);
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
    }
  }

  array.reverse(); // 配列を逆順にする
  let result = 1;
  for (let p of array) {
    if (p % 2 === 0) {
      result *= result; // 偶数ならばresultを2乗する
    } else {
      result *= base; // 奇数ならばresultにbaseを掛ける
    }
  }
  return result;
}