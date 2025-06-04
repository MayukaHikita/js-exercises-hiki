import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

  // 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("returns 0 when empty array given", () => {
      expect(sum([])).toBe(0);
    });

    it("returns sum of array when non-empty array given", () => {
      expect(sum([1, 2, 3])).toBe(6);
      expect(sum([-1, -2, -3])).toBe(-6);
      expect(sum([1, -1, 2, -2])).toBe(0);
    });
  });

  describe("factorial", () => {
    it("returns 1 when 0 given", () => {
      expect(factorial(0)).toBe(1);
    });
    it("returns 1 when 1 given", () => {
      expect(factorial(4)).toBe(24);
    });
  });
});