export function addMyCall(f) {
    f.myCall = function(thisArg, ...args) {
      const boundFunc = f.bind(thisArg, ...args);
      return boundFunc();
    };
  }