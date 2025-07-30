
export function assign(target, ...sources) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
  
    const to = Object(target);
  
    for (let source of sources) {
      if (source == null) continue; // undefinedやnullは無視する
  
      const from = Object(source);
  
      for (let key of Object.keys(from)) {
        to[key] = from[key];
      }
  
      for (let sym of Object.getOwnPropertySymbols(from)) {
        if (Object.getOwnPropertyDescriptor(from, sym).enumerable) {
          to[sym] = from[sym];
        }
      }
    }
  
    return to;
  }
  