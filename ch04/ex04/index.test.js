import { bitCount } from "./index.js";

describe("bitCount", () => {
  it("should return 0 for 0", () => {
    expect(bitCount(0)).toBe(0);
  });

  it("should return 1 for 1", () => {
    expect(bitCount(1)).toBe(1);
  });

  it("should return 3 for 7", () => {
    expect(bitCount(7)).toBe(3);
  });

  it("should return the correct count for sample numbers", () => {
    expect(bitCount(0b111)).toBe(3);
    expect(bitCount(0b1111111111111111111111111111111)).toBe(31);
  });
})