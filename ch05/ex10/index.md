## 5.10
console.log の出力: { a: 1, b: 2, obj: { a: 4, b: 4 }}  
with 文を使わずに同じ処理を書く場合: obj.a = obj.b;  

console.log の出力: { a: 4, b: 2, obj: { b: 4 }}  
with 文を使わずに同じ処理を書く場合: a = obj.b;    

console.log の出力: { a: 1, b: 2, obj: { a: 2 } }  
with 文を使わずに同じ処理を書く場合: obj.a = b;    

console.log の出力: { a: 2, b: 2, obj: {}}      
with 文を使わずに同じ処理を書く場合: a = b;