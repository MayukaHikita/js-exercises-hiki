import { compare } from "./index.js";

describe("compare", () => {
  it("returns true for equal numbers", () => {
    expect(compare(0.3 - 0.2, 0.1)).toBe(true);
    expect(compare(0.2 - 0.1, 0.1)).toBe(true);
    expect(compare(0.3, 0.3)).toBe(true);
    expect(compare(0.1, 0.3 - 0.2)).toBe(true);
    expect(compare(0.1 + 0.2, 0.3)).toBe(true);
  });

  it("returns false for different numbers", () => {
    expect(compare(0.1, 0.2)).toBe(false);
    expect(compare(0.2, 0.1)).toBe(false);
    expect(compare(0.2, 0.3)).toBe(false);
    expect(compare(0.1 + 0.2, 0.4)).toBe(false);
  });
})