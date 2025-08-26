import { any, catching } from "./index.js";

describe("any", () => {
  test("returns true if any function returns true", () => {
    const isEven = (n) => n % 2 === 0;
    const isGreaterThanTen = (n) => n > 10;
    const isNegative = (n) => n < 0;

    const anyFunc = any(isEven, isGreaterThanTen, isNegative);

    expect(anyFunc(4)).toBe(true); // isEven
    expect(anyFunc(11)).toBe(true); // isGreaterThanTen
    expect(anyFunc(-3)).toBe(true); // isNegative
    expect(anyFunc(3)).toBe(false); // none
  });
});

describe("catching", () => {
  test("catches errors and calls catch function", () => {
    const tryFn = (n) => {
      if (n < 0) throw new Error("Negative number");
      return n * 2;
    };
    const catchFn = (error) => `Caught: ${error.message}`;

    const safeFn = catching(tryFn, catchFn);

    expect(safeFn(5)).toBe(10); // No error
    expect(safeFn(-3)).toBe("Caught: Negative number"); // Caught error
  });
});