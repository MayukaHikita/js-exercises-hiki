// sum: 配列の要素をすべて足し合わせる
export function sum(arr) {
  return arr.reduce((x, y) => x + y, 0);// 前回の戻り値、現在の要素の値
}
// join: 配列の要素を指定した区切り文字で結合
export function join(arr, separator = ",") {
  return arr.reduce((x, y, index) => {// 前回の戻り値、現在の要素の値、現在のインデックス
    const newY = (y == null ? "" : y);
    return x + (index > 0 ? separator : "") + newY;
  }, "");
}

// reverse: 配列を逆順にする
export function reverse(arr) {
  return arr.reduce((x, y) => [y, ...x], []);
}
// every: 配列のすべての要素が条件を満たすか確認
export function every(arr, condition) {
  return arr.reduce(
    (x, y, index, array) => x && condition(y, index, array),
    true
  );
}
// some: 配列のいずれかの要素が条件を満たすか確認
export function some(arr, condition) {
  return arr.reduce(
    (x, y, index, array) => x || condition(y, index, array),
    false
  );
}
//前回の処理結果、今処理している配列の要素、現在のインデックス、元の配列、初期値
