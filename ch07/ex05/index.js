// 非破壊的版関数を書く

export function push(arr, item) {
  // 新しい配列を作成
  const newArr = arr.slice();
  // 新しい配列にアイテムを追加
  newArr.push(item);
  // 新しい配列を返す
  return newArr;
}

export function pop(arr) {
  // 新しい配列を作成
  const newArr = arr.slice();
  // 最後のアイテムを削除
  newArr.pop();
  // 新しい配列を返す
  return newArr;
}

export function shift(arr) {
  // 新しい配列を作成
  const newArr = arr.slice();
  // 最初のアイテムを削除
  newArr.shift();
  // 新しい配列を返す
  return newArr;
}

export function unshift(arr, item) {
  // 新しい配列を作成
  const newArr = arr.slice();
  // 最初にアイテムを追加
  newArr.unshift(item);
  // 新しい配列を返す
  return newArr;
}

export function sort(arr, compareFn) {
  // 新しい配列を作成
  const newArr = arr.slice();
  // ソートを適用
  newArr.sort(compareFn);
  // 新しい配列を返す
  return newArr;
}