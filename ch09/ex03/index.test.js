import { PositiveNumber } from "./index.js";

describe("PositiveNumber", () => {
  test("正の数で初期化できる", () => {
    const num = PositiveNumber(10);
    expect(num.getX()).toBe(10);
  });

  test("0以下で初期化するとエラー", () => {
    expect(() => PositiveNumber(0)).toThrow("require : x > 0");
    expect(() => PositiveNumber(-5)).toThrow("require : x > 0");
  });

  test("setXで正の数に変更できる", () => {
    const num = PositiveNumber(10);
    num.setX(20);
    expect(num.getX()).toBe(20);
  });

  test("setXで0以下に変更するとエラー", () => {
    const num = PositiveNumber(10);
    expect(() => num.setX(0)).toThrow("require : x > 0");
    expect(() => num.setX(-5)).toThrow("require : x > 0");
  });
});