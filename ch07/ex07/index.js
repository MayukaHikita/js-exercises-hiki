// バブルソートを実装
export function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // 配列の要素を繰り返し比較
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      // 隣接する要素を比較し、順序が逆なら交換
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    // 最後の要素は既にソートされているので、次のループでは考慮しない
    n--;
  } while (swapped);

  return arr;
}