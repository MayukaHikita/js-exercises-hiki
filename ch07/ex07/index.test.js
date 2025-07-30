import { bubbleSort } from "./index.js";

describe("Bubble Sort Tests", () => {
  test("should sort an array of numbers", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle an already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle an empty array", () => {
    const input = [];
    const expected = [];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle an array with one element", () => {
    const input = [42];
    const expected = [42];
    expect(bubbleSort(input)).toEqual(expected);
  });

});