
export function assign(target, ...sources) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
  
    const to = Object(target);
  
    for (let source of sources) {// オブジェクトで回す
      if (source == null) continue; // undefinedやnullは無視する
  
      const from = Object(source);
  
      for (let key of Object.keys(from)) {
        to[key] = from[key];
      }
  
      for (let sym of Object.getOwnPropertySymbols(from)) {// プロパティ名が Symbol の独自プロパティの配列を返す
        if (Object.getOwnPropertyDescriptor(from, sym).enumerable) {//from オブジェクトの sym プロパティの詳細情報（descriptor）を取得
          to[sym] = from[sym];// 列挙可能ならそのプロパティをコピー
        }
      }
    }
  
    return to;
  }
  