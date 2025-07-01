export function bitCount(n) {
    n = n >>> 0; // >>>0とするとシフトはしないが32ビット符号なし整数として変換される
    let count = 0;
    while (n) {
        count += n & 1; // 最下位ビットが1ならcountを増やす
        n = n >>> 1; // 1ビット分符号なし右シフト
    }
    return count;
}