export function restrict(target, template) {
    for (let key of Object.keys(target)) {
      if (!Object.prototype.hasOwnProperty.call(template, key)) {
        delete target[key];
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