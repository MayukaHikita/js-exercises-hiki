// // ゼロ幅接合子 たとえば、👨‍👨‍👧‍👧 は以下のような複数の絵文字を ZWJで結合してできている！
// // 👨 + ZWJ + 👨 + ZWJ + 👧 + ZWJ + 👧
// export function reverse(str) {
//   // ゼロ幅接合子が含まれない場合、通常の文字列を逆順にする
//   if (!str.includes("\u200D")) {
//     return str.split("").reverse().join("");
//   }
//   // ゼロ幅接合子を使って文字列を分割
//   const characters = str.split(/(?<=\u200D)/).reverse();

//   // 分割された文字列を再結合
//   return characters.join("");
// }

// 𠮷 が分割されてしまった、、、