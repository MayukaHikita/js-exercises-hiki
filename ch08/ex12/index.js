export function f(body) {
    // $1〜$10 を arg1〜arg10 に置換
    const args = Array.from({ length: 10 }, (_, i) => "arg" + (i + 1));
    const replaced = body.replace(/\$([1-9]|10)\b/g, (_, n) => `arg${n}`);
  
    // 複数行や文（; や { } を含む）ならそのまま文ブロック扱い
    // 1行で単純な式だけなら return を補う
    const isBlock = /[;{}]/.test(replaced);
  
    return new Function(...args, isBlock ? replaced : "return " + replaced + ";");
  }