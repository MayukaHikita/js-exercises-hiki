import { push, pop, shift, unshift, sort } from "./index.js";

describe("非破壊的版関数のテスト", () => {
  test("pop", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = pop(arr);
    expect(result).toEqual([1, 2, 3, 4]);
    expect(arr).toEqual([1, 2, 3, 4, 5]); // 元の配列は変わらない
    expect(result).not.toBe(arr); // 新しい配列が作成されている
  });
  test("push", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = push(arr, 6);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr).toEqual([1, 2, 3, 4, 5]); // 元の配列は変わらない
    expect(result).not.toBe(arr); // 新しい配列が作成されている
  });
  test("shift", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = shift(arr);
    expect(result).toEqual([2, 3, 4, 5]);
    expect(arr).toEqual([1, 2, 3, 4, 5]); // 元の配列は変わらない
    expect(result).not.toBe(arr); // 新しい配列が作成されている
  });
  test("unshift", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = unshift(arr, 0);
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
    expect(arr).toEqual([1, 2, 3, 4, 5]); // 元の配列は変わらない
    expect(result).not.toBe(arr); // 新しい配列が作成されている
  });
  test("sort", () => {
    const arr = [5, 3, 4, 1, 2];
    const result = sort(arr, (a, b) => a - b);
    expect(result).toEqual([1, 2, 3, 4, 5]);
    expect(arr).toEqual([5, 3, 4, 1, 2]); // 元の配列は変わらない
    expect(result).not.toBe(arr); // 新しい配列が作成されている
  });
});
