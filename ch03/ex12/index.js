// valueOf(), toString() を持つクラスを定義しなさい。
// そのクラスのインスタンスを作成し、valueOf(), toString() を直接呼び出さずにそれぞれの結果を出力するコードを書きなさい。
class Example {
    valueOf() {
        return 10;
    }
  
    toString() {
        return "Hello, World!";
    }
  }
  
  let obj = new Example();

  console.log(obj + 5); // valueOf()  15
  console.log(String(obj)); // toString()  Hello, World!