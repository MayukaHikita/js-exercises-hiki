import { generateFibonacciWile } from  "./index.js";
import { generateFibonacciDoWhile } from "./index.js";
import { generateFibonacciFor } from "./index.js";

describe("フィボナッチ", () => {
  it("should generate Fibonacci sequence using while loop", () => {
    const result = generateFibonacciWile();
    expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it("should generate Fibonacci sequence using do-while loop", () => {
    const result = generateFibonacciDoWhile();
    expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });

  it("should generate Fibonacci sequence using for loop", () => {
    const result = generateFibonacciFor();
    expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});