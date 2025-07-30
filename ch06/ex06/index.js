export function getPropertyNames(obj) {
    let ownKeys = Reflect.ownKeys(obj); // 独自プロパティを取得 (列挙不可、Symbol含む)
    let currentObj = Object.getPrototypeOf(obj);
    let inheritedKeys = [];
    while (currentObj) {
      let keys = Object.keys(currentObj); // 列挙可能な継承プロパティ
      inheritedKeys.push(...keys);
      currentObj = Object.getPrototypeOf(currentObj);
    }
    return [...ownKeys,  ...inheritedKeys];
  }