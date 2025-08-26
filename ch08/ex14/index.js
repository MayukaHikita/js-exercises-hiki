export function any(...funcs) {
  return function (...args) {
    return funcs.some((fn) => fn(...args));
  };
}
export function catching(tryFn, catchFn) {
  return function (...args) {
    try {
      return tryFn(...args);
    } catch (error) {
      return catchFn(error);
    }
  };
}
