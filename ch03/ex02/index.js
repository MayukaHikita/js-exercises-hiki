console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_VALUE+1); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE+1 === Number.MAX_VALUE+2); // true 1はNumber.MAX_VALUEから考えれば誤差レベルの無視できる差だから。