import { add, multiply } from "./index.js";

describe("行列の加算", () => {
  test("2x2行列の加算", () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ];
    const matrixB = [
      [5, 6],
      [7, 8],
    ];
    const expected = [
      [6, 8],
      [10, 12],
    ];
    expect(add(matrixA, matrixB)).toEqual(expected);
  });

  test("サイズ不一致の行列の加算", () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ];
    const matrixB = [
      [5, 6, 7],
      [8, 9, 10],
    ];
    expect(() => add(matrixA, matrixB)).toThrow("行列のサイズが一致しない");
  });
});

describe("行列の乗算", () => {
  test("2x2行列の乗算", () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ];
    const matrixB = [
      [5, 6],
      [7, 8],
    ];
    const expected = [
      [19, 22],
      [43, 50],
    ];
    expect(multiply(matrixA, matrixB)).toEqual(expected);
  });

  test("サイズ不一致の行列の乗算", () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ];
    const matrixB = [
      [5, 6, 7],
      [8, 9, 10],
      [11,12,13]
    ];
    expect(() => multiply(matrixA, matrixB)).toThrow("行列のサイズが乗算不可");
  });
});