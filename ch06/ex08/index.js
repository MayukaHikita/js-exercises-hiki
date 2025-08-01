export function restrict(target, template) {
    for (let key of Object.keys(target)) {
      if (!Object.prototype.hasOwnProperty.call(template, key)) {//template が key というプロパティを「自分自身で」持っているかどうか
        delete target[key];// 持っていなければ削除
      }
    }
    return target;
  }
  export function substract(target, ...sources) {
    for (let source of sources) {
      for (let key of Object.keys(source)) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          delete target[key];
        }
      }
    }
    return target;
  }