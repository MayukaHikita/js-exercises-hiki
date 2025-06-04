import { fibo } from "./index.js";

describe("math", () => {
  describe("fibo", () => {
    it("returns correct value when a value given", () => {
      expect(fibo(1)).toBe(1);
      expect(fibo(2)).toBe(1);
      expect(fibo(3)).toBe(2);
      expect(fibo(4)).toBe(3);
      expect(fibo(5)).toBe(5);
      expect(fibo(75)).toBe(2111485077978050);
    });

    it("returns zero value when zero given", () => {
      expect(fibo(0)).toBe(0);
    });
  });
});